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
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { products, selectedProducts, loading } = useSelector(
    (state) => state.getProducts
  );

  const navigateHandler = () => {
    navigate("/dashboard/newproduct");
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
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xl={6} md={6} lg={6} sm={6} xxs={6}>
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h4"
                fontWeight={"600"}
                display={"inline-block"}
                marginRight={2}
              >
                Porducts
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
          <Grid item xl={6} md={6} lg={6} sm={6} xxs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <ActionBar>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 50, height: 40 }}
                  bg="#221ecd"
                  onClick={navigateHandler}
                >
                  <Plus>+</Plus>
                  New Product
                </Button>
              </ActionBar>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <ProducrWrapper>
        <Container>
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

                      height: 90,
                    }}
                  >
                    <Box
                      sx={{
                        width: 200,
                        height: 40,
                        borderRadius: 50,
                        border: "1px solid #d6e6fe",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        padding: 2,
                      }}
                    >
                      <Typography fontWeight={500}>
                        All Products ({products?.length})
                      </Typography>
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
        </Container>

        {products && products.length !== 0 && !loading && (
          <>
            <Table />
            <Paginations products={products} />
          </>
        )}

        {products && products.length === 0 && !loading && (
          <NotFound text={"Products Not Found!"} />
        )}
        {loading && <CustomizedProgressBars />}
      </ProducrWrapper>
    </HeaderWrapper>
  );
};

export default Header;
