import React, {useState, useContext}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InformationRow from '../../../shared/InformationRow';
import { GlobalContext } from '../../../context/GlobalState';

const UserInfoDialog = ({open, handleClose}) => {
  const [loading, setLoading] = useState(false);
  const { balance, address } = useContext(GlobalContext)

  const handleCloseDialog = () => {
    handleClose()
  }

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    fullWidth
    PaperProps={{
      padding: "100px",
      backgroundColor: "#DCDCDC",
      position: "relative",
    }}
  >
    <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography sx={{fontSize: "25px", fontWeight: 800}}>User Credit Information</Typography>
      </DialogTitle>
      <CloseIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={handleClose}
      />
    <DialogContent>
    <InformationRow title="Address" value={address} bold={true}/>
    <InformationRow title="Balance ETH" value={balance.eth + " ETH"} bold={true}/>
    <InformationRow title="Transaction Amount" value="1000 ETH" bold={true}/>
    <InformationRow title="Liquidatation number" value="0" bold={true}/>
    <Typography textAlign={"right"} sx={{fontSize: "10px", fontWeight: 600, marginTop: "20px", marginRight: "10px"}}>*These informations are collected by Seda Team</Typography>
    </DialogContent>
  </Dialog>  
  )
}

export default UserInfoDialog