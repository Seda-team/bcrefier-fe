import React, { useContext, useState, useEffect } from 'react'
import { Box, Paper, Typography, Container, Grid } from '@mui/material'
import ProofHistoryRow from './ProofHistoryRow'
import { GlobalContext } from '../../context/GlobalState'
import { fetchData } from '../../shared/utils/others'
import { SERVER } from '../../shared/constant/constant'

const ProofHistory = () => {
  const { address } = useContext(GlobalContext)
  const [proofData, setProofData] = useState([])

  useEffect(() => {
    if(address != null) {
      let data = {"public_key": address}
      fetchData(data, SERVER + '/userProof/getAllProof')
        .then(data => {
          setProofData(data)
          console.log(data)
        })
    }
  }, [address])

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
          {proofData.length > 0 ?<Box> <Grid container sx={{background: "black", 
            height: "50px", 
            color: "#1E90FF", 
            alignItems: "center", 
            borderTopLeftRadius: "15px" ,
            borderTopRightRadius: "15px", 
            borderBottom: "5px solid #1E90FF",}}>
            <Grid item xs={2}>
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
                Liquidatation Number
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
            <Grid item xs={2}>
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
          {proofData.map((value, key) => (
            <ProofHistoryRow key={key} number={key + 1} balance={value.balance} amount={value.amount} liquidation={value.liquidation} time={value.timestamp} status={value.status} proof={value.proof}/>
          ))} </Box> : <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"
          // , backgroundColor: "black", height: "70px", width: "600px"
          }}>
            <Typography sx={{fontSize: "25px", fontWeight: "800", color: "#1E90FF"}}variant>No proof to show!</Typography>
          </Box>}
        </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default ProofHistory