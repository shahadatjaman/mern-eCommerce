import React from "react";
import { useState } from "react";
import Modal from "../../../Shared/Modal";
import { H5, Li } from "../../../Shared/Styles";
import ProductOptions from "../Options/ProductOptions";
import { Name, Value } from "../Styles";
import {
  ActionWrapper,
  Attribute,
  Del,
  Edit,
  ImgWrapper,
  Img,
  AddAtribute,
} from "./Styles";

const List = ({ variation }) => {
  const [isOpen, setisOpen] = useState(false);
  const openModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };
  return (
    <Li>
      <Attribute>
        <ImgWrapper>
          <Img src={variation.variation_img} />
        </ImgWrapper>
        <AddAtribute onClick={openModal}>+ Add attribute</AddAtribute>
      </Attribute>

      <ActionWrapper>
        <Edit>Edit</Edit>
        <Del>Delete</Del>
      </ActionWrapper>

      <Modal
        width="800"
        title="Add option"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <ProductOptions handleToggleForm={openModal} />
      </Modal>
    </Li>
  );
};

export default List;
