import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, Options, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import { remove } from "../../../../feature/reducer/wishList/";
import ProductQuantity from "../../../Shared/Components/ProductQuantity/";

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
          {TabelName === "wishlist" && (
            <Img src={cart.thumbnail_image} alt="product" />
          )}
          {TabelName === "cartList" && <Img src={cart.img_url} alt="product" />}
        </Link>
      </TData>

      <TData width={"435"}>
        {TabelName === "cartList" ? (
          <>
            <Link to={"/"} textleft={"true"}>
              {cart.title}{" "}
            </Link>
            <Text disblock>Color : {cart.color.name}</Text>
            <Text disblock>Size : {cart.size}</Text>
          </>
        ) : (
          <Link to={"/"}>{cart.title} </Link>
        )}
      </TData>

      {TabelName === "wishlist" && (
        <TData width={"435"}>
          <Text>${cart.pricing.current_price}</Text>
        </TData>
      )}

      {TabelName === "cartList" && (
        <TData width={"435"}>
          <Text>${cart.price}</Text>
        </TData>
      )}

      {TabelName === "cartList" && (
        <TData width={"435"}>
          <ProductQuantity cart={cart} />
          {/* <Text>{cart.qty}</Text> */}
        </TData>
      )}

      {TabelName === "cartList" && (
        <TData>
          <Text>${cart.subtotal}</Text>
        </TData>
      )}

      {TabelName === "wishlist" && (
        <TData>
          <Options to={"/"}>SELECT OPTION</Options>
        </TData>
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
