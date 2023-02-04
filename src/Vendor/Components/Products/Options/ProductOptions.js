import { useDispatch, useSelector } from "react-redux";

import LoadingButton from "@mui/lab/LoadingButton";

import { OptionsAndValues, SubmitForm, Wrapper } from "./Styles";
import SendIcon from "@mui/icons-material/Send";
import { Space } from "../../../Shared/Styles/";
import { names, optionsTypes, sizes } from "./data";
import MuiSelect from "../../../Shared/Form/mui/";
import Input from "../../../Shared/MuiForm/Input";
import { useEffect, useState } from "react";
import { createVariationOption } from "../../../feature/reducer/Product/productVariation";
import Variations from "./Variations";
import { useIsExist } from "../../../hooks/useIsExist";

const init = {
  variation_type: "",
  value: "",
  price: 0 * 1,
};

const ProductOptions = ({ isOpen, variation }) => {
  const [isValid, setIsValid] = useState(false);

  const [values, setValues] = useState({ ...init });

  const { options } = useSelector((state) => state.variation);

  const { isAdded, isExist } = useIsExist({ values: options });

  const { isLoadOption } = useSelector((state) => state.variation);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;

    if (val.trim().length > -1) {
      setValues({
        ...values,
        [e.target.name]: val,
      });
    }
  };

  useEffect(() => {
    if (values.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values]);

  const submitHandler = () => {
    dispatch(
      createVariationOption({
        pathOne: "v1",
        pathTwo: "variationoption",
        values: {
          product_id: variation.product_id,
          product_variations_id: variation._id,
          ...values,
        },
        method: "post",
      })
    );
    setValues(init);
  };

  const { variation_type, value, price } = values;

  useEffect(() => {
    isExist(values.variation_type);
  }, [values, isExist]);

  console.log(variation_type);
  return (
    <Wrapper>
      <OptionsAndValues>
        <MuiSelect
          handleChange={handleChange}
          names={optionsTypes}
          name="variation_type"
          width={200}
          value={variation_type}
          label={"Type"}
          placeHolder={"Select an option"}
        />

        {variation_type && variation_type === "Color" && (
          <>
            <Space width="5"></Space>

            <MuiSelect
              label={"Value"}
              name="value"
              names={names}
              width={500}
              handleChange={handleChange}
              value={value}
              placeHolder={"Select an Color"}
            />
          </>
        )}

        {variation_type && variation_type === "Size" && (
          <>
            <Space width="5"></Space>
            <MuiSelect
              label={"Value"}
              names={sizes}
              name="value"
              width={250}
              handleChange={handleChange}
              value={value}
              placeHolder={"Select Size"}
            />
            <Input
              name="price"
              label="USD"
              type="number"
              value={price}
              handleChange={handleChange}
            />
          </>
        )}
      </OptionsAndValues>

      <SubmitForm>
        {!isLoadOption ? (
          <LoadingButton
            size="small"
            variant="contained"
            onClick={submitHandler}
            disabled={!isValid}
          >
            Add
          </LoadingButton>
        ) : (
          <LoadingButton
            size="small"
            endIcon={<SendIcon />}
            loadingPosition="end"
            loading={true}
            variant="contained"
          >
            Add
          </LoadingButton>
        )}
      </SubmitForm>
      <Variations variation_id={variation._id} isOpen={isOpen} />
    </Wrapper>
  );
};

export default ProductOptions;
