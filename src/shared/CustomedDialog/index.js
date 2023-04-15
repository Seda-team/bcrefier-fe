import React, {useState, useEffect}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NumberInput from '../NumberInput';
import InformationRow from '../InformationRow';
import DoneDialog from '../DoneDialog';

const CustomedDialog = ({open, handleClose, title, des, requirement}) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("0");
  const [openDone, setOpenDone] = useState(false);
  const [isProved, setIsProved] = useState(false)

  useEffect(() => {
    if(requirement === "") {
      setIsProved(true)
    }
  }, [])

  const handleOpenDone = () => {
    setOpenDone(true)
  }

  const handleCloseDone = () => {
    setOpenDone(false)
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    setValue("0");
    setIsProved(false)
    handleClose();
  }

  const handleProvide = () => {
    setIsProved(true)
  }

  return (
    <Dialog
    open={open}
    onClose={loading ? "" : handleCloseDialog}
    fullWidth
    PaperProps={{
      padding: "100px",
      backgroundColor: "#DCDCDC",
      position: "relative",
    }}
  >
    <DialogTitle sx={{ textAlign: "center" }} mt={3}>
        <Typography variant="h4" sx={{fontSize: "25px", fontWeight: 1000}}>{title}</Typography>
        <Typography
            variant="body2"
            sx={{ fontSize: "13px", fontWeight: 500, marginTop: "10px" }}
            mr={1}>
            {des}
        </Typography>
      </DialogTitle>
      <CloseIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={loading ? "" : handleCloseDialog}
      />
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "0 5%",
            marginTop: "20px",
          }}
        >
          <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}} mb={2}>
            Please enter the condition of the Proof
          </Typography>
        </Box>
        <NumberInput
            value={value}
            setValue={loading ? "" : setValue}
            unitText={"USDT"}
            disabled={false}
        />
      </DialogContent>
      <Button
          sx={{
            color: "white",
            backgroundColor: loading ? "#E8E8E8" : "black",
            border: loading ? "1px solid #E8E8E8" : "1px solid #909090",
            borderRadius: "20px",
            textTransform: "none",
            width: "90%",
            fontSize: "20px",
            fontWeight: "800",
            margin: "0 5%",
            padding: "12px 0",
            marginBottom: "20px",
          }}
          onClick={handleOpenDone}
        >
          {loading ? <RestartAltIcon /> : "Proceed"}
        </Button>
      <DoneDialog open={openDone} handleClose={handleCloseDone} info={[]}/>
  </Dialog>  
  )
}

export default CustomedDialog