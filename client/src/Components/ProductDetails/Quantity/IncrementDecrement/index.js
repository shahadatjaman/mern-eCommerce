import { useState, useEffect } from "react";

import { Decrement, Increment, Input, Wrapper } from "./Styles";

const Quantity = ({ cb }) => {
  const [value, setValue] = useState(1);

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

  return (
    <Wrapper>
      <Decrement onClick={decrementHandler}>-</Decrement>
      <Input type="number" onChange={changeHandler} value={value} />
      <Increment onClick={incrementHandler}>+</Increment>
    </Wrapper>
  );
};

export default Quantity;
