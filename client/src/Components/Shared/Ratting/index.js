import { Ratting } from "../Product/Styles";
import { FaRegStar } from "react-icons/fa";
import { Span, Wrapper } from "./Styles";

const ProductRatting = () => {
  return (
    <Ratting>
      <Wrapper>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <Span>(0)</Span>
      </Wrapper>
    </Ratting>
  );
};

export default ProductRatting;
