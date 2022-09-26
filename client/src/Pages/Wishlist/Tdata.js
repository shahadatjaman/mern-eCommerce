import { Close, Img, Link, Options, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";

const Tdata = ({ cart }) => {
  return (
    <>
      <TData width="150">
        <Link>
          <Img src={cart.imageOne} alt="product" />
        </Link>
      </TData>
      <TData width={"435"}>
        <Link to={"/"}>{cart.title} </Link>
      </TData>
      <TData width={"435"}>
        <Text line_through>${cart.old}</Text>
        <Text>${cart.price}</Text>
      </TData>
      <TData>
        <Options to={"/"}>SELECT OPTION</Options>
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
