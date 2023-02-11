import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../Components/Search";
import { getCategories } from "../../feature/reducer/categories";
import { getProductsByValues } from "../../feature/reducer/getProducts";
import { getQueryProducts } from "../../feature/reducer/Query";
import Layout from "../Layout";
import { Wrapper } from "./Styles";

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("queryText"); // "testCode"

  useEffect(() => {
    dispatch(
      getProductsByValues({
        queryText: code,
      })
    );
  }, [dispatch, code]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Layout footer={true}>
      <Wrapper>
        <Container maxWidth={"xl"}>
          <SearchForm />
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Search;
