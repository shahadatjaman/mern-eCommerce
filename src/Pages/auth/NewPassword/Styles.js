import styled from "styled-components";
import { Box } from "@mui/material";

export const Wraaper = styled(Box)`
  width: 600px;
  background: "#fff";
  margin: 4rem auto;
  padding: 2;
  @media (max-width: 900px) {
    width: 100% !important;
  }
`;
