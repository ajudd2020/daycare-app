import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import parse from "html-react-parser";

const Newsletter = ({ content }) => {
  const dispatch = useDispatch();
  const pathData = useSelector(
    (state) => get(state, ["display", "path"], {}),
    isEqual
  );

  const renderParagraph = (content) => {
    return parse(content);
  };

  console.log("PATH", pathData);
  const imageString = `/assets/${content[0].imageContent}`;

  return (
    <Box>
      <Typography>{content.title}</Typography>
      {renderParagraph(content[0].introText)}
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          p: 2,
        }}
        alt="CCToo Sign"
        src={imageString}
      />
    </Box>
  );
};

export default Newsletter;
