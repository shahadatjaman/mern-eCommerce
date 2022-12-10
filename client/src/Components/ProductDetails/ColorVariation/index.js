import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
  Color as ColorStyle,
  ColorContent,
  ColorSizeWrapper,
  Required,
  SizeContent,
  SizeWrapper,
  Small,
} from "./Styles";

import Size from "./Size";

import Color from "./Color";
import { checkVarintColor } from "../../../utils";

const ProducrVariation = () => {
  const [hasColor, setHasColor] = useState(null);
  const [hasSize, setHasSize] = useState(null);
  const { options } = useSelector((state) => state.productDetails);
  const { recentVariation } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (options) {
      setHasColor(checkVarintColor(options, "Color"));
      setHasSize(checkVarintColor(options, "Size"));
    }
  }, [options]);

  return (
    <ColorSizeWrapper>
      {options && (
        <>
          {hasColor && (
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
        </>
      )}

      {/* Product sizes */}
      {hasSize && (
        <SizeWrapper>
          <Small>
            Size
            <Required>(Required)</Required>
          </Small>
          <SizeContent>
            {options &&
              options?.map((val, index) => (
                <>
                  {val.variation_type === "Size" &&
                    recentVariation._id === val.product_variations_id && (
                      <Size key={index} value={val} />
                    )}
                </>
              ))}
          </SizeContent>
        </SizeWrapper>
      )}
    </ColorSizeWrapper>
  );
};

export default ProducrVariation;
