import { Box } from "@mui/system";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditHome = () => {
  console.log("EDITOR HOME");
  const [editorState, setEditorState] = useState({ text: "This is test text" });
  // console.log("PATH DATA", pathData);
  const handleContentChange = (editorState) => {
    console.log("EDITOR STATE", editorState);
  };

  return (
    <Box height="100%">
      {/* <Editor
        state={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onChange={handleContentChange}
      /> */}
      <ReactQuill
        value={editorState}
        onChange={(e) => handleContentChange(e)}
      />
    </Box>
  );
};

export default EditHome;
