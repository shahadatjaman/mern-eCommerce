import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, Options, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import { remove } from "../../../../feature/reducer/wishList/";

const Tdata = ({ cart, TabelName }) => {
  const { lists } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  const removeCart = () => {
    const removedCart = lists.items?.filter(
      (cartItem) => cartItem._id !== cart._id
    );
    dispatch(remove(removedCart));
  };

  return (
    <>
      <TData width="150">
        <Link>
          <Img src={cart.thumbnail_image} alt="product" />
        </Link>
      </TData>
      <TData width={"435"}>
        <Link to={"/"}>{cart.title} </Link>
      </TData>
      <TData width={"435"}>
        <Text line_through>${cart.pricing.old_price}</Text>
        <Text>${cart.pricing.current_price}</Text>
      </TData>
      {TabelName === "wishlist" ? (
        <TData>
          <Options to={"/"}>SELECT OPTION</Options>
        </TData>
      ) : (
        "QUANTITY"
      )}

      <TData>
        <Close onClick={removeCart}>
          <AiOutlineClose />
        </Close>
      </TData>
    </>
  );
};

export default Tdata;
