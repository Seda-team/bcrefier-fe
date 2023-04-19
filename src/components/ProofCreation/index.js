import React, {useContext, useState} from 'react'
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import CustomedDialog from './CustomedDialog';
import { GlobalContext } from '../../context/GlobalState';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const ProofCreation = () => {
  const { address } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickCreate= async () => {
    setOpen(true)
  }
  return (
    <Box
      sx={{
        paddingTop: "20px",
      }}
    >
      <Container> 
        <Box mt={2}>
        <Paper
          sx={{
            backgroundColor: "#E8E8E8",
            borderRadius: "15px",
            padding: "50px",
            boxShadow: "0 0 10px #265D97",
          }}
          elevation={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "800", fontSize: "20px" }}
              mb={1}
            >
              PROOF CREATION
            </Typography>
          </Box>
          {address ? <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button
              sx={{
                backgroundColor: "black",
                color: "#1E90FF",
                borderTop: "0 px solid #1E90FF",
                borderRadius: "10px",
                textTransform: "none",
                width: "400px",
                height: "60px",
                fontSize: "25px",
                fontWeight: "800",
                "&:hover": {
                  cursor: "pointer"
                }
              }}
              onClick={handleClickCreate}
            >
              Create
            </Button>
            <CustomedDialog open={open} 
            handleClose={handleClose} 
            title={"Create Credit Proof"}/>
          </Box> : 
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"
          // , backgroundColor: "black", height: "70px", width: "600px"
          }}>
            <LockPersonIcon  sx={{fontSize: "50px", fontWeight: "800", marginRight: "30px", color: "#1E90FF"}} />
            <Typography sx={{fontSize: "25px", fontWeight: "800", color: "#1E90FF"}}variant>Please connect to use our application!</Typography>
          </Box>}
        </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default ProofCreation