import React from 'react'
import { Container, Box, Typography, Paper, Grid } from "@mui/material";
import ProofComponent from './ProofComponent';

const ProofCreation = () => {
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
            mb={5}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "800", fontSize: "20px" }}
              mb={1}
            >
              PROOF CREATION
            </Typography>
          </Box>
          <Grid container sx={{display: "flex", justifyContent: "space-around"}}>
            <Grid item xs={3}>
              <ProofComponent name={"Proof Type 1"} des={"ETH balance"}/>
            </Grid>
            <Grid item xs={3}>
              <ProofComponent name={"Proof Type 2"} des={"Transaction amount"}/>
            </Grid>
            <Grid item xs={3}>
              <ProofComponent name={"Proof Type 3"} des={"Liquidation number"}/>
            </Grid>
          </Grid>
         
        </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default ProofCreation