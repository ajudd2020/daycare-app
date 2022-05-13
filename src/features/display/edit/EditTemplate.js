import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import isEqual from "lodash/isEqual";
import useDisplay from "../../../utilities/useDisplay";
import Footer from "../components/Footer";
import get from "lodash/get";
import EditHome from "./pages/EditHome";
// import { testThunk } from "./testSlice";

const EditTemplate = () => {
  // This custom hook will set all the needed information on state
  // i.e. mode (view) and path(about or classes)
  useDisplay("edit");
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
          break;
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
      <EditHome />
      <Footer />
    </Box>
  );
};

export default EditTemplate;
