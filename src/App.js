import { useContext, useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import Connect from "./components/Connect";
import ProofCreation from "./components/ProofCreation";
import ProofHistory from "./components/ProofHistory";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const {address} = useContext(GlobalContext)
  
  return (
    <Box sx={{backgroundColor: "#DCDCDC", minHeight: "100vh"}}>
      <Box sx={{height: "50px",
        backgroundColor: "black", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingLeft: "100px", 
        paddingRight: "100px"}}>
        <Link sx={{textDecoration: "none"}} href="/">
          <Typography sx={{color: "white", fontWeight: "800", fontSize: "20px"}}>
            BCrefier
          </Typography>
        </Link>
        
        <Connect/>
      </Box>
      <ProofCreation/>
      {address ? <ProofHistory/> : ""}
    </Box>
  );
}

export default App;
