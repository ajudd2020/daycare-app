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
  const { mode, pageType, pageName, pageCategory } = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );
  // Since this page will render one of three different types of pages, we will use the page category as the "pageId" argument for the usePageData hook.
  // In the other components, the pageId will relate to the id of the thing being loaded, i.e. classId or staffId IF the path is pointing to a specfic class or staff. If not, the general list page will be loaded.
  // Here, however, we will use pageCategory as the type of about page and additionalPageIdenitfier as the page id for the announcement or newsletter if one specific one is selected.
  const aboutContent = usePageData(pageType, pageCategory, pageName);

  const getInnerContainer = () => {
    switch (pageCategory) {
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
