import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { FormWrapper, Wrapper } from "./Styles";
import Rattings from "./Ratting";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createRating } from "../../../../feature/reducer/product/rating";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CreateReview = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (rating > 0 && text.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [rating, text]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createRating({
        pathOne: "v1",
        pathTwo: "createrating",
        values: {
          product_id: id,
          rating: rating.toString(),
          text,
        },
        method: "post",
      })
    );
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={submitHandler}>
        <Rattings setRating={setRating} />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Description your experience (optional)"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Button variant="contained" type="submit" disabled={!isValid}>
            POST
          </Button>
        </Box>
      </FormWrapper>
    </Wrapper>
  );
};

export default CreateReview;
