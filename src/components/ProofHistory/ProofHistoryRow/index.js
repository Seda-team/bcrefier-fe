import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ProofHistoryRow = ({number, balance, amount, liquidation, status, time, proof}) => {
  const [hideProof, setHideProof] = useState(true)

  return (
    <Box>
      <Grid container sx={{background: "white", 
        height: "45px", 
        alignItems: "center", 
        borderBottom: "3px solid #1E90FF"}}>
        <Grid item xs={2} pt={1} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {number}
          </Typography>
          <RemoveRedEyeIcon sx={{color: "grey", marginBottom: "10px", marginLeft: "20px"}} onClick={() => setHideProof(!hideProof)}/>
        </Grid>
        {hideProof ? "" : <Grid item xs={2} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {balance}
          </Typography>
        </Grid>}
        {hideProof ? "" : <Grid item xs={2} pt={1}> 
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px"}} mb={1}>
            <Typography
              variant="body2"
              textAlign={"center"}
              sx={{ fontWeight: "800", fontSize: "15px" }}
              mb={1}
            >
              {amount}
            </Typography>
          </Box>
        </Grid>}
        {hideProof ? "" : <Grid item xs={2} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {liquidation}
          </Typography>
        </Grid>}
        {hideProof ? "" : <Grid item xs={2} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {time}
          </Typography>
        </Grid>}
        {hideProof ? "" : <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          {status === 0 ?
            <Box sx={{backgroundColor: "green", width: "90px", color: "white", borderRadius: "10px", height: "22px"}}>
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "15px" }}
                mb={1}
              >
                Available
              </Typography>
            </Box> :
            <Box sx={{backgroundColor: "red", width: "90px", color: "white", borderRadius: "10px", height: "22px"}}>
            <Typography
              variant="body2"
              textAlign={"center"}
              sx={{ fontWeight: "800", fontSize: "15px" }}
              mb={1}
            >
              Used
            </Typography>
          </Box>}
        </Grid>}
        {hideProof ? <Grid item xs={10}sx={{display: "flex", justifyContent: "center", width: "500px", height: "40px" }}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "18px", backgroundColor: "grey", height: "35px", width: "400px", paddingTop: "5px", color: "white", borderRadius: "10px" }}
            mb={1}
          >
            {proof}
          </Typography>
        </Grid> : ''}
      </Grid>
    </Box>
  )
}

export default ProofHistoryRow