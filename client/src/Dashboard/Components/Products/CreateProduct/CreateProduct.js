import React from "react";
import Form from "../../../../Components/Shared/Form/Form";
import Media from "../Upload/Media";
import {
  AddAnotherOption,
  CheckBox,
  H6,
  InputArea,
  ItemWrapper,
  Options,
  Plus,
  Wrapper,
} from "../Styles";
import { useCheckbox } from "../../../../hooks/useCheckbox";
import ProductOptions from "../Options/ProductOptions";
import { useSelector } from "react-redux";
import { H5, Li, Ul } from "../../../Shared/Styles";
import List from "./List";
import { useCreateElement } from "../../../../hooks/useCreateElement";

const CreateProduct = () => {
  const { handleChange, isChecked } = useCheckbox();

  // Add Options Hook
  const { array, addElement } = useCreateElement();

  const { alt_id, color: colorOptions } = useSelector(
    (state) => state.createproduct
  );

  return (
    <Wrapper>
      <H6>
        <Plus>+</Plus> Create Product Variant
      </H6>
      <Media />
      <Options>
        <CheckBox
          type="checkbox"
          onChange={handleChange}
          name="checkbox"
          value={isChecked}
        />
        This product has options, like size or color
      </Options>
      <ItemWrapper>
        <Ul>
          {colorOptions?.map((item, index) => (
            <List key={index} item={item} />
          ))}
        </Ul>
      </ItemWrapper>
      {isChecked &&
        array?.map((item, index) => (
          <ProductOptions fieldId={item} key={index} />
        ))}
      {isChecked && (
        <AddAnotherOption>
          <H6 onClick={addElement}>
            <Plus>+</Plus>
            Add another options
          </H6>
        </AddAnotherOption>
      )}
    </Wrapper>
  );
};

export default CreateProduct;
