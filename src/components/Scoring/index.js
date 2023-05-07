import { Box, Container, Paper, Typography, Button } from '@mui/material'
import React, {useContext, useState, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toDayTime } from '../shared/utils/time'
import { fetchData } from '../shared/utils/others'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { SERVER } from '../shared/constant/constant'

const Scoring = () => {
  const {address, refresh, updateRefresh} = useContext(GlobalContext)
  const [userInfo, setUserInfo] = useState({"credit_score": "?", "timestamp": "?"})

  useEffect(() => {
    if (address) {
      fetchData({public_key: address}, SERVER + "centic/user/registerInfo/")
      .then(data => {
        setUserInfo({
          "credit_score": data.credit_score,
          "timestamp": data.timestamp
        })
      })
    }
  }, [address])

  const handleGetCreditScore = () => {
    const credit_score = Math.floor(Math.random() * 1000) + 1
    const timestamp = Math.floor(Date. now() / 1000)
    fetchData({credit_score: credit_score, timestamp: timestamp, public_key: address}, SERVER + "centic/user/updateRegisterInfo/")
      .then(data => {
        setUserInfo({
          "credit_score": data.credit_score,
          "timestamp": data.timestamp
        })
      })
    updateRefresh(!refresh)
  }

  return (
    <Box
      sx={{
        paddingTop: "70px",
      }}
      mb={5}
    >
      { address ? <Container> 
        <Box mt={2}>
        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "15px",
            padding: "50px",
            boxShadow: "0 0 10px #1E90FF",
          }}
          elevation={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            mb={2}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "30px", fontWeight: "700", color: "#1E90FF"}}
              mb={1}
            >
              Credit Scoring
              <Box sx={{width: "100%", height: "4px", backgroundColor: "#1E90FF", borderRadius: "10px", marginTop: "10px"}}></Box>
            </Typography>
          </Box> 
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Box sx={{width: "100%", display: "flex", padding: "40px", flexDirection: "column", alignItems: "center", borderRight: "3px solid #1E90FF"}}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                  <Typography
                    variant="body2"
                    sx={{fontSize: "25px", fontWeight: "700"}}
                  >
                    Your on-chain credit score: 
                  </Typography>
                  <Box sx={{marginLeft: "20px", borderRadius: "10px", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography
                      variant="body2"
                      sx={{ 
                        fontSize: "30px", 
                        fontWeight: "700",
                        color: "#db6600"}}
                    >
                      500
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "20px", fontWeight: "700"}}
                  >
                    Achieved at:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "20px", fontWeight: "700", color: "red", marginLeft: "10px"}}
                  >
                    {/* {userInfo.timestamp === "?" ? "?" : toDayTime(userInfo.timestamp)} */}
                    06/05/2023
                  </Typography>
                </Box>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", marginTop: "70px", alignItems: "center"}}>
                <Typography variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "700"}}>
                    Click to get your current credit score
                </Typography>
                <Button
                  sx={{
                    marginTop: "30px",
                    borderColor: "white",
                    border: "3px solid #1E90FF",
                    color: "#1E90FF",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    textTransform: "none",
                    height: "60px",
                    width: "300px",
                    fontWeight: "700",
                    fontSize: "25px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                  onClick={handleGetCreditScore}
                >
                  Get Credit Score
                </Button> 
              </Box>
            </Box>
            <Box sx={{width: "100%", display: "flex", padding: "40px", flexDirection: "column"}}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                  <Typography
                    variant="body2"
                    sx={{fontSize: "25px", fontWeight: "700"}}
                  >
                    Your off-chain credit score: 
                  </Typography>
                  <Box sx={{marginLeft: "20px", borderRadius: "10px", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography
                      variant="body2"
                      sx={{ 
                        fontSize: "30px", 
                        fontWeight: "700",
                        color: "#1E90FF"}}
                    >
                      700
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "20px", fontWeight: "700"}}
                  >
                    Achieved at: 
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "20px", fontWeight: "700", color: "red", marginLeft: "10px"}}
                  >
                    {/* {userInfo.timestamp === "?" ? "?" : toDayTime(userInfo.timestamp)} */}
                    07/05/2023
                  </Typography>
                </Box>
              </Box>
                <Box sx={{display: "flex", flexDirection: "column", marginTop: "50px", alignItems: "center", marginTop: "70px"}}>
                <Typography variant="body2"
                  sx={{ fontSize: "20px", fontWeight: "700"}}>
                    Click to provide your credit proof
                </Typography>
                <Button
                  sx={{
                    marginTop: "30px",
                    borderColor: "white",
                    border: "3px solid #1E90FF",
                    backgroundColor: "white",
                    color: "#1E90FF",
                    borderRadius: "8px",
                    textTransform: "none",
                    height: "60px",
                    width: "300px",
                    fontWeight: "700",
                    fontSize: "25px",
                    "&:hover": {
                      cursor: "pointer"
                    }
                  }}
                  onClick={handleGetCreditScore}
                >
                  Provide Credit Proof
                </Button> 
              </Box>
            </Box>
          </Box>
          
        </Paper>
        </Box>
      </Container> : 
      <Container> 
        <Box mt={2}>
          <Paper
            sx={{
              backgroundColor: "#E8E8E8",
              borderRadius: "15px",
              padding: "50px",
              boxShadow: "0 0 10px #265D97",
            }}
            elevation={1}
          >
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"
            // , backgroundColor: "black", height: "70px", width: "600px"
            }}>
              <LockPersonIcon  sx={{fontSize: "50px", fontWeight: "800", marginRight: "30px"}} />
              <Typography sx={{fontSize: "25px", fontWeight: "800"}}>Please connect to use our application!</Typography>
            </Box>
          </Paper>
        </Box>
      </Container>}
    </Box>
  )
}

export default Scoring