"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector, useFetchWithAuth } from "@/hooks";

import { AdminHeader, Loading } from "@/components/admin";
import { setFeatures } from "@/store/features/features/featuresSlice";
import { setBrands } from "@/store/features/brands/brandsSlice";
import { selectCars, setCars } from "@/store/features/cars/carsSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import Grid from "@mui/material/Grid";

const CarPage = () => {
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [loading, setLoading] = useState(false);
  const cars = useAppSelector(selectCars);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const featuresResult = await fetchWithAuth("/features", {
          method: "GET",
        });
        dispatch(setFeatures(featuresResult));
        const brandsResult = await fetchWithAuth("/brand", {
          method: "GET",
        });
        dispatch(setBrands(brandsResult));
        const carsResult = await fetchWithAuth("/cars", {
          method: "GET",
        });
        dispatch(setCars(carsResult));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  let listContent = (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <SentimentDissatisfiedIcon sx={{ fontSize: 60, color: "grey.500" }} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Поки нема доступних автомобілів.
      </Typography>
    </Box>
  );

  if (cars.length) {
    listContent = cars.map((car: any) => (
      <Link key={car.id} href={`/admin/cars/${car.id}`}>
        <ListItem disablePadding>
          <ListItemButton>
            <Grid container spacing={2} alignItems="center">
              {/* Зображення */}
              <Grid item xs={12} sm={4} md={3}>
                <Image
                  src={`http://localhost:3001/uploads/cars/${car.imageNames[0]}`}
                  alt={`${car.brand_name} logo`}
                  height={200}
                  width={200}
                  objectFit="contain"
                  layout="responsive"
                />
              </Grid>

              <Grid item xs={12} sm={8} md={9}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                  }}
                >
                  <Typography variant="body1">
                    <strong>Бренд:</strong> {car.brand.brand_name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Модель:</strong> {car.model.model_name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Стан:</strong> {car.condition}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Пробіг:</strong> {car.mileage} км
                  </Typography>
                  <Typography variant="body1">
                    <strong>Паливо:</strong> {car.fuel_type}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Дата створення:</strong>
                    {format(new Date(car.createdDate), "dd MMM yyyy")}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </ListItemButton>
        </ListItem>
      </Link>
    ));
  }

  return (
    <>
      <AdminHeader />
      <Loading loading={loading} />
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
                Автомобілі
              </Typography>
            </Paper>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  padding: 2,
                  textAlign: "center",
                  marginTop: 2,
                  marginBottom: 2,
                }}
                elevation={24}
              >
                <List>{listContent}</List>
              </Paper>

              <Link href={"/admin/car/new"}>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CarPage;
