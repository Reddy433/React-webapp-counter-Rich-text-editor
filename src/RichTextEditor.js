import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { Button, Box, Typography } from "@mui/material";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (newState) => {
    setEditorState(newState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleBoldClick = () => {
    handleChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const handleItalicClick = () => {
    handleChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const handleUnderlineClick = () => {
    handleChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const handleListClick = () => {
    handleChange(RichUtils.toggleBlockType(editorState, "unordered-list-item"));
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Rich Text Editor
      </Typography>
      <Box sx={{ display: "flex", marginBottom: "8px" }}>
        <Button
          variant="contained"
          onClick={handleBoldClick}
          sx={{ marginRight: "8px" }}
        >
          Bold
        </Button>
        <Button
          variant="contained"
          onClick={handleItalicClick}
          sx={{ marginRight: "8px" }}
        >
          Italic
        </Button>
        <Button
          variant="contained"
          onClick={handleUnderlineClick}
          sx={{ marginRight: "8px" }}
        >
          Underline
        </Button>
        <Button variant="contained" onClick={handleListClick}>
          List
        </Button>
      </Box>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          minHeight: "200px",
          padding: "8px",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </Box>
  );
};

export default RichTextEditor;
