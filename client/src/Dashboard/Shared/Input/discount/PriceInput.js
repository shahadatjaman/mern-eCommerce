import React from "react";
import { Label, Name, PInput, PriceWrapper, Span } from "../Styles";

const PriceInput = ({
  label,
  parsent = false,
  currency = false,
  width,
  placeholder,
  handleChange,
  name,
  value,
  disabled = false,
}) => {
  return (
    <PriceWrapper width={width}>
      <Name> {label} </Name>
      <Label>
        {currency && <Span>৳</Span>}

        {parsent && (
          <Span bg="#3899ec" ml="2">
            %
          </Span>
        )}
      </Label>
      <PInput
        disabled={disabled}
        type={"number"}
        width={width}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </PriceWrapper>
  );
};

export default PriceInput;
