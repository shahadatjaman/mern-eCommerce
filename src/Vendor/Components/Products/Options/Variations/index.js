import React, { useEffect, Fragment } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Action,
  Color,
  ColorWrapper,
  H6,
  Li,
  Price,
  SizeWrapper,
  Text,
  UL,
  Wrapper,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { getOptions } from "../../../../feature/reducer/Product/productVariation";

const Variations = ({ variation_id, isOpen }) => {
  const { options } = useSelector((state) => state.variation);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOptions({ variation_id }));
  }, [dispatch, variation_id, isOpen]);

  return (
    <Wrapper>
      {options?.length !== 0 && (
        <>
          <SizeWrapper>
            <H6>Color (1) and Sizes(4)</H6>
            <UL>
              {options.length > 0 &&
                options.map((val, index) => (
                  <Li key={index}>
                    <Text>
                      {val.variation_type === "Color" && (
                        <Color bg={val.value} />
                      )}
                      {val.variation_type === "Size" && val.value}
                    </Text>
                    {val.variation_type === "Size" && (
                      <Price> {val.price.$numberDecimal} $</Price>
                    )}

                    <Action>
                      <HighlightOffIcon />
                    </Action>
                  </Li>
                ))}
            </UL>
          </SizeWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Variations;
