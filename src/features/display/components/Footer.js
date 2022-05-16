import { Checkbox, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavBarItem, NavBarText } from "../../../styles";
// import { testThunk } from "./testSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="10%"
      sx={{
        backgroundColor: "primary.dark",
        p: 1,
      }}
    >
      <Box>
        <Typography>​20336 Frankfort Square Road</Typography>
        <Typography>Frankfort IL, 60423</Typography>
        <Typography>815-464-9820</Typography>
      </Box>
      {/* <Link to="/test" style={{ textDecoration: "none" }}>
        <NavBarItem>
          <NavBarText>Test</NavBarText>
        </NavBarItem>
      </Link> */}
    </Box>
  );
};

export default Footer;
