import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import Home from "../pages/Home";
import usePageData from "../../../../utilities/usePageData";

const AboutContainer = () => {
  console.log("ABOUT CONTAINER");
  const dispatch = useDispatch();
  const { mode, pageType, pageId } = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  const aboutContent = usePageData(pageType, pageId);

  const getInnerContainer = () => {
    switch (pageId) {
      case "home":
        return <Home content={aboutContent} />;
      case "aboutUs":
        console.log("aboutUs");
        break;
      default:
        console.log("HOME");
    }
  };

  return <Box>{getInnerContainer()}</Box>;
};

export default AboutContainer;
