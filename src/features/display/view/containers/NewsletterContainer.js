import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import Newsletter from "../pages/Newsletter";
import usePageData from "../../../../utilities/usePageData";

const NewsletterContainer = () => {
  const { mode, pageType, pageId } = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  const newsletterContent = usePageData(pageType, pageId);
  console.log("content", newsletterContent);

  return (
    <Box display="flex" justifyContent="center">
      {pageId === "all" ? (
        <Typography variant={"complementary"}>
          This will be the newsletters page
        </Typography>
      ) : (
        <Newsletter content={newsletterContent} />
      )}
    </Box>
  );
};

export default NewsletterContainer;
