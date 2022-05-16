import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { render } from "@testing-library/react";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Typography>{content.textContent[i]}</Typography>
    ) : (
      ""
    );
  };

  const renderInnerContent = (content) => {
    console.log("CONTENT MAP", content.textContent);
    return content.textContent
      ? content.textContent.map((text) => {
          console.log("IN TERN", text);
          return <Typography variant={"complementary"}>{text}</Typography>;
        })
      : "";
  };
  // console.log("PATH DATA", pathData);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      height=" 100%"
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
            m: 2,
          }}
          alt="CCToo Sign"
          src="/assets/sign.png"
        />
        <Box sx={{ m: 2 }}>
          {content ? content.map((content) => renderParagraph(content, 0)) : ""}
        </Box>
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
