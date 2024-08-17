import React, { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectBrands, setBrands } from "@/store/features/brands/brandsSlice";
import { Loading, Message } from "@/components/admin";
import { useFetchWithAuth } from "@/hooks";
import { AddBrandDialog } from "@/partials/Admin/Brands";

type Brand = {
  id: string;
  brand_name: string;
  file_name: string;
};

const AddBrand = ({ open, setOpen }: any) => {
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [brandName, setBrandName] = useState<string>("");
  const brands = useAppSelector(selectBrands);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    open: false,
    severity: "error",
    text: "",
    variant: "filled",
    autoHideDuration: 6000,
    vertical: "top",
    horizontal: "center",
  });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    const fileInput = document.querySelector<HTMLInputElement>("#image-upload");
    setBrandName("");
    setSelectedImage(null);
    if (fileInput) {
      fileInput.value = "";
    }
    setOpen(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    if (!selectedImage || !brandName) {
      setMessage((prev) => ({
        ...prev,
        open: true,
        severity: "warning",
        text: "Будь ласка, заповніть всі поля.",
      }));
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("brand_name", brandName);
    const fileInput = document.querySelector<HTMLInputElement>("#image-upload");
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append("file", fileInput.files[0]);
    }
    try {
      const response = await fetchWithAuth("/brand", {
        method: "POST",
        body: formData,
      });
      dispatch(setBrands([...brands, response]));
      setBrandName("");
      setSelectedImage(null);
      if (fileInput) {
        fileInput.value = "";
      }
      setOpen(false);
      setLoading(false);
    } catch (error) {
      setMessage((prev) => ({
        ...prev,
        open: true,
        severity: "error",
        text: String(error),
      }));
      setBrandName("");
      setSelectedImage(null);
      if (fileInput) {
        fileInput.value = "";
      }
      setOpen(false);
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

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Loading loading={loading} />
      <Message message={message} setMessage={setMessage} />
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Paper
          sx={{
            padding: 2,
            textAlign: "center",
            marginTop: 2,
          }}
          elevation={24}
        >
          <List>
            {brands.map((brand: Brand) => {
              return (
                <ListItem key={brand.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Image
                        src={`http://localhost:3001/uploads/brands/${brand.file_name}`}
                        alt="brand_logo"
                        height={50}
                        width={50}
                      />
                    </ListItemIcon>
                    <ListItemText primary={brand.brand_name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <AddBrandDialog
        open={open}
        handleClose={handleClose}
        brandName={brandName}
        setBrandName={setBrandName}
        selectedImage={selectedImage}
        handleImageChange={handleImageChange}
        handleSave={handleSave}
      />
    </Box>
  );
};

export default AddBrand;
