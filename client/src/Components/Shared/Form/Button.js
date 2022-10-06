import React from "react";
import { Btn } from "./Styles";

function Button({ type, text }) {
  return <Btn type={type}>{text}</Btn>;
}

export default Button;
