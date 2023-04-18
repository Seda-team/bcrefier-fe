import React, { useContext, useState } from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import { GlobalContext } from '../../../context/GlobalState'
import CustomedDialog from '../../../shared/CustomedDialog'

const ProofComponent = ({name, des}) => {
  const { address } = useContext(GlobalContext) 
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickCreate= () => {
    // if(!address) {
    //   alert("Please connect your wallet!")
    // }else {
    //   setOpen(true)
    // }
    setOpen(true)
  }
  return (
    <Box> 
      <Paper
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "30px",
          }}
          elevation={1}
        >
          <Typography 
            variant="body2"
            sx={{ fontSize: "17px", fontWeight: 800 }}
            mr={1}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "13px", fontWeight: 500, marginTop: "10px" }}
            mr={1}>
            {des}

          </Typography>
        </Paper>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}> 
          <Button
            sx={{
              backgroundColor: "black",
              color: "#1E90FF",
              borderTop: "0 px solid #1E90FF",
              borderRadius: "10px",
              textTransform: "none",
              width: "200px",
              height: "40px",
              fontSize: "16px",
              fontWeight: "800",
              "&:hover": {
                cursor: "pointer"
              }
            }}
            onClick={() => handleClickCreate()}
          >
            Create
          </Button>
          <CustomedDialog open={open} handleClose={handleClose} title={name} des={des} info={{}}/>
        </Box>
        
    </Box>
  )
}

export default ProofComponent