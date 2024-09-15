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

import { AdminHeader, Loading, Message } from "@/components/admin";
import { setFeatures } from "@/store/features/features/featuresSlice";
import { setBrands } from "@/store/features/brands/brandsSlice";
import { selectCars, setCars } from "@/store/features/cars/carsSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import Grid from "@mui/material/Grid";
import { useSession } from "next-auth/react";
import { CONDITION, FUEL_TYPES } from "@/constants";
import { Car } from "@/types";

const CarPage = () => {
  const session = useSession();
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [loading, setLoading] = useState(false);
  const cars = useAppSelector(selectCars);
  const [message, setMessage] = useState({
    open: false,
    severity: "error",
    text: "",
    variant: "filled",
    autoHideDuration: 6000,
    vertical: "top",
    horizontal: "center",
  });

  useEffect(() => {
    if (session.status === "loading") return;
    setLoading(true);
    const getData = async () => {
      try {
        const { data: featuresResult, error: featuresError } =
          await fetchWithAuth("/features", {
            method: "GET",
          });
        if (featuresError) {
          setMessage((prev) => ({
            ...prev,
            open: true,
            severity: "error",
            text: "Помилка завантаження функцій автомобілів.",
          }));
        }
        dispatch(setFeatures(featuresResult.features));
        //
        const { data: brandsResult, error: brandsError } = await fetchWithAuth(
          "/brands",
          {
            method: "GET",
          }
        );
        if (brandsError) {
          setMessage((prev) => ({
            ...prev,
            open: true,
            severity: "error",
            text: "Помилка завантаження брендів автомобілів.",
          }));
        }
        dispatch(setBrands(brandsResult.brands));
        //
        const { data: carsResult, error: carsError } = await fetchWithAuth(
          "/cars",
          {
            method: "GET",
          }
        );
        if (carsError) {
          setMessage((prev) => ({
            ...prev,
            open: true,
            severity: "error",
            text: "Помилка завантаження автомобілів.",
          }));
        }
        dispatch(setCars(carsResult.cars));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [session.status]);

  let listContent = (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <SentimentDissatisfiedIcon sx={{ fontSize: 60, color: "grey.500" }} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Поки нема доступних автомобілів.
      </Typography>
    </Box>
  );

  if (cars?.length) {
    listContent = (
      <List>
        {cars.map((car: Car) => {
          return (
            <Link key={car.ID} href={`/admin/car/${car.ID}`}>
              <ListItem disablePadding>
                <ListItemButton>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={4} md={3}>
                      <Image
                        src={`http://localhost:3001/uploads/cars/${car.ImageNames[0]}`}
                        alt={`${car.BrandName} logo`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority={true}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
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
                          <strong>Бренд:</strong> {car.BrandName}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Модель:</strong> {car.ModelName}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Стан:</strong>
                          {CONDITION[car.Condition].label}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Пробіг:</strong> {car.Mileage} км
                        </Typography>
                        <Typography variant="body1">
                          <strong>Паливо:</strong>
                          {FUEL_TYPES[car.FuelType].label}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Дата створення:</strong>
                          {new Intl.DateTimeFormat("uk-UA", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }).format(new Date(car.CreatedAt))}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    );
  }

  return (
    <>
      <AdminHeader />
      <Loading loading={loading} />
      <Message message={message} setMessage={setMessage} />
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
                {listContent}
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
