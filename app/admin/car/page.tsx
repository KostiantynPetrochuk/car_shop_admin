"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector, useFetchWithAuth } from "@/hooks";

import { AdminHeader } from "@/components/admin";
import {
  selectFeatures,
  setFeatures,
} from "@/store/features/features/featuresSlice";

const CarPage = () => {
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [loading, setLoading] = useState(false);
  const features = useAppSelector(selectFeatures);
  console.log({ features });

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

  return (
    <>
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
                Автомобілі
              </Typography>
            </Paper>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={"/admin/car/new"}>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Link>
            </Box>
            {/*  */}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CarPage;
