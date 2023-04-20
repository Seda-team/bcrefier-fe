import { Box, Button, Typography, Grid, Paper, Link } from "@mui/material";

function LandingPage() {
  return (
    <Box sx={{minHeight: "100vh", backgroundImage: "linear-gradient(to left, #46b2e1, #1b3a82)"}}>
      <Box sx={{
        backgroundColor: "black",
        color: "black",
        borderTop: "0 px solid white",
        textTransform: "none",
        width: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 0 10px #265D97",
      }}>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <img id="header-logo" src="images/logo2.png"/>
          <img id="header-text" src="images/logo5.png"/>
        </Box>
        
        <Link href="/app" sx={{textDecoration: "none"}}>
          <Button
            sx={{
              backgroundColor: "#DCDCDC",
              color: "black",
              borderTop: "0 px solid white",
              borderRadius: "10px",
              textTransform: "none",
              width: "150px",
              height: "40px",
              fontSize: "20px",
              fontWeight: "800",
              marginRight: "100px"
            }}
          >
            Launch App
          </Button>
        </Link>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
        <img id="landing-page1" src="images/BCrefier.png"/>
        <img id="landing-page2" src="images/Technology.png"/>
      </Box>
      
      {/* <Box sx={{display: "flex", justifyContent: "center"}}>
        <img id="body-logo" src="images/logo3.png"/>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h4" sx={{color: "#DCDCDC", fontFamily: "Arial", fontWeight: 500, paddingTop: "30px", fontStyle: "italic"}}>Credit Verifier on Blockchain</Typography>
      </Box>
      <Box>
        <Grid container sx={{padding: "100px", paddingTop: "50px", paddingBottom: "70px", display: "flex", justifyContent: "space-around"}}>
          <Grid item xs={3} >
            <Paper elevation={1} sx={{
              backgroundColor: "#DCDCDC",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}>
              <Typography variant="h4" sx={{fontWeight: "800"}}>Blockchain</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper elevation={1} sx={{
              backgroundColor: "#DCDCDC",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}>
              <Typography variant="h4" textAlign={"center"} sx={{fontWeight: "800"}}>Zero Knowledge Proof</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} >
            <Paper elevation={1} sx={{
              backgroundColor: "#DCDCDC",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}>
              <Typography variant="h4" sx={{fontWeight: "800"}}>Data Mining</Typography>
            </Paper>
          </Grid>
        </Grid>
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
                backgroundColor: "#DCDCDC",
                color: "black",
                textTransform: "none",
                width: "150px",
                height: "30px",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginRight: "100px",
                marginLeft: "50px",
                marginBottom: "20px"}}>
            <Typography
              sx={{
                
                fontSize: "12px",
                fontWeight: "800"
              }}
            >
              Powered by SeDa Team
              </Typography>
            </Box>
      </Box>
      </Box> */}
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
                backgroundColor: "#DCDCDC",
                color: "black",
                textTransform: "none",
                width: "180px",
                height: "30px",
                position: "absolute",
                bottom: "20px",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginRight: "100px",
                marginLeft: "50px",
                marginBottom: "20px"}}>
                  
                <img id="power-icon" src="images/logo6.png" /> 
              <Typography
                sx={{
                  
                  fontSize: "12px",
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

export default LandingPage;
