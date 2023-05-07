import { useContext, useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import Connect from "./components/Connect";
import Lending from "./components/Lending";
import Scoring from "./components/Scoring";
import { GlobalContext } from "./components/context/GlobalState";

function App() {
  const {address} = useContext(GlobalContext)
  const [curNav, setCurNav] = useState("LENDING")

  const handleChangeNav = (e) => {
    setCurNav(e)
  }
  
  return (
    <Box sx={{backgroundImage: "linear-gradient(to left, #89f7fe, #fff991)", minHeight: "100vh"}}>
      <Box sx={{height: "60px",
        backgroundColor: "black", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingRight: "100px"}}>

        <Link sx={{textDecoration: "none"}} href="/">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <img id="header-logo" src="images/Logo.png"/>
            <img id="header-text" src="images/Name.png"/>
          </Box>
        </Link>
        <Box sx={{display: "flex", marginLeft: "150px"}}>
          <Box>
            <Typography 
              textAlign={"center"}
              sx={curNav === "LENDING" ? { 
                border: "3px solid #db6600",
                borderRadius: "10px",
                paddingTop: "5px",
                fontSize: "25px", 
                height: "40px", 
                backgroundColor: "black",
                width: "200px",
                fontWeight: 800, 
                marginRight: "10px",
                color: "#db6600"} :
                { 
                  borderBottom: "3px solid #db6600",
                  paddingTop: "5px",
                  fontSize: "25px", 
                  height: "40px", 
                  backgroundColor: "black",
                  width: "200px",
                  fontWeight: 800, 
                  marginRight: "10px",
                  color: "#db6600"}}
              onClick={() => handleChangeNav("LENDING")}>
              Lending
            </Typography>
          </Box>
          <Box>
            <Typography 
              textAlign={"center"}
              sx={
              curNav === "SCORING" ? { 
              border: "3px solid #1E90FF",
              borderRadius: "10px",
              paddingTop: "5px",
              fontSize: "25px", 
              height: "40px", 
              backgroundColor: "black",
              width: "200px",
              fontWeight: 800, 
              color: "#1E90FF"}
              :  {
              borderBottom: "3px solid #1E90FF",
              paddingTop: "5px",
              fontSize: "25px", 
              height: "40px", 
              backgroundColor: "black",
              width: "200px",
              fontWeight: 800, 
              color: "#1E90FF"}}
              onClick={() => handleChangeNav("SCORING")}>
              Scoring
            </Typography>
          </Box>
        </Box>
        
        <Connect/>
      </Box>
       {curNav === "LENDING" ? 
      <Box>
        <Lending/>
      </Box> : <Box>
        <Scoring/>
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
                color: "white",
                textTransform: "none",
                width: "180px",
                borderRadius: "10px",
                height: "35px",
                position: "fixed",
                bottom: "20px",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginRight: "100px",
                marginLeft: "50px",
                marginBottom: "20px"}}>
                  
                <img id="power-icon" src="images/Logo.png" /> 
              <Typography
                sx={{
                  
                  fontSize: "12px",
                  fontWeight: "800"
                }}
                pt={0.5}
              >
                Powered by Zk Lenders
              </Typography>
            </Box>
      </Box>
    </Box>
  );
}

export default App;
