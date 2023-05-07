import { Box, Button, Typography, Grid, Paper, Link } from "@mui/material";

function LandingPage() {
  return (
    <Box sx={{minHeight: "100vh", backgroundImage: "linear-gradient(to left, #89f7fe, #fff991)"}}>
      <Box sx={{
        backgroundColor: "black",
        color: "black",
        borderTop: "0 px solid white",
        textTransform: "none",
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 0 10px #265D97",
      }}>
        <Box sx={{display: "flex", alignItems: "center"}}>
            <img id="header-logo" src="images/Logo.png"/>
            <img id="header-text" src="images/Name.png"/>
        </Box>
        
        <Link href="/app" sx={{textDecoration: "none", display: "flex", alignItems: "center"}}>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "10px",
              textTransform: "none",
              display: "flex", 
              alignItems: "center",
              width: "150px",
              height: "35px",
              fontSize: "17px",
              fontWeight: "800",
              marginRight: "100px"
            }}
          >
            <Typography sx={{fontSize: "17px",
              fontWeight: "800"}}>
              Launch App
            </Typography>
          </Button>
        </Link>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
        <img id="landing-page1" src="images/Light Bulb.png"/>
        <img id="landing-page2" src="images/Technology.png"/>
      </Box>
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
                position: "absolute",
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

export default LandingPage;
