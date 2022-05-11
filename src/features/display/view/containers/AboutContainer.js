import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import Home from "../../pages/Home";

const AboutContainer = () => {
  const dispatch = useDispatch();
  const pathData = useSelector(
    (state) => get(state, ["main", "path"], {}),
    isEqual
  );

  const getInnerContainer = () => {
    const pathPage = get(pathData, "page", "home");
    switch (pathPage) {
      case "home":
        return <Home />;
      case "announcements":
        console.log("announcements");
        break;
      case "newsletter":
        console.log("newsletter");
        break;
      default:
        console.log("HOME");
    }
  };

  return (
    <Box>
      <Typography> This is the about container</Typography>
      {getInnerContainer()}
    </Box>
  );
};

export default AboutContainer;
