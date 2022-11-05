import React from "react";
import { Label, Name, PInput, PriceWrapper, Span } from "../Styles";

const PriceInput = ({
  name,
  parsent = false,
  currency = false,
  width,
  placeholder = 0,
}) => {
  return (
    <PriceWrapper width={width}>
      <Name> {name} </Name>
      <Label>
        {currency && <Span>৳</Span>}

        {parsent && (
          <Span bg="#3899ec" ml="2">
            %
          </Span>
        )}
      </Label>
      <PInput type={"number"} width={width} placeholder={placeholder} />
    </PriceWrapper>
  );
};

export default PriceInput;
