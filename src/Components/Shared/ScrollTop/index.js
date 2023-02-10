import { Box } from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import scrollTop from "../../../utils/ScrollHandler";
import { useWindowHeight } from "../../../hooks/useWindowHeight";
const ScrollToTop = () => {
  const isScroll = useWindowHeight({ height: 700 });

  return (
    <Box>
      <Box
        onClick={() => scrollTop()}
        sx={{
          width: "50px",
          height: "50px",
          background: "#221ecd",
          position: "fixed",
          bottom: isScroll ? "8%" : "100%",
          right: "5%",
          zIndex: 99,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.5s",
          boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2), 
          0px 4px 8px rgba(0, 0, 0, 0.1), 
          0px 8px 16px rgba(0, 0, 0, 0.05)`,
        }}
      >
        <AirplanemodeActiveIcon
          sx={{
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollToTop;
