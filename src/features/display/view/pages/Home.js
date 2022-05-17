import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { render } from "@testing-library/react";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// const parse = require('html-react-parser');
import parse from "html-react-parser";
// import sign from "../../../../../public/sign.png";

/**
 * This page won't be dynamically displayed like the newsletters or announcements.
 * That is because this page will have a very specific layout that is unique to it and not needed in the other components
 *
 * @param {*} content An array containing the content to be displayed on this page
 * @returns page content
 */

const Home = ({ content }) => {
  console.log("CONTENT", content);

  /**
   * This function will return the content for the page to display. Sending in the index will allow the user to
   * decide which paragraph to select.
   *
   * @param {*} content The content to be filtered through and displayed
   * @param {*} i The index of the paragraph we want. i.e. 0 for first paragraph
   * @returns Typography with the content
   */
  const renderParagraph = (content, i) => {
    return content.textContent ? (
      <div key={i}>{parse(content.textContent[i])}</div>
    ) : (
      ""
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height=" 100%"
      // overflow="hidden"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "75%",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            p: 2,
          }}
          alt="CCToo Sign"
          src="/assets/sign.png"
        />
        <Box>
          {content ? content.map((content) => renderParagraph(content, 0)) : ""}
        </Box>
      </Box>
      <Box>
        <Typography>Stay Up To Date With CCCToo!</Typography>
      </Box>
      <Box>
        <Typography>
          This will be the placeholder for the most recent announcements
        </Typography>
      </Box>
      <Box>
        <Typography>
          This will be the placeholder for a link to the most recent newsletter
        </Typography>
      </Box>

      <Box>
        {content ? content.map((content) => renderParagraph(content, 1)) : ""}
      </Box>
    </Box>
  );
};

export default Home;
