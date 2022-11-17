import React, { useEffect } from "react";
import {
  Actions,
  AddFile,
  AddUrl,
  Images,
  MediaWrapper,
  Span,
} from "../Styles";

import { useState } from "react";

import AddFileURL from "./AddURL";

import {} from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "./Img";

const Media = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { files, loading } = useSelector((state) => state.variation);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  window.addEventListener("beforeunload", (event) => {
    console.log("API call before page reload");
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return "";
  });
  window.addEventListener("unload", (event) => {
    console.log("API call after page reload");
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();

    return "";
  });
  // How to send API call before page reload or close using ReactJS

  return (
    <MediaWrapper isEmpty={files.length < 0}>
      <Actions>
        <AddFile>
          <Span>Add files</Span>
        </AddFile>
        <AddUrl>
          <Span onClick={openModal}>Add from URL</Span>
        </AddUrl>
      </Actions>
      <Images>
        {files.length > 0 &&
          files?.map((file, index) => <Img index={index} file={file} />)}
      </Images>
      <AddFileURL isOpen={isOpen} closeModal={closeModal} />
    </MediaWrapper>
  );
};

export default Media;
