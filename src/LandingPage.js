import { Box, Button, Typography, Grid, Paper, Link } from "@mui/material";

function LandingPage() {
  return (
    <Box sx={{height: "100vh", backgroundColor: "#001E3C"}}>
      <Box sx={{
        color: "black",
        borderTop: "0 px solid white",
        borderRadius: "15px",
        textTransform: "none",
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
        <Link href="/app" sx={{textDecoration: "none"}}>
          <Button
            sx={{
              marginTop: "30px",
              backgroundColor: "#DCDCDC",
              color: "black",
              borderTop: "0 px solid white",
              borderRadius: "15px",
              textTransform: "none",
              width: "150px",
              height: "40px",
              fontSize: "18px",
              fontWeight: "800",
              marginRight: "100px"
            }}
          >
            Launch App
          </Button>
        </Link>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h1" sx={{color: "#DCDCDC", fontFamily: "Arial", padding: "50px", paddingBottom: "20px", fontWeight: 700, borderBottom: "7px solid #DCDCDC"}}>BCrefier</Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h4" sx={{color: "#DCDCDC", fontFamily: "Arial", fontWeight: 500, paddingTop: "30px", fontStyle: "italic"}}>Credit Verifier on Blockchain</Typography>
      </Box>
      <Box>
        <Grid container sx={{padding: "100px", display: "flex", justifyContent: "space-around"}}>
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
          <Box sx={{marginTop: "30px",
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
      </Box>
    </Box>
  );
}

export default LandingPage;
