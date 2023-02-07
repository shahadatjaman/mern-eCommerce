import { Box, Button, Rating, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRating,
  getRating,
  updateRating,
  updateReview,
} from "../../../../feature/reducer/product/rating";
import { deepClone } from "../../../../utils";
import Modal from "../../../Shared/Modal";
import { UpdateRating } from "./Styles";

const Update = ({ product_id, isOpenUpdate, setIsOpenUpdte }) => {
  const { rating, ratings, loading } = useSelector((state) => state.rating);

  const [oldRating, setOldRating] = useState(2);
  const [oldText, setOldText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRating(product_id));
  }, [dispatch, product_id]);

  useEffect(() => {
    if (rating) {
      setOldRating(rating.rating);
      setOldText(rating.text);
    }
  }, [rating]);

  const closeModal = () => {
    setIsOpenUpdte(false);
  };

  const updateHandler = () => {
    dispatch(
      updateRating({
        product_id: product_id,
        rating: oldRating.toString(),
        text: oldText,
      })
    );

    setIsOpenUpdte(false);
  };

  return (
    !loading && (
      <Modal
        isOpen={isOpenUpdate}
        title="Update Review"
        width="600"
        closeModal={closeModal}
      >
        <UpdateRating>
          <Stack spacing={1}>
            <Box>
              <Rating
                name="simple-controlled"
                value={oldRating}
                onChange={(e) => {
                  setOldRating(e.target.value);
                }}
              />
            </Box>
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
    )
  );
};

export default Update;
