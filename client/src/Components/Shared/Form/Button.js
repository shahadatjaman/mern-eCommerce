import React from "react";
import { Btn, ButtonWrap } from "./Styles";

/**
 *
 * @param {string} param0
 * @returns
 */

const Button = ({
  type,
  text,
  hoverColor,
  activeColor,
  isDisabled,
  alignMent,
  radius,
  width,
  height,
}) => {
  return (
    <ButtonWrap alignMent={alignMent}>
      {!isDisabled ? (
        <Btn
          disabled
          radius={radius}
          width={width}
          height={height}
          activeColor={activeColor}
          type={type}
        >
          {text}
        </Btn>
      ) : (
        <Btn
          hoverColor={hoverColor}
          radius={radius}
          activeColor={activeColor}
          type={type}
          width={width}
          height={height}
        >
          {text}
        </Btn>
      )}
    </ButtonWrap>
  );
};

export default Button;
