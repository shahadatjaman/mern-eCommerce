// Hooks
import { useSelector, useDispatch } from "react-redux";

// Components
import Layout from "../Layout";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import Tabel from "../../Components/Shared/Tabel/Table";

// Styled Components
import { CartMain, ItemEmpty, ItemEmptyText, Wrapper } from "./Styles";
import { Container } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// Mui Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useWish } from "../../hooks/useWish";
import { useEffect } from "react";
import { addNewWish } from "../../feature/reducer/addWish";
import CustomizedTables from "./Tabel";
const Wishlist = () => {
  const { state } = useWish();
  const { wishes } = useSelector((state) => state.wish);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state) {
      dispatch(addNewWish({ wish: state }));
    }
  }, [state, dispatch]);

  return (
    <Layout footer={true}>
      <Wrapper>
        <BreadCrumb
          pathOne={"Home"}
          pathTwo={"wishlist"}
          IconOne={HomeIcon}
          IconTwo={FavoriteIcon}
        />

        <CartMain>
          {/* If Wishlist is empty! */}
          {!wishes && (
            <ItemEmpty>
              <Box>
                <FavoriteBorderIcon />
              </Box>
              <ItemEmptyText>No more prodcut in wishlist</ItemEmptyText>
              <Box mt={4}>
                <Button variant="outlined">
                  <NavLink to={"/"}>Add Items</NavLink>
                </Button>
              </Box>
            </ItemEmpty>
          )}

          <Container>
            {/* <Box>
              <Typography variant="h4" fontWeight={"600"}>
                Wish List
              </Typography>
            </Box> */}
            {/* if wishList is not empty */}
            {/* {wishes && wishes?.length !== 0 && <Tabel items={wishes} />} */}
            {wishes && wishes?.length !== 0 && <CustomizedTables />}
          </Container>
        </CartMain>
      </Wrapper>
    </Layout>
  );
};

export default Wishlist;
