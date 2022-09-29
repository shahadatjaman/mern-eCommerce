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
} from "../styles";

import {
  getSelectedProduct,
  getPriceSize,
} from "../../../feature/reducer/productDetails";

const ProducrColor = () => {
  const [isActiveColor, setActive] = useState(null);
  const [isActiveSize, setActiveSise] = useState(null);

  const { product, selectedProduct } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const imageChanger = (color) => {
    dispatch(getSelectedProduct(color));
  };

  const changeColorHandler = (hex) => {
    setActive(hex);
  };

  useEffect(() => {
    if (selectedProduct && product) {
      if (selectedProduct.color.hex === product.small_images[0].color.hex) {
        setActive(selectedProduct.color.hex);
      }
    }
  }, [selectedProduct, product]);

  const productPriceHandler = (size) => {
    dispatch(getPriceSize({ size: size.size, price: size.price }));
    setActiveSise(size.size);
  };

  useEffect(() => {
    if (selectedProduct) {
      dispatch(getPriceSize(selectedProduct.sizes[0]));
      setActiveSise(selectedProduct.sizes[0].size);
    }
  }, [dispatch, selectedProduct]);

  return (
    <ColorSizeWrapper>
      <Color>
        <Small>Color</Small>
        <ColorContent>
          {product &&
            product.small_images.map((color, index) => {
              return (
                <Label key={index} onClick={() => imageChanger(color)}>
                  <CurcleBorder
                    style={{
                      border:
                        isActiveColor === color.color.hex && "2px solid green",
                    }}
                    onClick={() => changeColorHandler(color.color.hex)}
                  >
                    <Colored bg={color.color.hex}></Colored>
                  </CurcleBorder>
                </Label>
              );
            })}
        </ColorContent>
      </Color>
      <Size>
        <Small>Size</Small>
        <SizeContent>
          {selectedProduct &&
            selectedProduct.sizes.map((size, index) => (
              <Label key={index} onClick={() => productPriceHandler(size)}>
                <InputSize type={"radio"} />

                <Selected bg={isActiveSize === size.size ? "#000" : "#fed700"}>
                  {size.size}
                </Selected>
              </Label>
            ))}
        </SizeContent>
      </Size>
    </ColorSizeWrapper>
  );
};

export default ProducrColor;
