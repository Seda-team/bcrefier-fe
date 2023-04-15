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

export default function DoneDialog({ open, handleClose, info }) {
  console.log(Object.keys(info))
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
        {info.map((data) => (
          <InformationRow title={data[0]} value={data[1]} bold={true}/>
        ))}
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
          <Typography variant="h4" textAlign={"center"} sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
             Your proof will be downloaded automatically!
          </Typography>
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