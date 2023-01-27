import { Box, Grid } from "@mui/material";
import React from "react";
import { useWindowWidth } from "../../../../hooks/userWindowWidth";
import GridAction from "../../../Shared/Grid/";
import Sorting from "../../../Shared/Sorting/";
import { Wrapper } from "./Styles";

const Actions = () => {
  const isSmallDevice = useWindowWidth({ width: 900 });
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {!isSmallDevice && (
            <Grid
              xl={7}
              md={6}
              item
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <GridAction />
            </Grid>
          )}

          <Grid item xl={5} md={6} xs={isSmallDevice ? 12 : 6}>
            <Sorting />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Actions;
