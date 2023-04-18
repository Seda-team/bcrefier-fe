import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ProofHistoryRow = ({number, type, condition, time, proof, status}) => {
  const [hideProof, setHideProof] = useState(true)
  return (
    <Box>
      <Grid container sx={{background: "white", 
        height: "45px", 
        alignItems: "center", 
        borderBottom: "3px solid #1E90FF"}}>
        <Grid item xs={1} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {number}
          </Typography>
        </Grid>
        <Grid item xs={2} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {type}
          </Typography>
        </Grid>
        <Grid item xs={4} pt={1}> 
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px"}} mb={1}>
            {hideProof ? 
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "15px" }}
              >
                {condition}
              </Typography>
            : 
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}} >
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "15px", backgroundColor: "grey", color: "white" }}
                mr={4}
              >
                {proof}
              </Typography>
              <ContentCopyIcon sx={{color: "grey"}} />
            </Box>} 
            <RemoveRedEyeIcon sx={{color: "grey"}} onClick={() => setHideProof(!hideProof)}/>
          </Box>
        </Grid>
        <Grid item xs={2} pt={1}>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontWeight: "800", fontSize: "15px" }}
            mb={1}
          >
            {time}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          {status === "Available" ?
            <Box sx={{backgroundColor: "green", width: "90px", color: "white", borderRadius: "10px", height: "22px"}}>
              <Typography
                variant="body2"
                textAlign={"center"}
                sx={{ fontWeight: "800", fontSize: "15px" }}
                mb={1}
              >
                {status}
              </Typography>
            </Box> :
            <Box sx={{backgroundColor: "red", width: "90px", color: "white", borderRadius: "10px", height: "22px"}}>
            <Typography
              variant="body2"
              textAlign={"center"}
              sx={{ fontWeight: "800", fontSize: "15px" }}
              mb={1}
            >
              {status}
            </Typography>
          </Box>}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProofHistoryRow