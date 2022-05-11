import { Checkbox, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import isEqual from "lodash/isEqual";
import useDisplay from "../../../utilities/useDisplay";
import Footer from "../components/Footer";
import get from "lodash/get";
import AboutContainer from "./containers/AboutContainer";
// import { testThunk } from "./testSlice";

const ViewTemplate = () => {
  // This custom hook will set all the needed information on state
  // i.e. mode (view), path(about or classes), window size
  useDisplay("view");
  const pathData = useSelector(
    (state) => get(state, ["main", "path"], {}),
    isEqual
  );

  const windowDimensions = useSelector(
    (state) => state.main.dimensions,
    isEqual
  );

  const getInnerContainer = () => {
    const pathType = get(pathData, "type", false);
    if (pathType) {
      switch (pathType) {
        case "about":
          console.log("ABOUT");
          return <AboutContainer />;
        case "classes":
          console.log("CLASSES");
          break;
        case "staff":
          console.log("STAFF");
          break;
        default:
          console.log("ABOUT");
      }
    }
  };

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
      {getInnerContainer()}
      <Footer />
    </Box>
  );
};

export default ViewTemplate;
