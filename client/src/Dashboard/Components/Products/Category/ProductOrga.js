// <=== Hooks ====>
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";

// <====  Reducer ====>
import {
  fetchAllCategories,
  addProductOrganizeState,
} from "../../../feature/reducer/createProduct";

// <==== Utils ====>
import { productOrganizationValidation } from "../../../Validation/productOrganizeVali";

// <===  Components ===>
import Input from "../../../../Components/Shared/Form/Input";
import Option from "../../../../Components/Shared/Form/Select/Option";
import Select from "../../../../Components/Shared/Form/Select/Select";

// <====  Styled Componetns ====>
import { Cart, H5 } from "../../../Shared/Styles";
import Form from "../../../../Components/Shared/Form/Form";
import Tag from "../Tag";

const initial = {
  status: "active",
  category: "",
  product_type: "",
};

const ProductOrga = () => {
  const { allCategories, productFormState } = useSelector(
    (state) => state.createproduct
  );

  const { formState, handleChange, handleFocus, handleBlur } = useForm({
    init: initial,
    validate: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const { status, category, product_type } = formState;

  useEffect(() => {
    dispatch(
      addProductOrganizeState({
        product_status: status.value,
        category_id: category.value,
        product_type: product_type.value,
      })
    );
  }, [status, category, product_type, dispatch]);

  return (
    <Form>
      <Cart>
        <H5>Product status</H5>
        <Select
          name="status"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={status.value}
        >
          <Option option="Active" value={"active"} />
          <Option option="Draft" value={"draft"} />
        </Select>
      </Cart>
      <Cart>
        <H5>Product Organizations</H5>
        <Select
          mb="1"
          label="Product Category"
          name="category"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={category._id}
        >
          {allCategories &&
            allCategories.map((cat, index) => (
              <Option key={index} option={cat.category_name} value={cat._id} />
            ))}
        </Select>
        <Input
          name="product_type"
          label="Product Type"
          placeHolder="e.g., T-Shirt"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={product_type.value}
        />
        <Tag />
      </Cart>
    </Form>
  );
};

export default ProductOrga;
