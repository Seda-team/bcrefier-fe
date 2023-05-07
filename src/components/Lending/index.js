import React, {useContext, useState} from 'react'
import { ButtonGroup, Box, Typography, Paper, Button } from "@mui/material";
import CustomedDialog from './CustomedDialog';
import { GlobalContext } from '../context/GlobalState';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Dashboard from '../DashBoard';
import Deposit from '../Deposit';
import Borrow from '../Borrow';
import History from '../History';

const Lending = () => {
  const { address } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [curNav, setCurNav] = useState("DEPOSIT");
  const handleChangeNav = (nav) => {
    setCurNav(nav);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickCreate= async () => {
    setOpen(true)
  }
  return (
    <Box
      sx={{
        paddingTop: "20px",
      }}
    >
      <Dashboard/>
      <Box
        pt={3}
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ButtonGroup
          sx={{
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid #fff",
            boxShadow: "0 0 10px #ff7700"
          }}
        >
          <Button
            sx={
              curNav === "DEPOSIT"
                ? {
                    borderRadius: "20px",
                    background: "#ff7700",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#ff7700",
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("DEPOSIT")}
          >
            DEPOSIT
          </Button>
          <Button
            sx={
              curNav === "BORROW"
                ? {
                    borderRadius: "20px",
                    background: "#ff7700",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#ff7700",
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("BORROW")}
          >
            BORROW
          </Button>
          <Button
            sx={
              curNav === "HISTORY"
                ? {
                    borderRadius: "20px",
                    background: "#ff7700",
                    color: "#fff",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
                : {
                    borderRadius: "20px",
                    width: "200px",
                    border: "1px solid #fff",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#ff7700",
                    "&:hover": {
                      background: "#ff7700",
                      color: "#fff",
                      border: "0px solid #fff",
                    },
                  }
            }
            onClick={() => handleChangeNav("HISTORY")}
          >
            HISTORY
          </Button>
        </ButtonGroup>
      </Box>
        {curNav === "DEPOSIT" ? <Deposit/> : ""}
        {curNav === "BORROW" ? <Borrow/> : ""}
        {curNav === "HISTORY" ? <History/> : ""}
    </Box>
  )
}

export default Lending