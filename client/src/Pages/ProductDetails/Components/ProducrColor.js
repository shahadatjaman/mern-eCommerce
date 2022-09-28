import { useDispatch } from "react-redux";

import { useState } from "react";
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

import { setImage } from "../../../feature/reducer/productDetails";

const ProducrColor = ({ selectedColor, product_colors }) => {
  const [isActive, setActive] = useState(null);

  const dispatch = useDispatch();

  const imageChanger = (color) => {
    dispatch(setImage(color));
  };

  const changeColorHandler = (e) => {
    setActive(e);
  };

  return (
    <ColorSizeWrapper>
      <Color>
        <Small>Color</Small>
        <ColorContent>
          {product_colors?.map((color, index) => (
            <Label onClick={() => imageChanger(color)}>
              <CurcleBorder
                style={{
                  border: isActive === color.color && "2px solid green",
                }}
                onClick={() => changeColorHandler(color.color)}
              >
                <Colored bg={color.color}></Colored>
              </CurcleBorder>
            </Label>
          ))}
        </ColorContent>
      </Color>
      <Size>
        <Small>Size</Small>
        <SizeContent>
          {selectedColor && (
            <Label size>
              <InputSize type={"radio"} />
              <Selected>{selectedColor.size}</Selected>
            </Label>
          )}
        </SizeContent>
      </Size>
    </ColorSizeWrapper>
  );
};

export default ProducrColor;
