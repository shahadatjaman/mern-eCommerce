import React from "react";
import { Btn } from "./Styles";

/**
 *
 * @param {string} param0
 * @returns
 */

function Button({ type, text, hoverColor, activeColor, isDisabled }) {
  return (
    <>
      {isDisabled ? (
        <Btn disabled activeColor={activeColor} type={type}>
          {text}
        </Btn>
      ) : (
        <Btn activeColor={activeColor} hoverColor={hoverColor} type={type}>
          {text}
        </Btn>
      )}
    </>
  );
}

export default Button;
