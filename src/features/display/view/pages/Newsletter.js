import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import parse from "html-react-parser";

const Newsletter = ({ content }) => {
  const renderParagraph = (content) => {
    return parse(content);
  };
  const imageLocation = get(content, [0, "imageContent"], "");
  const imageString = `/assets/${imageLocation}`;

  return (
    <>
      {content ? (
        <Box display="flex" flexDirection="column" sx={{ m: 5 }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 100,
                width: 150,
                p: 2,
              }}
              alt="CCToo Sign"
              src={imageString}
            />
            <Typography variant={"h4"}>{content[0].title}</Typography>
          </Box>
          {renderParagraph(content[0].introText)}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Newsletter;
