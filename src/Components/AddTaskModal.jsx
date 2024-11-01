import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const AddTaskModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="add-task-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="add-task-modal" variant="h6" component="h2">
          Crear nueva tarea
        </Typography>
        {/* Aquí podrías agregar campos de formulario para crear la tarea */}
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
