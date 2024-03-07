"use client"
import React, { useState } from "react";
import katex from "katex";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function Home() {
  const [editorContent, setEditorContent] = useState();

  // Function to handle editor content change
  const handleEditorChange = (content) => {
    setEditorContent(content);
    console.log("Editor Content:", content);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p> My Other Contents </p>
        <button onClick={()=>console.log(editorContent)}>view</button>
        <div className="sun-editor-container">
          {/* Preview of editor content with applied styles */}
          <div dangerouslySetInnerHTML={{ __html: editorContent }} />
        </div>
        <SunEditor
          width="100%"
          height="100%"
          placeholder="Please type here..."
          defaultValue="\def\foo{x^2} \foo + \foo"
          onChange={handleEditorChange}
          setOptions={{
            height: 900,
            buttonList: [
              ["undo", "redo"],
              ["font", "fontSize", "formatBlock"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "removeFormat",
              ],
              ["fontColor", "hiliteColor", "textStyle"],
              ["list", "indent", "align", "horizontalRule", "table"],
              ["link", "image", "video", "math"],
              ["fullScreen", "showBlocks", "codeView"],
            ],
            katex: katex,
          }}
        />
      </div>
    </main>
  );
};