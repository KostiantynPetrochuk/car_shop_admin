import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Upload } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { useFetchWithAuth } from "@/hooks";

const AddBrand = ({ open, setOpen }: any) => {
  const { fetchWithAuth } = useFetchWithAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("brand_name", "Audi");

    const fileInput = document.querySelector<HTMLInputElement>("#image-upload");
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }

    const result = await fetchWithAuth("/brand", {
      method: "POST",
      body: formData,
    });
  };

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
      <Fab color="primary" aria-label="add" onClick={() => handleClickOpen()}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Новий бренд"}</DialogTitle>
        <DialogContent>
          <TextField
            sx={{
              marginTop: "10px",
            }}
            id="outlined-basic"
            label="Назва"
            variant="outlined"
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <label
              htmlFor="image-upload"
              style={{
                cursor: "pointer",
                border: "2px dashed #ccc",
                borderRadius: 5,
                padding: 20,
                textAlign: "center",
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              ) : (
                <>
                  <Upload style={{ fontSize: 40, color: "#ccc" }} />
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    Click to upload
                  </Typography>
                </>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Скасувати</Button>
          <Button onClick={handleSave} autoFocus>
            Зберегти
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddBrand;
