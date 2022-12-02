import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAddToCart } from "../../../../hooks/useAddToCart";

import { Decrement, Increment, Input, Wrapper } from "./Styles";

const Quantity = ({ cb }) => {
  const [value, setValue] = useState(1);

  const params = useParams();
  const id = params.id;

  const { cart } = useAddToCart();

  const changeHandler = (e) => {
    const val = e.target.value;
    if (val.trim() >= 1) {
      setValue(val);
    }
  };

  const incrementHandler = () => {
    setValue((prev) => Number(prev) + 1);
  };

  const decrementHandler = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };

  useEffect(() => {
    cb(value);
  }, [value, cb]);

  useEffect(() => {
    if (id) {
      cart({ _id: id });
    }
  }, [cart, id]);

  return (
    <Wrapper>
      <Decrement onClick={decrementHandler}>-</Decrement>
      <Input type="number" onChange={changeHandler} value={value} />
      <Increment onClick={incrementHandler}>+</Increment>
    </Wrapper>
  );
};

export default Quantity;
