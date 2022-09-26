import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, Options, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import { remove } from "../../feature/reducer/wishList";

const Tdata = ({ cart }) => {
  const { lists } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  const removeCart = () => {
    const removedCart = lists?.filter((cartItem) => cartItem._id !== cart._id);
    dispatch(remove(removedCart));
  };

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
        <Close onClick={removeCart}>
          <AiOutlineClose />
        </Close>
      </TData>
    </>
  );
};

export default Tdata;
