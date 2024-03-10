import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = generateUserId();
    saveToLocalStorage(formData);
    setFormData({
      userId: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setUnsavedChanges(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmClose = () => {
    window.location.href = "about:blank";
  };

  const generateUserId = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            size="small"
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          You have unsaved changes. Are you sure you want to leave this page?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmClose} color="primary" autoFocus>
            Leave Page
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserDataForm;
