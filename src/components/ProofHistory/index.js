import React from 'react'
import { Box, Paper, Typography, Container, Grid } from '@mui/material'
import ProofHistoryRow from './ProofHistoryRow'

const ProofHistory = () => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
      }}
      mb={5}
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
            mb={2}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "800", fontSize: "20px" }}
              mb={1}
            >
              PROOF HISTORY
            </Typography>
          </Box> 
          <Grid container sx={{background: "black", 
            height: "50px", 
            color: "#1E90FF", 
            alignItems: "center", 
            borderTopLeftRadius: "15px" ,
            borderTopRightRadius: "15px", 
            borderBottom: "5px solid #1E90FF",}}>
            <Grid item xs={1}>
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "16px" }}
                mb={1}
              >
                Number
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "16px" }}
                mb={1}
              >
                Proof Type
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "800", fontSize: "16px" }}
                  mb={1}
                >
                  Condition / Proof
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
            <Grid item xs={3}>
              <Typography
                  variant="body2"
                  textAlign={"center"}
                  sx={{ fontWeight: "800", fontSize: "16px" }}
                  mb={1}
                >
                  Status
              </Typography>
            </Grid>
          </Grid>
          <ProofHistoryRow number={1} type={1} condition={"Balance > 50"} time={"19/04/2023"} proof={"12312423523153125345324"} status={"Available"}/>
          <ProofHistoryRow number={2} type={3} condition={"Liquidation number < 3"} time={"19/04/2023"} proof={"12312423523153125345324"} status={"Used"}/>
          <ProofHistoryRow number={3} type={1} condition={"Balance > 100"} time={"19/04/2023"} proof={"12312423523153125345324"} status={"Used"}/>
          <ProofHistoryRow number={4} type={2} condition={"Transaction Amount > 1000"} proof={"12312423523153125345324"} time={"19/04/2023"} status={"Available"}/>
        </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default ProofHistory