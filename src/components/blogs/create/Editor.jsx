import React, { useState } from "react";

import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mb-10 w-full">
      <QuillEditor
        className="h-[200px] font-['Poppins']"
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default Editor;
