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
import { useEffect } from "react";
import Modal from "../../../Shared/Modal";

const CreateProduct = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const { handleChange, isChecked } = useCheckbox();
  const [isOpen, setisOpen] = useState(false);

  const { alt_id, color: colorOptions } = useSelector(
    (state) => state.createproduct
  );

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
      {/* <ItemWrapper>
        <Ul>
          {colorOptions?.map((item, index) => (
            <List key={index} item={item} />
          ))}
        </Ul>
      </ItemWrapper>
      {isChecked && toggleForm && (
        <ProductOptions handleToggleForm={handleToggleForm} />
      )} */}
      {isChecked && (
        <AddAnotherOption>
          <H6 onClick={openModal}>
            <Plus>+</Plus>
            Add options
          </H6>
        </AddAnotherOption>
      )}
      <Modal title="Add product option" isOpen={isOpen} closeModal={closeModal}>
        Hello
      </Modal>
    </Wrapper>
  );
};

export default CreateProduct;
