import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Action } from "./Styles";
import { useWish } from "../../../hooks/useWish";
import { useDispatch, useSelector } from "react-redux";
import { addNewWish } from "../../../feature/reducer/addWish";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wish = ({ product }) => {
  const { addToWish, state } = useWish();

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addHandler = () => {
    if (user) {
      addToWish({ product_id: product._id });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(addNewWish({ wish: state }));
  }, [state, dispatch]);

  return (
    <Action onClick={addHandler}>
      <AiOutlineHeart />
    </Action>
  );
};

export default Wish;
