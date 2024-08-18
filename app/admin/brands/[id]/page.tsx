"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AdminHeader } from "@/components/admin";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { AddModelDialog } from "@/partials/Admin/Brands";
import { useFetchWithAuth } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectBrands,
  setBrands,
  addModelToBrand,
} from "@/store/features/brands/brandsSlice";
import { Message, Loading } from "@/components/admin";

const BrandPage = ({ params }: { params: { id: string } }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { fetchWithAuth } = useFetchWithAuth();
  const [modelName, setModelName] = useState<string>("");
  const brands = useAppSelector(selectBrands);
  const brand = brands.find((brand) => brand.id == params.id);
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
    setModelName("");
    setOpen(false);
  };

  const handleSave = async () => {
    setLoading(true);
    if (!modelName) {
      setMessage((prev) => ({
        ...prev,
        open: true,
        severity: "warning",
        text: "Будь ласка, вкажіть назву моделі.",
      }));
      setLoading(false);
      return;
    }
    try {
      const response = await fetchWithAuth("/model", {
        method: "POST",
        body: JSON.stringify({ brandId: params.id, modelName }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(
        addModelToBrand({
          brandId: params.id,
          model: {
            id: response.id,
            model_name: response.model_name,
          },
        })
      );
      setModelName("");
      setOpen(false);
      setLoading(false);
      setMessage((prev) => ({
        ...prev,
        open: true,
        severity: "success",
        text: "Нову модель успішно додано.",
      }));
    } catch (error) {
      setMessage((prev) => ({
        ...prev,
        open: true,
        severity: "error",
        text: String(error),
      }));
      setModelName("");
      setOpen(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getBrands = async () => {
      setLoading(true);
      const result = await fetchWithAuth("/brand", {
        method: "GET",
      });
      dispatch(setBrands(result));
      setLoading(false);
    };
    if (!brands.length) {
      getBrands();
    }
  }, []);

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
                Audi
              </Typography>
            </Paper>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}
          >
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
                marginTop: 2,
                maxWidth: "300px",
                margin: "0 auto",
              }}
              elevation={24}
            >
              <Image
                src={`http://localhost:3001/uploads/brands/${brand?.file_name}`}
                alt="brand_logo"
                height={50}
                width={50}
              />
            </Paper>
          </Box>
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
                Моделі
              </Typography>

              <List
                sx={{
                  maxWidth: 300,
                  margin: "0 auto",
                }}
              >
                {brand?.models?.map((model) => {
                  return (
                    <ListItem key={model.id} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Typography>{model.id}.</Typography>
                        </ListItemIcon>
                        <ListItemText primary={model.model_name} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
            <Fab
              sx={{
                margin: "20px auto 0 auto",
              }}
              color="primary"
              aria-label="add"
              onClick={handleClickOpen}
            >
              <AddIcon />
            </Fab>
            <AddModelDialog
              open={open}
              handleClose={handleClose}
              modelName={modelName}
              setModelName={setModelName}
              handleSave={handleSave}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BrandPage;
