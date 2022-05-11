import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import usePages from "../../../utilities/usePages";

const Home = () => {
  const dispatch = useDispatch();
  usePages("home");
  const pathData = useSelector(
    (state) => get(state, ["main", "path"], {}),
    isEqual
  );

  // console.log("PATH DATA", pathData);

  return (
    <Box>
      <Typography variant={"complementary"}>
        This will be the home page
      </Typography>
    </Box>
  );
};

export default Home;
