import React, {useState, useEffect, useContext}from 'react'
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
import NumberInput from '../../shared/NumberInput';
import DoneDialog from '../../shared/DoneDialog';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CreditOracleAbi from "../../../abi/CreditOracleAbi.json"
import Web3 from 'web3';
import { ORACLE_CONTRACT_ADDRESS, SERVER } from '../../shared/constant/constant';
import { deposit, fetchData } from '../../shared/utils/others';
import { createContract } from '../../shared/utils/contract';
import { GlobalContext } from '../../context/GlobalState';

const CustomedDialog = ({open, handleClose, title, des}) => {
  const { address, refresh, updateRefresh } = useContext(GlobalContext)
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

  const getCondition = (proof) => {
    let arr = proof.split("-")
    let res = []
    let amount = ""
    let balance = ""
    let liquidation = ""
    if(arr[5] == "1") {
      amount += "> "
    } else if(arr[5] == "2") {
      amount += "< "
    } else {
      amount += "= "
    }

    if(arr[6] == "1") {
      balance += "> "
    } else if(arr[6] == "2") {
      balance += "< "
    } else {
      balance += "= "
    }

    if(arr[7] == "1") {
      liquidation += "> "
    } else if(arr[7] == "2") {
      liquidation += "< "
    } else {
      liquidation += "= "
    }

    if(arr[2] != 0) {
      amount += arr[2]
    } else {
      amount = "x"
    }

    if(arr[3] != 0) {
      balance += arr[3]
    } else {
      balance = "x"
    }
    if(arr[4] != 0) {
      liquidation += arr[4]
    } else {
      liquidation = "x"
    }

    res.push(amount)
    res.push(balance)
    res.push(liquidation)
    res.push(arr[8])

    return res
  }

  const handleOpenDone = async () => {
    setLoading(true)
    const web3 = new Web3(window.ethereum)
    let CreditOracle_contract = await createContract(web3, CreditOracleAbi, ORACLE_CONTRACT_ADDRESS)
    let res = await deposit(amount, balance, liquidation, amountOp, balanceOp, liquidationOp, CreditOracle_contract, address)
    console.log(res)
    if(res !== null) {
      let condition = getCondition(res.note)
      let data = {
        "public_key": address,
        "proof": res.note,
        "timestamp": Math.floor(new Date().getTime() / 1000).toString(),
        "amount": condition[0],
        "balance": condition[1],
        "liquidation": condition[2],
        "nonce": condition[3],
        "status": 0
      }
      fetchData(data, SERVER + '/userProof/addProof')
        .then(data => console.log(data))
    }
    updateRefresh(!refresh)
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