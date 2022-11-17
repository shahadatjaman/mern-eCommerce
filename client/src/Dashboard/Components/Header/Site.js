import React from "react";
import { Down, H5, SiteWrapper } from "./Styles";

const Site = () => {
  return (
    <SiteWrapper>
      <H5>My Site</H5>
      <Down>
        <i className="fa-solid fa-chevron-down"></i>
      </Down>
    </SiteWrapper>
  );
};

export default Site;
