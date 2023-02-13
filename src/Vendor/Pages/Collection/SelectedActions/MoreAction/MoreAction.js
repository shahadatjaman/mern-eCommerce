import { Box, Typography } from "@mui/material";
import React from "react";
import { Li, Ul } from "./Styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DvrIcon from "@mui/icons-material/Dvr";
import { useDispatch, useSelector } from "react-redux";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  addSelelectedPorducts,
  deleteProducts,
  isAllProductChecked,
} from "../../../../feature/reducer/Product/products";
import { useNavigate } from "react-router-dom";
import { addModalName } from "../../../../feature/reducer/Product/UpdateProdcutsInventory";
const Action = ({ handleClose }) => {
  const { selectedProducts } = useSelector((state) => state.getProducts);

  const { modalName, isOpen } = useSelector((state) => state.updateProduct);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(
      deleteProducts({
        pathOne: "v3",
        pathTwo: "delete_products",
        values: { products: selectedProducts },
        method: "post",
      })
    );

    dispatch(addSelelectedPorducts(null));
    dispatch(isAllProductChecked(false));
    navigate("/dashboard/collections");
    handleClose();
  };

  const openModal = (name) => {
    dispatch(addModalName(name));
    handleClose();
  };

  return (
    <Box my={2}>
      <Ul>
        <Li onClick={deleteHandler}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <DeleteOutlineIcon sx={{ marginRight: 2 }} />
            <Typography variant="h6" fontWeight={400}>
              Delete
            </Typography>
          </Box>
        </Li>
        <Li onClick={() => openModal("update_price")}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <AttachMoneyIcon sx={{ marginRight: 2 }} />
            <Typography variant="h6" fontWeight={400}>
              Change Price
            </Typography>
          </Box>
        </Li>
        <Li>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <DvrIcon sx={{ marginRight: 2 }} />
            <Typography variant="h6" fontWeight={400}>
              Change cost of goods
            </Typography>
          </Box>
        </Li>
      </Ul>
    </Box>
  );
};

export default Action;
