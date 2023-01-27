import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";

function Add({ setLong_desc }) {
  // let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
    information: "",
  });

  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
  };

  useEffect(() => {
    setLong_desc(userInfo.description);
  }, [setLong_desc, userInfo]);

  return (
    <>
      <EditorToolbar toolbarId={"t1"} />
      <ReactQuill
        theme="snow"
        value={userInfo.description}
        onChange={ondescription}
        placeholder={"Write something awesome..."}
        modules={modules("t1")}
        formats={formats}
      />
    </>
  );
}
export default Add;
