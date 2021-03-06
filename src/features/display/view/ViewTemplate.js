import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import isEqual from "lodash/isEqual";
import useDisplay from "../../../utilities/useDisplay";
import Footer from "../components/Footer";
import get from "lodash/get";
import AboutContainer from "./containers/AboutContainer";
import ClassesCountainer from "./containers/ClassesContainer";
import NewsletterContainer from "./containers/NewsletterContainer";
// import { testThunk } from "./testSlice";

const ViewTemplate = () => {
  // This custom hook will set all the needed information on state
  // i.e. mode (view) and path(about or classes)
  useDisplay("view");
  const pathData = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  const windowDimensions = useSelector(
    (state) => get(state, ["initialLoadData", "dimensions"], {}),
    isEqual
  );

  const getInnerContainer = () => {
    const pathType = get(pathData, "pageType", false);
    if (pathType) {
      switch (pathType) {
        case "about":
          console.log("ABOUT");
          return <AboutContainer />;
        case "announcements":
          console.log("ANNOUNCEMENTS");
          break;
        case "newsletters":
          console.log("NEWSLETTERS");
          return <NewsletterContainer />;
        case "classes":
          return <ClassesCountainer />;
        case "staff":
          console.log("STAFF");
          break;
        default:
          console.log("ABOUT");
      }
    }
  };
  const height = windowDimensions.height;

  return (
    <Box
      // height={windowDimensions.height}
      width={windowDimensions.width}
      sx={{
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ minHeight: "10%" }}>
        <NavBar />
      </Box>
      <Box>{getInnerContainer()}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ViewTemplate;
