import { Checkbox, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PrimaryBox, daycareTheme, testTheme } from "../../../styles";
import {
  getPagesThunk,
  getTextContentThunk,
  setPageData,
} from "../displaySlice";
import NavBar from "./components/NavBar";
import isEqual from "lodash/isEqual";
import useDisplay from "../../../utilities/useDisplay";
// import { testThunk } from "./testSlice";

const ViewTemplate = () => {
  const dispatch = useDispatch();
  useDisplay("view");

  useEffect(() => {
    console.log("In use effect");
    dispatch(getPagesThunk());
    dispatch(getTextContentThunk());
  }, []);

  const windowDimensions = useSelector(
    (state) => state.display.dimensions,
    isEqual
  );

  //   const getInnerContainer = () => {};

  console.log("WINDOW DIM", windowDimensions.height);

  return (
    <Box
      height={windowDimensions.height}
      width={windowDimensions.width}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Typography variant={"darkColor"}>This is the view template</Typography>
      <Checkbox defaultChecked></Checkbox>
    </Box>
  );
};

export default ViewTemplate;
