import { Editor } from "react-draft-wysiwyg";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box } from "@mui/system";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import sign from "../../../../../public/sign.png";

const EditHome = () => {
  // console.log("PATH DATA", pathData);
  const handleContentChange = (editorState) => {
    console.log("EDITOR STATE", editorState);
  };

  return (
    <Box>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onChange={handleContentChange}
      />
    </Box>
  );
};

export default EditHome;
