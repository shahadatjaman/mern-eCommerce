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
  isDisabled = false,
  isValid = false,
  alignMent,
  radius,
  color,
  width,
  height,
  onClick,
}) => {
  return (
    <ButtonWrap alignMent={alignMent}>
      {isDisabled ? (
        <Btn
          hoverColor={hoverColor}
          radius={radius}
          activeColor={activeColor}
          type={type}
          width={width}
          height={height}
          onClick={onClick}
          color={color}
          isValid={isValid}
        >
          {text}
        </Btn>
      ) : (
        <Btn
          disabled
          radius={radius}
          width={width}
          height={height}
          activeColor={activeColor}
          type={type}
          isValid={isValid}
          onClick={onClick}
        >
          {text}
        </Btn>
      )}
    </ButtonWrap>
  );
};

export default Button;
