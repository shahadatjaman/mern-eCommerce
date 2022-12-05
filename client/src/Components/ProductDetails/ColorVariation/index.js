import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  Color as ColorStyle,
  ColorContent,
  Colored,
  ColorSizeWrapper,
  CurcleBorder,
  InputSize,
  Label,
  Selected,
  Size,
  SizeContent,
  Small,
} from "./Styles";

import { getSelectedProduct } from "../../../feature/reducer/productDetails";

import Color from "./Color";

const ProducrColor = () => {
  const { product, selectedProduct, options } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  return (
    <ColorSizeWrapper>
      {options && (
        <ColorStyle>
          <Small>Color</Small>
          <ColorContent>
            {options?.map((val, index) => (
              <>
                {val.variation_type === "Color" && (
                  <Color option={val} key={index} />
                )}
              </>
            ))}
          </ColorContent>
        </ColorStyle>
      )}

      {/* Product sizes */}
      {/* <Size>
        <Small>Size</Small>
        <SizeContent>
          {selectedProduct &&
            isActiveSize &&
            selectedProduct.sizes.map((size, index) => (
              <Label key={index}>
                <InputSize type={"radio"} />

                {isActiveSize.size === size.size ? (
                  <Selected bg>{size.size}</Selected>
                ) : (
                  <Selected>{size.size}</Selected>
                )}
              </Label>
            ))}
        </SizeContent>
      </Size> */}
    </ColorSizeWrapper>
  );
};

export default ProducrColor;
