import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxStyle = styled(Box)`
  width: "32.55%";
  height: 100;
  background-color: "white";
  display: "flex";
  justify-content: "center";
  align-items: "center";
  border: 1px solid ${(props) => (props.isActive ? "#221ecd" : "#fff")};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-right: 0.4rem;
`;
