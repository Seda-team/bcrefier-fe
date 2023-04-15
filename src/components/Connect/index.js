import React, {useContext, useEffect, useState} from 'react'
import { Button, Box, Typography, Paper, Dialog, DialogTitle, DialogContent } from '@mui/material'
import { GlobalContext } from '../../context/GlobalState'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import UserInfoDialog from './UserInfoDialog';
import Web3 from "web3"

const Connect = () => {
  const {updateConnect, connect, updateAddress, address, updateWeb3, web3} = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [openUserInfo, setOpenUserInfo] = useState(false)
  

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      updateWeb3(web3)
    } else {
      console.log('MetaMask is not installed');
    }
  }, [])

  const handleOpenUserInfo = () => {
    setOpen(false)
    setOpenUserInfo(true)
  }

  const handleCloseUserInfo = (e) => {
    e.stopPropagation()
    setOpenUserInfo(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleConnect = async () => {
    if(web3) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const account = accounts[0];
        updateAddress(account)
      }).catch((error) => {
        console.log(error);
      });
      updateConnect(true)
    }
    else {
      console.log('MetaMask is not installed');
    }
  }
  return (
    <Box>
      {connect ? <Box sx={{
          backgroundColor: "black",
          color: "#1E90FF",
          borderTop: "0 px solid #1E90FF",
          borderRadius: "10px",
          textTransform: "none",
          width: "200px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "100px",
        }}> 
          <Typography sx={{
            fontSize: "16px",
            fontWeight: "500", 
            marginRight: "15px"}}
          >
              {address.slice(0, 15)} ...
          </Typography>
          <Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
              {open ? <CloseIcon sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}onClick={handleClose}/> : <MenuIcon  sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }} onClick={handleOpen}/> }
            </Box>
            <Box sx={open? {position: "absolute"} : {display: "none"}}>            
              <Paper elevation={1} sx={{
                width: "100px",
                backgroundColor: "#1E90FF", 
                padding: "5px",
                "&:hover": {
                  cursor: "pointer"
                }}}
                onClick={() => handleOpenUserInfo()}
                >
                <Typography textAlign={"center"} variant="body2" sx={{color: "white", height: "20px", fontSize: "14px"}}>
                  My Credit Info
                </Typography>
                <UserInfoDialog open={openUserInfo} handleClose={handleCloseUserInfo}/>
              </Paper>  
              <Paper elevation={1} sx={{
                marginTop: "5px",
                width: "100px",
                backgroundColor: "#1E90FF", 
                padding: "5px",
                "&:hover": {
                  cursor: "pointer"
                }}}>
                <Typography textAlign={"center"} variant="body2" sx={{color: "white", height: "20px", fontSize: "14px"}}>
                  Log Out
                </Typography>
              </Paper>  
            </Box>
          </Box> 
        </Box>
      : 
      <Button
        sx={{
          backgroundColor: "black",
          color: "#1E90FF",
          borderTop: "0 px solid #1E90FF",
          borderRadius: "10px",
          textTransform: "none",
          width: "200px",
          height: "40px",
          fontSize: "16px",
          fontWeight: "500",
          "&:hover": {
            cursor: "pointer"
          }
        }}
        onClick={handleConnect}
      >
        <AccountBalanceWalletIcon sx={{marginRight: "15px"}}/> Connect Wallet
      </Button> } 
    </Box>
   
  )
}

export default Connect