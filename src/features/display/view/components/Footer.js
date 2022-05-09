import { Checkbox, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavBarItem, NavBarText } from "../../../../styles";
// import { testThunk } from "./testSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Box
      height="5%"
      sx={{
        backgroundColor: "primary.dark",
        display: "flex",
        padding: 4,
      }}
    >
      {/* <Link to="/test" style={{ textDecoration: "none" }}>
        <NavBarItem>
          <NavBarText>Test</NavBarText>
        </NavBarItem>
      </Link> */}
      <Typography>This is a sample footer</Typography>
    </Box>
  );
};

export default Footer;