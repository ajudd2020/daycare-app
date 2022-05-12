import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";

const Newsletters = () => {
  const dispatch = useDispatch();
  const pathData = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  // console.log("PATH DATA", pathData);

  return (
    <Box>
      <Typography variant={"complementary"}>
        This will be the newsletters page
      </Typography>
    </Box>
  );
};

export default Newsletters;
