import React, {useContext, useState} from 'react'
import { Container, Box, Typography, Paper, Button, TextField, Grid } from "@mui/material";
import { GlobalContext } from '../../context/GlobalState';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const ProofVerification = () => {
  const { address } = useContext(GlobalContext)
  const [proof, setProof] = useState("")

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
              PROOF VERIFICATION
            </Typography>
          </Box>
          {address ? 
          <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <TextField sx={{margin: "0 auto", marginBottom: "30px", width: "400px"}} id="outlined-basic" label="Proof" helperText="Enter your proof" 
              value={proof}
              onChange={(e) => setProof(e.target.value)} />
            <Box sx={{display: "flex", justifyContent: "center"}}>
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
              >
                Verify
              </Button>
              
            </Box> 
            <Grid container sx={{
              background: "black", 
              height: "50px", 
              color: "#1E90FF", 
              alignItems: "center", 
              borderTopLeftRadius: "15px" ,
              borderTopRightRadius: "15px",
              paddingTop: "5px", 
              borderBottom: "5px solid #1E90FF",}} mt={5}>
              <Grid item xs={2}>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "800", fontSize: "16px" }}
                  mb={1}
                >
                  Balance
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "800", fontSize: "16px" }}
                  mb={1}
                >
                  Transaction Amount
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "800", fontSize: "16px" }}
                    mb={1}
                  >
                  Liquidation Number
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "800", fontSize: "16px" }}
                    mb={1}
                  >
                    Owner
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "800", fontSize: "16px" }}
                    mb={1}
                  >
                    Time
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{
              background: "white", 
              height: "40px", 
              alignItems: "center", 
              paddingTop: "5px",
              borderBottomLeftRadius: "15px" ,
              borderBottomRightRadius: "15px"}}>
              <Grid item xs={2}>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "500", fontSize: "15px" }}
                  mb={1}
                >
                  &gt; 50 ETH
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "500", fontSize: "15px" }}
                  mb={1}
                >
                  &gt; 1000 ETH
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "500", fontSize: "15px" }}
                    mb={1}
                  >
                  x
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "500", fontSize: "15px" }}
                    mb={1}
                  >
                    0xD89BB42daE2e5fFbdE73f11967afBdD59C0a554A
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                    variant="body2"
                    textAlign={"center"}
                    sx={{ fontWeight: "500", fontSize: "15px" }}
                    mb={1}
                  >
                    19/04/2023
                </Typography>
              </Grid>
            </Grid>
          </Box>: 
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

export default ProofVerification