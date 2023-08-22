import React, { useState, useMemo } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import parse from 'html-react-parser';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Wrapper from '../assets/Styles/TextEditorWrapper'

const TextEditor = ()=> {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  const handleChange = (data) => {
    setEditorState(data);
  };
  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );
  const parsedContent = parse(htmlData);

  const toolbarOptions = {
    options: ["inline", "fontSize", "image", "emoji"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  return (
    <Wrapper className="editor-container">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleChange}
                wrapperClassName="editor-wrapper"
                editorClassName="message-editor"
                toolbarClassName="message-toolbar"
                toolbar={toolbarOptions}
            />      
            {/* <div className="html-output" >{parsedContent}</div> */}
    </Wrapper>
  );
}


export default TextEditor