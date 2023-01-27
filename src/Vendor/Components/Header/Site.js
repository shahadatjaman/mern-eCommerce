import React from "react";
import { Down, H5, SiteWrapper } from "./Styles";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Typography } from "@mui/material";
const Site = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <SiteWrapper onClick={() => openInNewTab("http://localhost:3000")}>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        My Site
      </Typography>

      <LaunchIcon />
    </SiteWrapper>
  );
};

export default Site;
