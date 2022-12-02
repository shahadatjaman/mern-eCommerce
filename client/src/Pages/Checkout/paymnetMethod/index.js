import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { useEffect } from "react";
import { useCheckbox } from "../../../hooks/useCheckbox";

const PaymnetMethod = ({ setDelivery }) => {
  const { isChecked, handleChange } = useCheckbox();

  useEffect(() => {
    if (!isChecked) {
      setDelivery(false);
    } else {
      setDelivery(true);
    }
  }, [setDelivery, isChecked]);
  return (
    <FormGroup>
      <FormControlLabel
        onChange={handleChange}
        control={<Switch />}
        label="Cash on delivery"
      />
    </FormGroup>
  );
};

export default PaymnetMethod;
