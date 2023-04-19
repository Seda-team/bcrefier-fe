import { useContext, useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import Connect from "./components/Connect";
import ProofCreation from "./components/ProofCreation";
import ProofHistory from "./components/ProofHistory";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const {address} = useContext(GlobalContext)
  const [curNav, setCurNav] = useState("CREATE")

  const handleChangeNav = (e) => {
    setCurNav(e)
  }
  
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
      <Box sx={{display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderBottomLeftRadius: "15px", 
        borderBottomRightRadius: "15px", 
        boxShadow: "0 0 10px #265D97",
        width: "400px", 
        margin: "0 auto"}}>
        <Typography 
          textAlign={"center"}
          sx={curNav === "CREATE" ? { 
          borderBottomLeftRadius: "15px",
          paddingTop: "10px",
          fontSize: "25px", 
          height: "50px", 
          backgroundColor: "black",
          width: "200px",
          fontWeight: 800, 
          color: "#1E90FF"}: 
          { borderBottomLeftRadius: "15px",
          paddingTop: "10px",
          fontSize: "25px", 
          height: "50px", 
          backgroundColor: "white",
          width: "200px",
          fontWeight: 800, 
          color: "black"}}
          onClick={() => handleChangeNav("CREATE")}>
          Create Proof
        </Typography>
        <Typography 
          textAlign={"center"}
          sx={curNav === "VERIFY" ? { 
          paddingTop: "10px",
          fontSize: "25px", 
          height: "50px", 
          backgroundColor: "black",
          borderBottomRightRadius: "15px", 
          width: "200px",
          fontWeight: 800, 
          color: "#1E90FF"} : 
          { borderBottomRightRadius: "15px",
          paddingTop: "10px",
          fontSize: "25px", 
          height: "50px", 
          backgroundColor: "white",
          width: "200px",
          fontWeight: 800, 
          color: "black"}}
          onClick={() => handleChangeNav("VERIFY")}>
          Verify Proof
        </Typography>
      </Box>
      
      {curNav === "CREATE" ? 
      <Box>
        <ProofCreation/>
        {address ? <ProofHistory/> : ""}
      </Box> :
      ""}
    </Box>
  );
}

export default App;
