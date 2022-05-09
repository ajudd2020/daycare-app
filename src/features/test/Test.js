import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../display/view/components/NavBar";
import { testThunk } from "./testSlice";

const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testThunk());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Typography>This is the test component</Typography>
    </Box>
  );
};

export default Test;
