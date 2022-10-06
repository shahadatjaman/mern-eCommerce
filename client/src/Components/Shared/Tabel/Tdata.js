import { useSelector, useDispatch } from "react-redux";

import { Close, Img, Link, Options, TData, Text } from "./Styles";
import { AiOutlineClose } from "react-icons/ai";
import { remove } from "../../../feature/reducer/wishList";
import ProductQuantity from "../ProductQuantity/";
import { addcartTotal, addCartItems } from "../../../feature/reducer/addToCart";

import { getLocalstorage, indexOfCart, setLocalstorage } from "../../../utils";

const Tdata = ({ cart, TabelName }) => {
  const { lists } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  const removeWishHandler = () => {
    const removedCart = lists.items?.filter(
      (cartItem) => cartItem._id !== cart._id
    );
    dispatch(remove(removedCart));
  };

  const removeCartHandler = () => {
    const cartTotal = getLocalstorage("cartTotal");
    const cartItems = getLocalstorage("cart_Items");

    const cartIndex = indexOfCart(cartItems, cart);

    if (cartIndex > -1) {
      console.log(cartItems, cartIndex);
      cartTotal.total -= cartItems[cartIndex].subtotal;
      cartTotal.totalQty -= cartItems[cartIndex].qty;
    }
    cartItems.splice(cartIndex, 1);
    setLocalstorage("cart_Items", cartItems);
    setLocalstorage("cartTotal", cartTotal);
    dispatch(addCartItems(cartItems));
    dispatch(addcartTotal(cartTotal));
  };

  return (
    <>
      <TData width="150">
        <Link to={`/product/${cart._id}`}>
          {TabelName === "wishlist" && (
            <Img src={cart.thumbnail_image} alt="product" />
          )}
          {TabelName === "cartList" && <Img src={cart.img_url} alt="product" />}
        </Link>
      </TData>

      <TData width={"435"}>
        {TabelName === "cartList" ? (
          <>
            <Link to={`/product/${cart._id}`} textleft={"true"}>
              {cart.title}
            </Link>
            <Text disblock>Color : {cart.color.name}</Text>
            <Text disblock>Size : {cart.size}</Text>
          </>
        ) : (
          <Link to={`/product/${cart._id}`}>{cart.title} </Link>
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
        </TData>
      )}

      {TabelName === "cartList" && (
        <TData>
          <Text>${cart.subtotal}</Text>
        </TData>
      )}

      {TabelName === "wishlist" && (
        <TData>
          <Options to={`/product/${cart._id}`}>SELECT OPTION</Options>
        </TData>
      )}

      <TData>
        {TabelName === "wishlist" && (
          <Close onClick={removeWishHandler}>
            <AiOutlineClose />
          </Close>
        )}

        {TabelName === "cartList" && (
          <Close onClick={removeCartHandler}>
            <AiOutlineClose />
          </Close>
        )}
      </TData>
    </>
  );
};

export default Tdata;
