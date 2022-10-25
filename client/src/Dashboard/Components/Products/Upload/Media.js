import React from "react";
import { AddFile, AddUrl, MediaWrapper, Span } from "../Styles";

const Media = () => {
  return (
    <MediaWrapper>
      <AddFile>
        <Span>Add files</Span>
      </AddFile>
      <AddUrl>
        <Span>Add from URL</Span>
      </AddUrl>
    </MediaWrapper>
  );
};

export default Media;
