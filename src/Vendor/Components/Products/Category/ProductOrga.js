// <=== Hooks ====>
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";

// <====  Reducer ====>
import {
  fetchAllCategories,
  addProductOrganizeState,
  getSubCategories,
} from "../../../feature/reducer/Product/createProduct";

// <===  Components ===>
import Input from "../../../Shared/Form/Input";
import Option from "../../../Shared/Form/Select/Option";
import Select from "../../../Shared/Form/Select/Select";

// <====  Styled Componetns ====>
import { Cart, H5 } from "../../../Shared/Styles/";
import Form from "../../../Shared/Form/Form";
import Tag from "../Tag";
import { Col, Row } from "react-bootstrap";

const initial = {
  status: "active",
  category: "",
  product_type: "",
  sub_category: "",
};

const ProductOrga = () => {
  const { allCategories, subCategories } = useSelector(
    (state) => state.createproduct
  );

  const { productInit } = useSelector((state) => state.createproduct);

  const { formState, handleChange, handleFocus, handleBlur } = useForm({
    init: productInit.optionalValue,
    validate: true,
  });

  const { status, category, product_type, sub_category } = formState;
  const dispatch = useDispatch();

  // get parent categories
  useEffect(() => {
    dispatch(
      fetchAllCategories({
        pathOne: "v1",
        pathTwo: "getcategories",
        method: "get",
      })
    );
  }, [dispatch]);

  // Get sub categorie
  useEffect(() => {
    if (category.value) {
      dispatch(
        getSubCategories({
          pathOne: "v1",
          pathTwo: "get_sub_category",
          _id: category.value,
          method: "get",
        })
      );
    }
  }, [dispatch, category]);

  useEffect(() => {
    console.log(status);
    dispatch(
      addProductOrganizeState({
        product_status: status.value ? status.value : "deactive",
        category_id: category.value,
        sub_category_id: sub_category.value,
        product_type: product_type.value,
      })
    );
  }, [status, category, product_type, dispatch, sub_category]);

  return (
    <Form>
      <Row>
        <Col className="col-md-12 col-12">
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
              <Option option="Draft" value={"deactive"} />
            </Select>
          </Cart>
        </Col>
        <Col className="col-md-12 col-12">
          <Cart>
            <H5>Product Organizations</H5>
            {/* Product categories */}
            <Select
              mb="1"
              label="Parent Category"
              name="category"
              handleChange={handleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              value={category.value}
            >
              {allCategories &&
                allCategories.map((cat, index) => (
                  <Option
                    key={index}
                    option={cat.category_name}
                    value={cat._id}
                  />
                ))}
            </Select>
            {/* Product sub categories */}
            {subCategories && subCategories.length !== 0 && (
              <Select
                mb="1"
                label="Sub Category"
                name="sub_category"
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                value={sub_category._id}
              >
                {subCategories &&
                  subCategories.map((cat, index) => (
                    <Option
                      key={index}
                      option={cat.sub_category_name}
                      value={cat._id}
                    />
                  ))}
              </Select>
            )}

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
        </Col>
      </Row>
    </Form>
  );
};

export default ProductOrga;
