import React, {useContext, useEffect, useState} from 'react'
import { Button, Box, Typography, Paper, Dialog, DialogTitle, DialogContent } from '@mui/material'
import { GlobalContext } from '../context/GlobalState'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import UserInfoDialog from './UserInfoDialog';
import { SEPOLIA_RPC } from '../shared/constant/constant';
import Web3 from "web3"

const Connect = () => {
  const {updateConnect, connect, updateAddress, address, updateWeb3, web3, updateBalance, balance} = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [openUserInfo, setOpenUserInfo] = useState(false)
  

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(SEPOLIA_RPC);
      updateWeb3(web3)
      // Listen update account
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          updateAddress(null);
          updateConnect(false)
        } else {
          updateAddress(accounts[0]);
          // Update ETH Balance
          web3.eth.getBalance(accounts[0])
            .then((_balance) => {
              let newBalance = balance
              newBalance.eth = web3.utils.fromWei(_balance, 'ether')
              updateBalance(newBalance)
            })
        }
      });
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
        // Update ETH Balance
        web3.eth.getBalance(account)
          .then((_balance) => {
            let newBalance = balance
            newBalance.eth = web3.utils.fromWei(_balance, 'ether')
            updateBalance(newBalance)
          })
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
          color: "white",
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
              {address.slice(0, 6) + "..." + address.slice(36, 42)}
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
            </Box>
          </Box> 
        </Box>
      : 
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          borderRadius: "10px",
          textTransform: "none",
          width: "170px",
          height: "35px",
          fontSize: "16px",
          fontWeight: "500",
          "&:hover": {
            cursor: "pointer"
            
          },
          display: "flex",
          alignItems: "center"
        }}
        onClick={handleConnect}
      >
        <AccountBalanceWalletIcon sx={{marginRight: "15px", fontSize: "20px"}}/> 
        <Typography sx={{fontSize: "15px",
              fontWeight: "800",
              display: "flex",
              alignItems: "center"}}>
          Connect Wallet
        </Typography>
      </Button> } 
    </Box>
   
  )
}

export default Connect