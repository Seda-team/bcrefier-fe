import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box
} from "@mui/material";
import InformationRow from "../InformationRow";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function DoneDialog({ open, handleClose, proof }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        padding: "100px",
        backgroundColor: "#DCDCDC",
        position: "relative",
        height: "500px"
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <CheckCircleOutlineIcon sx={{fontSize: "150px", fontWeight: 200, color: "green"}} />
        <Typography variant="h5" sx={{fontWeight: 800}} >Complete!</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography textAlign="center" variant="body2" sx={{fontSize: "15px"}}>
          Here is your proof, please keep it private:
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography textAlign="center" variant="body2" sx={{fontSize: "20px", fontWeight: 800, paddingTop: "20px", height: "50px", borderRadius: "15px", border: "3px solid #1E90FF", width: "400px"}} mt={2}>
            {proof} <ContentCopyIcon sx={{fontSize: "20px", marginLeft: "20px"}}/>
          </Typography>
        </Box>
      </DialogContent>
      <DialogContent>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 5%",
          }}
        >
        </Box>
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            border: "1px solid #909090",
            borderRadius: "20px",
            textTransform: "none",
            width: "90%",
            fontSize: "12px",
            fontWeight: "800",
            margin: "0 5%",
            padding: "12px 0",
            marginBottom: "20px",
          }}
          onClick={handleClose}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
}