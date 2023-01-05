import styled from "styled-components";
import Tab from "@mui/material/Tab";

export const TabBar = styled(Tab)`
  font-size: 18px !important;
`;

export const TabPanelWrapper = styled.div`
  margin-top: 2rem;
`;

export const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: auto;
  }
`;
