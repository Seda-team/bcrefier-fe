import React, { useContext, useState, useEffect } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { GlobalContext } from "../../context/GlobalState";
import BigNumber from "bignumber.js"
import DepositDialog from "./DepositDialog";
import Web3 from "web3";
import LendingPoolV2 from "../../../abi/LendingPoolV2.json"
import StableToken from "../../../abi/StableToken.json"
import { LENDING_CONTRACT_ADDRESS, SEPOLIA_RPC, BASE_18, USDT_CONTRACT_ADDRESS } from "../../shared/constant/constant";
import { createContract } from "../../shared/utils/contract";

const LeftContainer = () => {
  const {balance, web3, address, refresh} = useContext(GlobalContext)
  const [curBalance, setCurBalance] = useState({
    "ether": 0,
    "usdt": 0
  })
  const [open, setOpen] = useState(false)
  const [curDeposit, setCurDeposit] = useState(0)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if(address) {
      const web3 = new Web3(SEPOLIA_RPC)
      createContract(web3, LendingPoolV2.abi, LENDING_CONTRACT_ADDRESS)
        .then(contract => {
          contract.methods.supply(address).call()
            .then(res => {
              setCurDeposit(BigNumber(res).dividedBy(1000000000000000000).toFixed(2))
            })
            .catch(err => {
              console.log(err)
            })
          let newBalance = {
            ether: 0,
            usdt: 0
          }
          web3.eth.getBalance(address)
            .then((_balance) => {
              newBalance.ether = web3.utils.fromWei(_balance, 'ether')
              setCurBalance(newBalance)
            })
            .catch(err => {
              console.log(err)
            })

          createContract(web3, StableToken.abi, USDT_CONTRACT_ADDRESS)
            .then((contract) => {
              contract.methods.balanceOf(address).call()
                .then((receipt) => {
                  newBalance.usdt = BigNumber(receipt).dividedBy(BASE_18).toFixed()
                  setCurBalance(newBalance)
                })
                .catch(err => {
                  console.log(err)
                })
            })
        }) 
        .catch(err => {
          console.log(err)
        }) 
      }
    
  }, [balance, refresh])

  return (
    <Box mb={5}>
      <Paper
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "15px",
          height: "310px",
          padding: "50px",
          paddingTop: "40px",
          boxShadow: "0 0 10px #ff7700",
        }}
        elevation={1}
      >
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "800", fontSize: "20px", float: "left", color: "#ff7700" }}
            mb={1}
          >
            TOTAL BALANCE
          </Typography>
          <Paper
            sx={{
              backgroundColor: "#F8F8F8",
              borderRadius: "15px",
              padding: "30px",
              width: "50%",
              height: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            elevation={1}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "15px", fontWeight: 800 }}
              mr={1}
            >
              Deposit
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "800", fontSize: "40px" }} mr={1}>
            {BigNumber(curDeposit).toFixed(2)}
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{display: "flex", justifyContent: "space-around"}} mb={4} mt={3}>
          <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
            padding: "30px",
            width: "30%",
            height: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          elevation={1}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800 }}
            mr={1}
          >
            ETH
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "800", fontSize: "40px", color: "#ff7700" }} mr={1}>
            {BigNumber(curBalance.ether).toFixed(2)}
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
            padding: "30px",
            width: "30%",
            height: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          elevation={1}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800 }}
            mr={1}
          >
            USDT
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "800", fontSize: "40px" }} mr={1}>
          {BigNumber(curBalance.usdt).toFixed(2)}
          </Typography>
        </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            sx={{
              color: "#ff7700",
              backgroundColor: "white",
              border: "3px solid #ff7700",
              borderRadius: "8px",
              textTransform: "none",
              width: "200px",
              fontSize: "20px",
              fontWeight: "800",
              marginRight: "20px",
            }}
            onClick = {() => handleOpen()}
          >
            Deposit
          </Button>
          <Button
            sx={{
              color: "#ff7700",
              backgroundColor: "white",
              border: "3px solid #ff7700",
              borderRadius: "8px",
              textTransform: "none",
              width: "200px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            Withdraw
          </Button>
          <DepositDialog open={open} handleClose={handleClose} title={"Deposit"} requirement={""}/>
        </Box>
      </Paper>
    </Box>
  )
}

export default LeftContainer