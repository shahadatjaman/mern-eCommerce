import { useSelector, useDispatch } from "react-redux";

import Input from "../../../../Components/Shared/Form/Input";
import Option from "../../../../Components/Shared/Form/Select/Option";
import Select from "../../../../Components/Shared/Form/Select/Select";
import { InputArea, Submit } from "../Styles";
import { useForm } from "../../../../hooks/useForm";
import { useSelect } from "../../../../hooks/useSelect";
import { createColor } from "../../../feature/reducer/createProduct";
import {
  colorValidation,
  sizeValidation,
} from "../../../Validation/OptionValidation";

import { Deletion, OptionsAndValues, Selection, SubmitForm } from "./Styles";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Space } from "../../../Shared/Styles";
const init = {
  color: null,
  size: null,
  price: null,
};

const ProductOptions = ({ handleToggleForm }) => {
  const { alt_id } = useSelector((state) => state.createproduct);
  const { state, selecteHandleChange } = useSelect();
  const dispatch = useDispatch();

  // Use Form Hooks
  const { handleChange, formState, isValidForm, handleFocus, handleBlur } =
    useForm({
      init,
      validate: state === "color" ? colorValidation : sizeValidation,
    });
  const { color, size, price } = formState;

  const formSubmit = () => {
    const optopns = {
      product_alt_id: alt_id,
      [state]: color.value || size.value,
      name: state,
    };

    if (isValidForm) {
      dispatch(createColor(optopns));
      handleToggleForm();
    }
  };

  return (
    <InputArea>
      <OptionsAndValues>
        <Selection width={40}>
          <Select
            width={100}
            label="Option Name"
            handleChange={selecteHandleChange}
          >
            <Option option="Select" selected disabled />
            <Option option="Color" value={"color"} />
            <Option option="Size" value={"size"} />
          </Select>
          {/* <Deletion width={10}>
          <RiDeleteBin6Line onClick={handleToggleForm} />
        </Deletion> */}
        </Selection>

        {state && state === "color" && (
          <>
            <Space width="5"></Space>
            <Input
              label="Option Value"
              name="color"
              mb="0"
              placeHolder="HEX"
              value={color.value}
              error={color.error}
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </>
        )}
        <Space width="5"></Space>
        {state && state === "size" && (
          <>
            <Input
              label="Option Value"
              width="60"
              name="size"
              placeHolder="XL,XXL"
              value={size.value}
              error={size.error}
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
            />
          </>
        )}
      </OptionsAndValues>
      {state && state === "size" && (
        <Input
          label="Parsentage of base price"
          mb="0"
          name="price"
          type="number"
          placeHolder="0%"
          value={price.value}
          error={price.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />
      )}

      <SubmitForm>
        <Submit onClick={formSubmit} isValidForm={isValidForm}>
          Done
        </Submit>
      </SubmitForm>
    </InputArea>
  );
};

export default ProductOptions;
