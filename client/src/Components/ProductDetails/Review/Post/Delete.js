import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeRating } from "../../../../feature/reducer/product/rating";
import Modal from "../../../Shared/Modal";
import { Buttons, DeleteWrapper, H4 } from "./Styles";

const Delete = ({ product_id, setIsOpen, isOpen }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const removeHandler = () => {
    dispatch(removeRating({ product_id, closeModal }));
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <DeleteWrapper>
        <H4>Are you sure do you want to delete?</H4>
        <Buttons>
          <Button
            variant="contained"
            sx={{ borderRadius: 50, width: 100, marginRight: 2 }}
            onClick={removeHandler}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: 50, width: 100 }}
            onClick={closeModal}
          >
            No
          </Button>
        </Buttons>
      </DeleteWrapper>
    </Modal>
  );
};

export default Delete;
