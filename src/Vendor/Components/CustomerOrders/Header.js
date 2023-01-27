import React from "react";

import { useNavigate } from "react-router-dom";
import { ActionBar, HeaderWrapper, Plus, ProducrWrapper } from "./Styles";
import CircularProgress from "@mui/material/CircularProgress";
import Query from "./Query";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import Paginations from "./Table/Pagination";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SelectedAction from "./SelectedActions";
import CachedIcon from "@mui/icons-material/Cached";
import NotFound from "../../Shared/NotFound";
import { getProducts } from "../../feature/reducer/Product/products";
import CustomizedProgressBars from "../../Shared/Loading";
import Tabs from "./Tab";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { products, selectedProducts, loading } = useSelector(
    (state) => state.getProducts
  );

  const navigateHandler = () => {
    navigate("/newproduct");
  };

  const refreshHandler = () => {
    dispatch(
      getProducts({
        pathOne: "v3",
        pathTwo: "get-product-by-id",
        method: "get",
      })
    );
  };

  return (
    <HeaderWrapper>
      <Grid container spacing={2}>
        <Grid item xl={12}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              fontWeight={"600"}
              display={"inline-block"}
              marginRight={2}
            >
              Order lists
            </Typography>
            <Typography
              variant="h4"
              color={"#868aa5"}
              fontWeight={"600"}
              display={"inline-block"}
            >
              {products && products.length}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <ProducrWrapper>
        <Box px={2}>
          <Grid container spacing={2}>
            {selectedProducts && selectedProducts.length !== 0 ? (
              <>
                <Grid item xl={12}>
                  <SelectedAction />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xl={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #ddd",
                      height: 90,
                    }}
                  >
                    <Box
                      sx={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: 1,
                      }}
                    >
                      <Tabs />
                      {/* <Typography fontWeight={500}>
                        All Orders ({products?.length})
                      </Typography> */}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xl={6}>
                  <Box
                    my={2}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      onClick={refreshHandler}
                      sx={{
                        marginRight: 4,
                        cursor: "pointer",
                        display: "flex",
                        width: 150,
                        height: 40,
                        borderRadius: 50,
                        border: "1px solid #d6e6fe",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                      }}
                    >
                      <CachedIcon sx={{ color: "#116dff", marginRight: 2 }} />
                      <Typography sx={{ color: "#116dff" }}>Refresh</Typography>
                    </Box>
                    <Box
                      sx={{
                        marginRight: 4,
                        cursor: "pointer",
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        border: "1px solid #d6e6fe",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FileUploadIcon sx={{ color: "#116dff" }} />
                    </Box>
                    <Query />
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Box>

        <>
          <Table />
          {/* <Paginations products={products} /> */}
        </>

        {/* {products && products.length === 0 && !loading && (
          <NotFound text={"Products Not Found!"} />
        )} */}
        {loading && <CustomizedProgressBars />}
      </ProducrWrapper>
    </HeaderWrapper>
  );
};

export default Header;
