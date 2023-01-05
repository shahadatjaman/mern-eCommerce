import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, TData } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { callApi } from "../../../utils";
import { useWish } from "../../../hooks/useWish";
import { addNewWish } from "../../../feature/reducer/addWish";

const Tdata = ({ product_id }) => {
  const [product, setProduct] = useState(null);
  const [variation, setVariation] = useState(null);

  const { state, removeWish } = useWish();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        _id: product_id,
        method: "get",
      });
      if (res.product) {
        setProduct(res.product);
      }

      if (res.variations) {
        setVariation(res.variations[0]);
      }
    })();
  }, [product_id]);

  const removeHandler = () => {
    removeWish(product_id);
  };

  useEffect(() => {
    if (state) {
      dispatch(addNewWish({ wish: state.length === 0 ? null : state }));
    }
  }, [dispatch, state]);

  return (
    <>
      <TData width="150">
        <Link to={`/product/`}>
          <Img src={variation?.variation_img} alt="product" />
        </Link>
      </TData>

      <TData width={"435"}>
        <Link to={`/product/`} textleft={"true"}>
          {product?.name}
        </Link>
      </TData>

      <TData width={"435"}>$ {product?.price.$numberDecimal}</TData>

      <TData>
        <Close onClick={removeHandler}>
          <AiOutlineClose />
        </Close>
      </TData>
    </>
  );
};

export default Tdata;
