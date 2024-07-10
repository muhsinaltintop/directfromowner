import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareComponent from "./ShareComponent";

const ModalComponent = ({ open, handleClose, shareButtonRef, link }) => {
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    if (shareButtonRef.current && open) {
      const rect = shareButtonRef.current.getBoundingClientRect();
      setModalStyle({
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        position: "absolute",
        transform: "none",
      });
    }
  }, [shareButtonRef, open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ zIndex: 1300 }} // Modal'ın z-index'ini yüksekte tutun
    >
      <Box className="w-fit p-2 bg-white border rounded-lg" style={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Share Property
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ShareComponent link={link} />
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
