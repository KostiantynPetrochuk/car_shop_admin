"use client";
import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFetchWithAuth } from "@/hooks";

import { AdminHeader, Loading } from "@/components/admin";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectBrands, setBrands } from "@/store/features/brands/brandsSlice";
import {
  selectFeatures,
  setFeatures,
} from "@/store/features/features/featuresSlice";

import {
  BODY_TYPES,
  CONDITION,
  DRIVE_TYPE,
  FUEL_TYPES,
  TRANSMISSION,
} from "@/constants";

type Feature = {
  id: string;
  feature_name: string;
  category: string;
  createdDate: string;
  updatedDate: string;
};

const NewCarPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(Array(3).fill(null));
  const brands = useAppSelector(selectBrands);
  const features = useAppSelector(selectFeatures);
  // Form state
  const [form, setForm] = useState({
    vin: "",
    brandId: brands[0]?.id ?? "",
    modelId: "",
    body: "",
    mileage: 0,
    year: 0,
    fuel_type: "",
    transmission: "",
    drive_type: "",
    condition: "",
    engine_size: 0,
    door_count: 0,
    cylinder_count: 0,
    color: "",
  });

  const [carFeatures, setCarFeatures] = useState<number[]>([]);

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    console.log("typeof event: ", typeof event);
    console.log({ name });
    console.log({ value });
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleClickFeature = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const target = event.target as HTMLInputElement;
    const featureId = target.id;
    if (checked) {
      setCarFeatures((prevFeatures) => [...prevFeatures, Number(featureId)]);
    } else {
      setCarFeatures((prevFeatures) =>
        prevFeatures.filter((id) => id !== Number(featureId))
      );
    }
  };

  const featuresInteriorList = (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" component="h3" align="left">
        Інтер'єр
      </Typography>
      <FormGroup>
        {features
          .filter((feature: Feature) => feature.category === "interior")
          .map((feature: Feature) => {
            return (
              <FormControlLabel
                key={feature.id}
                control={<Checkbox id={feature.id} />}
                label={feature.feature_name}
                onChange={handleClickFeature}
              />
            );
          })}
      </FormGroup>
    </Grid>
  );

  const featuresSafetyList = (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" component="h3" align="left">
        Безпека
      </Typography>
      <FormGroup>
        {features
          .filter((feature: Feature) => feature.category === "safety")
          .map((feature: Feature) => {
            return (
              <FormControlLabel
                key={feature.id}
                control={<Checkbox id={feature.id} />}
                label={feature.feature_name}
                onChange={handleClickFeature}
              />
            );
          })}
      </FormGroup>
    </Grid>
  );

  const featuresExteriorList = (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" component="h3" align="left">
        Екстер'єр
      </Typography>
      <FormGroup>
        {features
          .filter((feature: Feature) => feature.category === "exterior")
          .map((feature: Feature) => {
            return (
              <FormControlLabel
                key={feature.id}
                control={<Checkbox id={feature.id} />}
                label={feature.feature_name}
                onChange={handleClickFeature}
              />
            );
          })}
      </FormGroup>
    </Grid>
  );

  const featuresComfortConvenienceList = (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" component="h3" align="left">
        Комфорт та зручності
      </Typography>
      <FormGroup>
        {features
          .filter(
            (feature: Feature) => feature.category === "comfort_convenience"
          )
          .map((feature: Feature) => {
            return (
              <FormControlLabel
                key={feature.id}
                control={<Checkbox id={feature.id} />}
                label={feature.feature_name}
                onChange={handleClickFeature}
              />
            );
          })}
      </FormGroup>
    </Grid>
  );

  const handleImageChange = (event: any, index: any) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  const handleAddImage = () => {
    setImages([...images, null]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const {
      vin,
      brandId,
      modelId,
      body,
      fuel_type,
      year,
      transmission,
      drive_type,
      condition,
      engine_size,
      door_count,
      cylinder_count,
      color,
      mileage,
    } = form;

    if (
      !vin ||
      !brandId ||
      !modelId ||
      !body ||
      !fuel_type ||
      !year ||
      !transmission ||
      !drive_type ||
      !condition ||
      !engine_size ||
      !door_count ||
      !cylinder_count ||
      !color ||
      !mileage
    ) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key as keyof typeof form] as string);
    });

    formData.append("featureIds", JSON.stringify(carFeatures));

    const filesInputs =
      document.querySelectorAll<HTMLInputElement>(".fileInput");
    filesInputs.forEach((input) => {
      if (input.files && input.files.length > 0) {
        formData.append("files", input.files[0]);
      }
    });

    try {
      const response = await fetchWithAuth("/cars", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      setForm({
        vin: "",
        brandId: brands[0]?.id ?? "",
        modelId: "",
        body: "",
        mileage: 0,
        year: 0,
        fuel_type: "",
        transmission: "",
        drive_type: "",
        condition: "",
        engine_size: 0,
        door_count: 0,
        cylinder_count: 0,
        color: "",
      });
      setImages(Array(3).fill(null));
      setCarFeatures([]);
      router.push("/admin/car");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getBrands = async () => {
      const result = await fetchWithAuth("/brand", {
        method: "GET",
      });
      dispatch(setBrands(result));
      setLoading(false);
    };
    getBrands();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getFeatures = async () => {
      const result = await fetchWithAuth("/features", {
        method: "GET",
      });
      console.log(result);
      dispatch(setFeatures(result));
      setLoading(false);
    };
    getFeatures();
  }, []);

  const currentBrand = brands.find(
    (currentBrand) => currentBrand.id == form.brandId
  );

  let modelsItems: any = [];

  if (currentBrand?.models) {
    modelsItems = currentBrand.models;
  }

  return (
    <>
      <Loading loading={loading} />
      <AdminHeader />
      <Container component="main">
        <Box>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Typography variant="h5" component="h2">
                Новий автомобіль
              </Typography>
            </Paper>

            {/* Grid for form inputs */}
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={form.vin}
                    onChange={handleChange}
                    name="vin"
                    fullWidth
                    label="VIN"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Марка</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Бренд"
                      value={form.brandId}
                      onChange={handleChange}
                      name="brandId"
                    >
                      {brands.map((brand) => {
                        return (
                          <MenuItem key={brand.id} value={brand.id}>
                            {brand.brand_name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Модель
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Модель"
                      value={form.modelId}
                      onChange={handleChange}
                      name="modelId"
                    >
                      {modelsItems?.map((model: any) => {
                        return (
                          <MenuItem key={model.id} value={model.id}>
                            {model.model_name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Тип кузова
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      label="Тип кузова"
                      id="demo-simple-select"
                      value={form.body}
                      onChange={handleChange}
                      name="body"
                    >
                      {Object.keys(BODY_TYPES).map((model: any, index) => {
                        return (
                          <MenuItem key={index} value={model}>
                            {model}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Пробіг"
                    type="number"
                    value={form.mileage}
                    onChange={handleChange}
                    name="mileage"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Тип пального
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Тип пального"
                      value={form.fuel_type}
                      onChange={handleChange}
                      name="fuel_type"
                    >
                      {Object.keys(FUEL_TYPES).map((value) => {
                        return (
                          <MenuItem key={value} value={value}>
                            {FUEL_TYPES[value as keyof typeof FUEL_TYPES].label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Рік"
                    type="number"
                    value={form.year}
                    onChange={handleChange}
                    name="year"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Коробка передач
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Коробка передач"
                      value={form.transmission}
                      onChange={handleChange}
                      name="transmission"
                    >
                      {Object.keys(TRANSMISSION).map((value, index) => {
                        return (
                          <MenuItem key={value} value={value}>
                            {
                              TRANSMISSION[value as keyof typeof TRANSMISSION]
                                .label
                            }
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Привід
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Привід"
                      value={form.drive_type}
                      onChange={handleChange}
                      name="drive_type"
                    >
                      {Object.keys(DRIVE_TYPE).map((value, index) => {
                        return (
                          <MenuItem key={value} value={value}>
                            {DRIVE_TYPE[value as keyof typeof DRIVE_TYPE].label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Стан</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Стан"
                      value={form.condition}
                      onChange={handleChange}
                      name="condition"
                    >
                      {Object.keys(CONDITION).map((value) => {
                        return (
                          <MenuItem key={value} value={value}>
                            {CONDITION[value as keyof typeof CONDITION].label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Об'єм двигуна"
                    type="number"
                    value={form.engine_size}
                    onChange={handleChange}
                    name="engine_size"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={form.door_count}
                    onChange={handleChange}
                    fullWidth
                    label="Кількість дверей"
                    type="number"
                    name="door_count"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={form.cylinder_count}
                    onChange={handleChange}
                    name="cylinder_count"
                    fullWidth
                    label="Кількість циліндрів"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={form.color}
                    onChange={handleChange}
                    name="color"
                    fullWidth
                    label="Колір"
                    type="text"
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* features */}
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Typography variant="h5" component="h2">
                Особливості та оснащення
              </Typography>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Grid container spacing={2} alignItems="flex-start">
                {featuresInteriorList}
                {featuresSafetyList}
                {featuresExteriorList}
                {featuresComfortConvenienceList}
              </Grid>
            </Paper>

            {/* Image upload */}
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Typography variant="h6" component="h3">
                Завантаження фото
              </Typography>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Grid container spacing={2}>
                {images.map((image, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                    <Box
                      sx={{
                        width: "100%",
                        paddingTop: "100%",
                        position: "relative",
                        backgroundColor: "#f0f0f0",
                        borderRadius: 2,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={images[index]}
                        alt={`Фото ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          display: images[index] ? "block" : "none",
                        }}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        sx={{
                          position: "absolute",
                          zIndex: 1,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <input
                          className="fileInput"
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => handleImageChange(e, index)}
                        />
                        <PhotoCamera sx={{ fontSize: 40 }} />
                      </IconButton>
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "34%",
                      paddingBottom: "34%",
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      color="primary"
                      aria-label="add picture"
                      onClick={handleAddImage}
                      sx={{ zIndex: 1 }}
                    >
                      <AddCircleIcon sx={{ fontSize: 60 }} />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
                marginBottom: 2,
              }}
              elevation={24}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: 2,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<HighlightOffIcon />}
                  color="error"
                >
                  Скасувати
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SaveIcon />}
                  color="success"
                  onClick={handleSubmit}
                >
                  Зберегти
                </Button>
              </Stack>
            </Paper>
            {/*  */}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NewCarPage;
