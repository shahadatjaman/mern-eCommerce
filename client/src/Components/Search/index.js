import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SearchField from "./SearchField";
import SelectField from "../Shared/Form/MuiSelect/index";
import { Form, H1, Title, Wrapper } from "./Styles";
import GridActions from "../Shared/Grid/";
import Sorting from "../Shared/Sorting/";
import Products from "./Products";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQueryProducts } from "../../feature/reducer/Query";
import ProductNotFound from "../Shared/ProductNotFound/";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [values, setValues] = useState({
    queryText: "",
    category_id: "",
  });

  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.query);

  const [searchParams] = useSearchParams();
  const queryText = searchParams.get("queryText"); // "testCode"

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Default query string from params
  useEffect(() => {
    setValues((prev) => {
      return {
        ...prev,
        queryText: queryText,
      };
    });
  }, [queryText]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/query?queryText=${values.queryText}`);

    const params = {
      pathOne: "vendor",
      pathTwo: "getproducts",
      method: "post",
      from: 0,
      to: 100,
    };

    if (values.queryText && values.category_id) {
      dispatch(
        getQueryProducts({
          values: values,
          ...params,
        })
      );
    }

    if (values.queryText && !values.category_id) {
      dispatch(
        getQueryProducts({
          values: { queryText: values.queryText },
          ...params,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Box sx={{ marginBottom: 6 }}>
        <Title>
          <H1>Search - {values.queryText}</H1>
        </Title>
        <Form onSubmit={submitHandler}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <SearchField
              name="queryText"
              handleChange={handleChange}
              value={values.queryText}
            />
            {categories && (
              <SelectField
                name="category_id"
                handleChange={handleChange}
                value={values.category_id}
                options={categories}
              />
            )}
          </Box>

          <Box sx={{ my: 2, maxWidth: 120 }}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ height: 45 }}
              disabled={!values.queryText}
            >
              Search
            </Button>
          </Box>
        </Form>
      </Box>
      <Box sx={{ background: "#fff" }}>
        <Grid container sx={{ p: 2 }}>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <GridActions />
          </Grid>
          <Grid item xs={4}>
            <Sorting />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Products products={products} />

        {products && products.length === 0 && <ProductNotFound />}
        {!products && <ProductNotFound />}
      </Box>
    </Wrapper>
  );
};

export default SearchForm;
