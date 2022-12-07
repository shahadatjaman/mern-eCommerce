import { Box, Button, Rating, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRating,
  getRating,
} from "../../../../feature/reducer/product/rating";
import Modal from "../../../Shared/Modal";
import { UpdateRating } from "./Styles";

const Update = ({ product_id, isOpenUpdate, setIsOpenUpdte }) => {
  const { rating } = useSelector((state) => state.rating);

  const [oldRating, setOldRating] = useState(2);
  const [oldText, setOldText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRating({ product_id }));
  }, [dispatch, product_id]);

  useEffect(() => {
    if (rating) {
      console.log(rating.rating.$numberDecimal);
      setOldRating(rating.rating.$numberDecimal);
      setOldText(rating.text);
    }
  }, [rating]);

  const closeModal = () => {
    setIsOpenUpdte(false);
  };

  const updateHandler = () => {
    dispatch(createRating({ product_id, rating: oldRating, text: oldText }));
    setIsOpenUpdte(false);
  };

  return (
    <Modal
      isOpen={isOpenUpdate}
      title="Update rating"
      width="600"
      closeModal={closeModal}
    >
      <UpdateRating>
        <Stack spacing={1}>
          <Rating
            name="simple-controlled"
            value={oldRating}
            onChange={(e) => {
              setOldRating(e.target.value);
            }}
          />
        </Stack>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            onChange={(e) => setOldText(e.target.value)}
            variant="standard"
            value={oldText}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Button
            variant="contained"
            disabled={oldText.length === 0}
            onClick={updateHandler}
            sx={{ borderRadius: 50, marginRight: 4 }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            disabled={oldText.length === 0}
            onClick={() => setIsOpenUpdte(false)}
            sx={{ borderRadius: 50 }}
          >
            Cancle
          </Button>
        </Box>
      </UpdateRating>
    </Modal>
  );
};

export default Update;
