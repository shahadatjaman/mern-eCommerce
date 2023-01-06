import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { checkVeriCodeIsValid } from "../../feature/reducer/user/auth";
import { Span } from "./Styles";

const Counter = ({ validTime, isValidCode }) => {
  const [counter, setCounter] = useState(validTime);

  const dispatch = useDispatch();

  const { email } = useParams();

  // Check if verification code is valid or not
  useEffect(() => {
    if (counter < 60) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    } else {
      dispatch(
        checkVeriCodeIsValid({
          pathOne: "auth",
          pathTwo: "checkvalidity",
          _id: email,
          method: "get",
        })
      );
    }
  }, [counter, validTime, dispatch, email]);

  useEffect(() => {
    if (!isValidCode) {
      setCounter(1);
    }
  }, [isValidCode]);

  return counter < 60 ? (
    <Typography display={"block"}>
      Enter code within 1 Minute ( <Span>{counter}</Span>)
    </Typography>
  ) : (
    ""
  );
};

export default React.memo(Counter);
