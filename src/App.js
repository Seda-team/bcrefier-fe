import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Connect from "./components/Connect";
import ProofCreation from "./components/ProofCreation";

function App() {

  return (
    <Box sx={{height: "100vh", backgroundColor: "#DCDCDC"}}>
      <Box sx={{height: "50px",
        backgroundColor: "black", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingLeft: "100px", 
        paddingRight: "100px"}}>
        <Typography sx={{color: "white", fontWeight: "800", fontSize: "20px"}}>
          BCrefier
        </Typography>
        <Connect/>
      </Box>
      <ProofCreation/>
    </Box>
  );
}

export default App;
