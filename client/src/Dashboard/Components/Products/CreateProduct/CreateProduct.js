import React from "react";
import { useDispatch } from "react-redux";
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
import { Ul } from "../../../Shared/Styles";
import List from "./List";
import { useState } from "react";
import Modal from "../../../Shared/Modal";
import { Switch } from "pretty-checkbox-react";
import { Span } from "./Styles";
import { isEmptyArray } from "../../../../utils";

const CreateProduct = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const { handleChange, isChecked } = useCheckbox();
  const [isOpen, setisOpen] = useState(false);

  const { productVariations, loading } = useSelector(
    (state) => state.variation
  );

  // const { alt_id, color: colorOptions } = useSelector(
  //   (state) => state.createproduct
  // );

  const handleToggleForm = () => {
    if (toggleForm) {
      setToggleForm(false);
    } else {
      setToggleForm(true);
    }
  };

  const openModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };

  console.log(productVariations);
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
      <ItemWrapper>
        <Ul>
          {!isEmptyArray(productVariations) &&
            productVariations?.map((variation, index) => (
              <List key={index} variation={variation} />
            ))}
        </Ul>
      </ItemWrapper>

      {isChecked && (
        <AddAnotherOption>
          <H6 onClick={openModal}>
            <Plus>+</Plus>
            Add options
          </H6>
        </AddAnotherOption>
      )}
      <Modal
        width="800"
        title="Add product option"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <ProductOptions handleToggleForm={handleToggleForm} />
      </Modal>
    </Wrapper>
  );
};

export default CreateProduct;
