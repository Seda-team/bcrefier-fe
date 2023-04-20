import { useContext, useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import Connect from "./components/Connect";
import ProofCreation from "./components/ProofCreation";
import ProofHistory from "./components/ProofHistory";
import ProofVerification from "./components/ProofVerification";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const {address} = useContext(GlobalContext)
  const [curNav, setCurNav] = useState("CREATE")

  const handleChangeNav = (e) => {
    setCurNav(e)
  }
  
  return (
    <Box sx={{backgroundColor: "#DCDCDC", minHeight: "100vh"}}>
      <Box sx={{height: "70px",
        backgroundColor: "black", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingRight: "100px"}}>

        <Link sx={{textDecoration: "none"}} href="/">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <img id="header-logo" src="images/logo2.png"/>
            <img id="header-text" src="images/logo5.png"/>
          </Box>
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
      <Box>
        <ProofVerification/>
      </Box>}
      <Box sx={{
          color: "black",
          borderTop: "0 px solid white",
          borderRadius: "15px",
          textTransform: "none",
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
          <Box sx={{
                backgroundColor: "black",
                color: "black",
                textTransform: "none",
                width: "180px",
                height: "30px",
                position: "fixed",
                bottom: "20px",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginRight: "100px",
                marginLeft: "50px",
                marginBottom: "20px"}}>
                  
                <img id="power-icon" src="images/logo2.png" /> 
              <Typography
                sx={{
                  
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "800"
                }}
                pt={0.5}
              >
                Powered by SeDa Team
              </Typography>
            </Box>
      </Box>
    </Box>
  );
}

export default App;
