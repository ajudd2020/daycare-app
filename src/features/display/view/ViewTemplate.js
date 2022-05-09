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
import Footer from "./components/Footer";
// import { testThunk } from "./testSlice";

const ViewTemplate = () => {
  const dispatch = useDispatch();
  // This custom hook will set all the needed information on state
  // i.e. mode (view), path(about or classes), window size
  useDisplay("view");

  useEffect(() => {
    dispatch(getPagesThunk());
    dispatch(getTextContentThunk());
  }, []);

  const windowDimensions = useSelector(
    (state) => state.display.dimensions,
    isEqual
  );

  //   const getInnerContainer = () => {};

  return (
    <Box
      height={windowDimensions.height}
      width={windowDimensions.width}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Typography variant={"darkColor"}>This is the view template</Typography>
      <Checkbox defaultChecked></Checkbox>
      <Footer />
    </Box>
  );
};

export default ViewTemplate;
