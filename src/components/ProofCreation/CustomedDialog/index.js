import React, {useState, useEffect}from 'react'
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
  TextField,
  MenuItem
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NumberInput from '../../../shared/NumberInput';
import DoneDialog from '../../../shared/DoneDialog';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { deposit } from '../../../shared/utils/others';

const CustomedDialog = ({open, handleClose, title, des}) => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState("0");
  const [amount, setAmount] = useState("0");
  const [liquidation, setLiquidation] = useState("0");
  const [balanceOp, setBalanceOp] = useState("1");
  const [amountOp, setAmountOp] = useState("1");
  const [liquidationOp, setLiquidationOp] = useState("1");
  const [checkBalance, setCheckBalance] = useState(false)
  const [checkAmount, setCheckAmount] = useState(false)
  const [checkLiquidation, setCheckLiquidation] = useState(false)
  const [openDone, setOpenDone] = useState(false);
  const [proof, setProof] = useState(null)

  const handleClickCheck = (check, setCheck, setValue, setOp) => {
    setCheck(!check)
    setValue("0")
    setOp("1")
  }

  const handleOpenDone = async () => {
    setLoading(true)
    let res = await deposit(amount, balance, liquidation, amountOp, balanceOp, liquidationOp)
    setProof(res.note)
    setLoading(false)
    setOpenDone(true)
  }

  const handleCloseDone = () => {
    setOpenDone(false)
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    handleClose();
    setCheckBalance(false)
    setBalance("0")
    setBalanceOp("1")
    setCheckAmount(false)
    setAmount("0")
    setAmountOp("1")
    setCheckLiquidation(false)
    setLiquidation("0")
    setLiquidationOp("1")
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
        <Typography variant="h4" sx={{fontSize: "25px", fontWeight: 800}}>{title}</Typography>
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
          <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 800}}>
            Click to choose what you want to include in the proof
          </Typography>
        </Box>
        <Box sx={{display: "flex", marginLeft: "40px", alignItems: "center"}}>
          <Checkbox checked={checkBalance} onClick={() => handleClickCheck(checkBalance, setCheckBalance, setBalance, setBalanceOp)}/>
          <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}}>
            ETH Balance
          </Typography>
        </Box>
        {checkBalance ? <Box sx={{display: "flex"}}>
            <TextField  
              select
              defaultValue={"1"}
              value={balanceOp}
              onChange={(e) => setBalanceOp(e.target.value)}
              sx={{marginLeft: "30px"}}
            >
              <MenuItem value={"1"} sx={{display: "flex"}}>
                <ArrowForwardIosIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"2"}>
                <ArrowBackIosIcon textAlign={"center"} sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"3"}>
                <DragHandleIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
            </TextField>
            <NumberInput value={balance}
              setValue={loading ? "" : setBalance}
              unitText={"ETH"}
              disabled={false}/>
            </Box> : ""}
        <Box sx={{display: "flex", marginLeft: "40px", alignItems: "center"}}>
          <Checkbox checked={checkAmount} onClick={() => handleClickCheck(checkAmount, setCheckAmount, setAmount, setAmountOp)}/>
          <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}}>
            Transaction Amount
          </Typography>
        </Box>
        {checkAmount ? 
          <Box sx={{display: "flex"}}>
            <TextField  
              select
              defaultValue={"1"}
              value={amountOp}
              onChange={(e) => setAmountOp(e.target.value)}
              sx={{marginLeft: "30px"}}
            >
              <MenuItem value={"1"}>
                <ArrowForwardIosIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"2"}>
                <ArrowBackIosIcon textAlign={"center"} sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"3"}>
                <DragHandleIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
            </TextField>
            <NumberInput value={amount}
              setValue={loading ? "" : setAmount}
              unitText={"ETH"}
              disabled={false}/>
            </Box> : ""}
        <Box sx={{display: "flex", marginLeft: "40px", alignItems: "center"}}>
          <Checkbox checked={checkLiquidation} onClick={() => handleClickCheck(checkLiquidation, setCheckLiquidation, setLiquidation, setLiquidationOp)}/>
          <Typography variant="h4" sx={{fontSize: "15px", fontWeight: 500}}>
            Liquidation Number
          </Typography>
        </Box>
        {checkLiquidation ? <Box sx={{display: "flex"}}>
            <TextField  
              select
              defaultValue={"1"}
              value={liquidationOp}
              onChange={(e) => setLiquidationOp(e.target.value)}
              sx={{marginLeft: "30px"}}
            >
              <MenuItem value={"1"}>
                <ArrowForwardIosIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"2"}>
                <ArrowBackIosIcon textAlign={"center"} sx={{fontSize: "15px"}}/>
              </MenuItem>
              <MenuItem value={"3"}>
                <DragHandleIcon textAlign={"center"}  sx={{fontSize: "15px"}}/>
              </MenuItem>
            </TextField>
            <NumberInput value={liquidation}
              setValue={loading ? "" : setLiquidation}
              unitText={"Times"}
              disabled={false}/>
            </Box>  : ""}  
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
      {proof !== null ? <DoneDialog open={openDone} handleClose={handleCloseDone} proof={proof ? proof : ""}/> : ""}
  </Dialog>  
  )
}

export default CustomedDialog