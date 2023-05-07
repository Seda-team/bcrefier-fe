import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'

const HistoryRow = ({type, date, ltv, lt, amount}) => {
  return (
    <Box>
     <Grid container sx={{padding: "10px", marginTop: "15px"}}>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800}}
            textAlign={"center"}
          >
           {type}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800}}
            textAlign={"center"}
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800}}
            textAlign={"center"}
          >
            {ltv}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800}}
            textAlign={"center"}
        >
            {lt}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Typography  
            variant="body2"
            sx={{ fontSize: "15px", fontWeight: 800}}
            textAlign={"center"}
          >
            {amount} USDT
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Button
              sx={{
                color: "#ff7700",
                backgroundColor: "white",
                border: "2px solid #ff7700",
                borderRadius: "15px",
                textTransform: "none",
                width: "150px",
                fontSize: "15px",
                fontWeight: "800",
              }}
            >
              Repay
            </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HistoryRow