import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import sign from "../../../../../public/sign.png";

const Home = ({ content }) => {
  console.log("CONTENT", content);
  const dispatch = useDispatch();
  const pathData = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  // console.log("PATH DATA", pathData);

  return (
    <Box>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
        }}
        alt="CCToo Sign"
        src="/assets/sign.png"
      />
      <Typography variant={"complementary"}>
        This will be the home page
      </Typography>
    </Box>
  );
};

export default Home;
