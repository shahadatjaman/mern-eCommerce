import { CartPlusMinus, Button, Count } from "./Styles";

const Quantity = () => {
  return (
    <CartPlusMinus>
      <Button decrement>-</Button>
      <Count>0</Count>
      <Button increment>+</Button>
    </CartPlusMinus>
  );
};

export default Quantity;
