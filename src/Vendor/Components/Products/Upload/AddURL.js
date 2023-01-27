import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../Shared/Styles/";
import Input from "../../../Shared/Form/Input";
import Modal from "../../../Shared/Modal/";
import { Butttons } from "../Styles";
import { createFileOrVariation } from "../../../feature/reducer/Product/productVariation";

const AddFileURL = ({ closeModal, isOpen }) => {
  const [value, setValue] = useState("");

  const { product } = useSelector((state) => state.createproduct);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const value = e.target.value;
    if (value.trim().length >= 0) {
      setValue(value);
    }
  };

  const submitHandler = (e) => {
    dispatch(
      createFileOrVariation({
        pathOne: "v1",
        pathTwo: "productvariation",
        values: {
          product_id: product._id,
          variation_img: value,
        },
        method: "post",
      })
    );
  };

  return (
    <Modal
      width="600"
      title="Add file from URL"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Input
        placeHolder="https://example.com"
        handleChange={changeHandler}
        value={value}
      />
      <Butttons>
        <CustomButton
          isValid={value.length > 0}
          disabled={value.length <= 0}
          width={15}
          height="40"
          onClick={submitHandler}
        >
          Add file
        </CustomButton>
      </Butttons>
    </Modal>
  );
};

export default AddFileURL;
