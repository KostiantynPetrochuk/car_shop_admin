"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { AdminHeader } from "@/components/admin";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useFetchWithAuth } from "@/hooks";
import { Message, Loading } from "@/components/admin";
import { useTheme } from "@mui/material/styles";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Car } from "@/types";
import { overviewData } from "./constants";
import { LABELS } from "@/constants";

type ComfortTitlesKeys = "interior" | "exterior" | "safety" | "comfort";

const comfortTitles: Record<ComfortTitlesKeys, string> = {
  interior: "Інтер'єр",
  exterior: "Екстер'єр",
  safety: "Безпека",
  comfort: "Комфорт",
};

const CarPage = ({ params }: { params: { id: string } }) => {
  const theme = useTheme();
  const session = useSession();
  const { fetchWithAuth } = useFetchWithAuth();
  const [car, setCar] = useState<Car>();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

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

  useEffect(() => {
    if (session.status === "loading") return;
    setLoading(true);
    const getData = async () => {
      try {
        const { data, error } = await fetchWithAuth(`/cars/${params.id}`, {
          method: "GET",
        });
        if (error) {
          setMessage((prev) => ({
            ...prev,
            open: true,
            severity: "error",
            text: error,
          }));
          setLoading(false);
          return;
        }
        setCar(data.car);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [session.status]);

  if (!car) {
    return <Loading loading={true} />;
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
                {car.BrandName} {car.ModelName}
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
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                style={{
                  aspectRatio: "16/9",
                  maxWidth: "100%",
                }}
              >
                {car?.ImageNames?.map((image) => (
                  <SwiperSlide key={image}>
                    <Image
                      src={`http://localhost:3001/uploads/cars/${image}`}
                      alt={`${image} logo`}
                      width={300}
                      height={300}
                      priority={true}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      quality={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{
                  marginTop: 10,
                  maxWidth: "100%",
                }}
              >
                {car?.ImageNames?.map((image) => (
                  <SwiperSlide key={image}>
                    <Image
                      src={`http://localhost:3001/uploads/cars/${image}`}
                      alt={`${image} logo`}
                      height={200}
                      width={200}
                      priority={true}
                      quality={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Paper>

            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Typography variant="h6">Основні характеристики</Typography>
            </Paper>

            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Box>
                <Grid container spacing={2}>
                  {overviewData.map((item, index) => {
                    const type = item.value;
                    let currentTitle = car[type as keyof Car] as string;
                    if (item.translate) {
                      currentTitle = LABELS[type][currentTitle].ua;
                    }
                    return (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 2,
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 1,
                            gap: 2,
                          }}
                        >
                          <Image
                            src={item.src}
                            alt={item.label}
                            width={40}
                            height={40}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold" }}
                            >
                              {item.label}&nbsp;
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {currentTitle as string}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Paper>
            {/*  */}
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
              }}
              elevation={24}
            >
              <Typography variant="h6">Особливості</Typography>
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
              <Grid container spacing={2}>
                {Object.keys(comfortTitles).map((title) => (
                  <Grid item xs={12} sm={6} md={3} key={title}>
                    <Typography variant="h6" gutterBottom align="left">
                      {comfortTitles[title as ComfortTitlesKeys]}
                    </Typography>
                    <List>
                      {car?.Features?.filter(
                        (featureItem) => featureItem.Category === title
                      ).map((featureItem) => {
                        return (
                          <ListItem key={featureItem.ID} disableGutters>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={featureItem.FeatureName} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CarPage;
