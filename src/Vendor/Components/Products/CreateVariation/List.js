import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Modal from "../../../Shared/Modal";
import { Li } from "../../../Shared/Styles";
import ProductOptions from "../Options/ProductOptions";

import {
  ActionWrapper,
  Attribute,
  Del,
  Edit,
  ImgWrapper,
  Img,
  AddAtribute,
} from "./Styles";
import {
  removeFile,
  removeVariation,
} from "../../../feature/reducer/Product/productVariation";
import { useDispatch, useSelector } from "react-redux";

const List = ({ variation }) => {
  const [isOpen, setisOpen] = useState(false);
  const { productVariations } = useSelector((state) => state.variation);

  const dispatch = useDispatch();

  const openModal = () => {
    setisOpen(true);
  };
  const closeModal = () => {
    setisOpen(false);
  };

  const removeHandler = (id) => {
    const removed = productVariations.filter(
      (item) => item._id !== variation._id
    );

    // REMOVE VARIATION FROM LOCAL GLOBAL STATE
    dispatch(removeFile(removed));

    // REMOVE VARIATION FROM CLOUD
    dispatch(
      removeVariation({
        pathOne: "v1",
        pathTwo: "removevariation",
        values: { variation_id: variation._id },
        method: "post",
      })
    );
  };

  return (
    <>
      <Li>
        <Attribute>
          <ImgWrapper>
            <Img src={variation.variation_img} />
          </ImgWrapper>
          <AddAtribute onClick={openModal}>+ Add attribute</AddAtribute>
        </Attribute>

        <ActionWrapper>
          <Edit onClick={openModal}>
            <EditIcon />
          </Edit>
          <Del onClick={removeHandler}>
            <ClearIcon />
          </Del>
        </ActionWrapper>

        <Modal
          width="800"
          title="Add option"
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <ProductOptions
            closeModal={closeModal}
            handleToggleForm={openModal}
            variation={variation}
            isOpen={isOpen}
          />
        </Modal>
      </Li>
    </>
  );
};

export default List;
