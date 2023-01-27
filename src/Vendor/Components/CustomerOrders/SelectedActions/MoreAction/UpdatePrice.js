import React, { useState } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import OpenSelect from "../../../../Shared/MuiSelect/index";
import InputAdornments from "../../../../Shared/MuiSelect/Input";
import { changePrices } from "./data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProductPrice,
  clsoeModal,
} from "../../../../feature/reducer/Product/UpdateProdcutsInventory";
import { LoadingButton } from "@mui/lab";
import LoadingButtons from "../../../../Shared/Loading/Button";

const init = {
  type: "none",
  price: 0,
};

const UpdatePrice = () => {
  const [values, setValues] = useState(init);

  const { selectedProducts } = useSelector((state) => state.getProducts);
  const { loading } = useSelector((state) => state.updateProduct);

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(clsoeModal());
    setValues(init);
  };

  const handleChange = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "price" ? Number(e.target.value) : e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      changeProductPrice({
        pathOne: "v3",
        pathTwo: "products_price_update",
        method: "post",
        values: {
          products_id: selectedProducts,
          amount_type: values.type,
          price: values.price,
        },
      })
    );
  };

  return (
    <Grid component={"form"} onSubmit={submitHandler} container spacing={2}>
      <Grid item xl={6} sxx={6}>
        <Box>
          <OpenSelect
            name="type"
            values={changePrices}
            handleChange={handleChange}
            value={values.type}
          />
        </Box>
      </Grid>
      <Grid item xl={6} sxx={6}>
        <InputAdornments
          name={"price"}
          type={"number"}
          value={values.price}
          handleChange={handleChange}
          isDisabled={values.type === "none" ? true : false}
        />
      </Grid>
      <Grid item xl={12}>
        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <Button
            onClick={closeModalHandler}
            sx={{ borderRadius: 50, marginRight: 2 }}
            variant="outlined"
          >
            Cancel
          </Button>

          <LoadingButtons
            type={"submit"}
            isDisabled={values.price ? false : true}
            loading={loading}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UpdatePrice;
