import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import Quantity from "../Quantity";

const Tdata = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TData width="150">
        <Link to={`/product/`}>
          <Img
            src={
              "https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet.png"
            }
            alt="product"
          />
        </Link>
      </TData>

      <TData width={"435"}>
        <Link to={`/product/`} textleft={"true"}>
          title
        </Link>
      </TData>

      <TData width={"435"}>
        <Quantity />
      </TData>

      <TData>
        <Close>
          <AiOutlineClose />
        </Close>
      </TData>
    </>
  );
};

export default Tdata;
