import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomButton } from "../../../Shared/Styles";
import Input from "../../../../Components/Shared/Form/Input";
import Modal from "../../../Shared/Modal";
import { Butttons } from "../Styles";
import { createFileOrOption } from "../../../feature/reducer/createProduct";

const AddFileURL = ({ closeModal, isOpen }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const value = e.target.value;
    if (value.trim().length >= 0) {
      setValue(value);
    }
  };

  const submitHandler = (e) => {
    dispatch(
      createFileOrOption({
        product_id: "6335e41f3990c94f56c3ab4b",
        variation_img: value,
      })
    );
  };

  return (
    <Modal title="Add file from URL" isOpen={isOpen} closeModal={closeModal}>
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
