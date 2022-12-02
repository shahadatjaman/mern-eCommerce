import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  Color,
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

import {
  getSelectedProduct,
  getDimension,
} from "../../../feature/reducer/productDetails";

const ProducrColor = () => {
  const [isActiveColor, setActive] = useState(null);
  const [isActiveSize, setActiveSize] = useState(null);

  const { product, selectedProduct, dimension } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const imageChanger = (color) => {
    dispatch(getSelectedProduct(color));
  };

  useEffect(() => {
    if (selectedProduct && dimension) {
      if (selectedProduct.color.hex === dimension.color.hex) {
        setActive(dimension.color.hex);
      }
    }
  }, [selectedProduct, dimension]);

  // Product size hanler
  const productPriceHandler = (size) => {
    if (dimension) {
      const newDimension = {
        _id: dimension._id,
        title: dimension.title,
        img_url: dimension.img_url,
        color: dimension.color,
        qty: dimension.qty,
        size: size.size,
        price: size.price,
        subtotal: size.price,
      };
      dispatch(getDimension(newDimension));
      setActiveSize(newDimension);
    }
  };

  useEffect(() => {
    if (dimension) {
      setActiveSize(dimension);
    }
  }, [dispatch, dimension]);

  return (
    <ColorSizeWrapper>
      <Color>
        {/* Product Color */}
        <Small>Color</Small>
        <ColorContent>
          <Label>
            <CurcleBorder>
              <Colored bg="red"></Colored>
            </CurcleBorder>
          </Label>
        </ColorContent>
      </Color>

      {/* Product sizes */}
      <Size>
        <Small>Size</Small>
        <SizeContent>
          {selectedProduct &&
            isActiveSize &&
            selectedProduct.sizes.map((size, index) => (
              <Label key={index} onClick={() => productPriceHandler(size)}>
                <InputSize type={"radio"} />

                {isActiveSize.size === size.size ? (
                  <Selected bg>{size.size}</Selected>
                ) : (
                  <Selected>{size.size}</Selected>
                )}
              </Label>
            ))}
        </SizeContent>
      </Size>
    </ColorSizeWrapper>
  );
};

export default ProducrColor;
