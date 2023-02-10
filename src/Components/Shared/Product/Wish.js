import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Action, WishStyle } from "./Styles";
import { useWish } from "../../../hooks/useWish";
import { useDispatch, useSelector } from "react-redux";
import { addNewWish } from "../../../feature/reducer/addWish";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Wish = ({ product, isLoved, addHandler }) => {
  return (
    <Box sx={{ ...WishStyle }} onClick={addHandler}>
      {isLoved ? (
        <FavoriteIcon fontSize={"medium"} color={"error"} />
      ) : (
        <FavoriteBorderIcon fontSize={"medium"} />
      )}
    </Box>
  );
};

export default Wish;
