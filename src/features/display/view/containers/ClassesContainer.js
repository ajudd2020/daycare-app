import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import Home from "../pages/Home";
import usePageData from "../../../../utilities/usePageData";
import Newsletters from "../pages/Newsletters";
import Announcements from "../pages/Announcements";

const ClassesCountainer = () => {
  console.log("ABOUT CONTAINER");
  const dispatch = useDispatch();
  const { mode, pageType, pageId } = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  const classesContent = usePageData(pageType, pageId);
  console.log("classes content -->", classesContent);

  const getInnerContainer = () => {
    if (pageId === "all") {
      return <Typography>All classes will be displayed</Typography>;
    }
    return <Typography> JUST ONE CLASS will be displayed</Typography>;
  };

  return (
    <Box height="100%" width="100%">
      {getInnerContainer()}
    </Box>
  );
};

export default ClassesCountainer;
