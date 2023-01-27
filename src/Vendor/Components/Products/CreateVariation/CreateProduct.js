import React from "react";
import Media from "../Upload/Media";
import { H6, ItemWrapper, Options, Plus, Wrapper } from "../Styles";
import { useCheckbox } from "../../../hooks/useCheckbox";
import { useSelector } from "react-redux";
import { Ul } from "../../../Shared/Styles";
import List from "./List";

import { Switch } from "pretty-checkbox-react";
import { Span } from "./Styles";
import { isEmptyArray } from "../../../utils";

const CreateProduct = () => {
  const { handleChange, isChecked } = useCheckbox();

  const { productVariations } = useSelector((state) => state.variation);

  return (
    <Wrapper>
      <H6>
        <Plus>+</Plus> Create Product Variant
      </H6>
      <Media />
      <Options>
        <Switch
          type="checkbox"
          onChange={handleChange}
          name="checkbox"
          value={isChecked}
        />
        <Span>This product has options, like size or color</Span>
      </Options>
      {isChecked && (
        <ItemWrapper>
          <Ul>
            {!isEmptyArray(productVariations) &&
              productVariations?.map((variation, index) => (
                <List key={index} variation={variation} />
              ))}
          </Ul>
        </ItemWrapper>
      )}
    </Wrapper>
  );
};

export default CreateProduct;
