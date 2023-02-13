import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Add({ addLongDescription }) {
  // let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
    information: "",
  });

  const { productInit } = useSelector((state) => state.createproduct);

  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
    addLongDescription(value);
  };

  useEffect(() => {
    if (userInfo.description) {
      addLongDescription(userInfo.description);
    }
  }, [addLongDescription, userInfo]);

  useEffect(() => {
    setuserInfo((prev) => {
      return { ...prev, description: productInit.optionalValue.long_desc };
    });
  }, [productInit]);

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
        style={{ height: "40vh" }}
      />
    </>
  );
}
export default Add;
