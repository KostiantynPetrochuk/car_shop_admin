import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { Brand } from "@/types";
import { useSession } from "next-auth/react";

const AddBrand = ({ open, setOpen }: any) => {
  const session = useSession();
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
      const { data, error } = await fetchWithAuth("/brands", {
        method: "POST",
        body: formData,
      });
      if (error) {
        setMessage((prev) => ({
          ...prev,
          open: true,
          severity: "error",
          text: String(error),
        }));
        setLoading(false);
        return;
      }

      dispatch(setBrands([...brands, data.brand]));
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
    if (session.status === "loading") return;
    setLoading(true);
    const getBrands = async () => {
      const { data, error } = await fetchWithAuth("/brands", {
        method: "GET",
      });
      if (error) {
        setMessage((prev) => ({
          ...prev,
          open: true,
          severity: "error",
          text: String(error),
        }));
        setLoading(false);
        return;
      }
      dispatch(setBrands(data.brands));
      setLoading(false);
    };
    getBrands();
  }, [session.status]);

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
            {brands?.map((brand: Brand) => {
              return (
                <Link key={brand.ID} href={`/admin/brands/${brand.ID}`}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Image
                          src={`http://localhost:3001/uploads/brands/${brand.FileName}`}
                          alt="brand_logo"
                          height={50}
                          width={50}
                        />
                      </ListItemIcon>
                      <ListItemText primary={brand.BrandName} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Paper>
      </Box>
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
