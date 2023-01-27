import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BasicPopover from "../Poper";
import Action from "./MoreAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../../../Shared/Modal";
import UpdatePrice from "./UpdatePrice";
import {
  addModalName,
  clsoeModal,
} from "../../../../feature/reducer/Product/UpdateProdcutsInventory";
const MoreAction = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { modalName, isOpen } = useSelector((state) => state.updateProduct);

  const { selectedProducts } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ marginLeft: 2 }}>
      <Box
        onClick={handleClick}
        py={0.9}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          border: "1px solid #1976d2",
          borderRadius: 50,
          width: 170,
          cursor: "pointer",
        }}
      >
        <Typography color={"#1976d2"}>More Actions</Typography>
        <KeyboardArrowDownIcon sx={{ color: "#1976d2" }} />
      </Box>
      <BasicPopover
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <Action handleClose={handleClose} />
      </BasicPopover>

      {/* Update prodcut inventory */}
      {modalName === "update_price" && (
        <Modal
          title={`Change the price of ${selectedProducts.length} product`}
          width={700}
          isOpen={isOpen}
          closeModal={() => dispatch(clsoeModal())}
        >
          <UpdatePrice />
        </Modal>
      )}
    </Box>
  );
};

export default MoreAction;
