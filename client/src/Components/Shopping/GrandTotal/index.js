import { useSelector } from "react-redux";
import Button from "../../Shared/Form/Button";

import { H4, TitleWrap, Wrapper } from "../Styles";
import { GrandTotalTitle, H5, Price, Span } from "./Styles";

const GrandTotal = () => {
  const { total } = useSelector((state) => state.cart);
  console.log(total);
  return (
    total && (
      <Wrapper>
        <TitleWrap>
          <H4>Cart Total</H4>
        </TitleWrap>
        <H5>
          Total Products <Span>${total.total}</Span>
        </H5>
        <GrandTotalTitle>
          Grand Total <Price>${total.total}</Price>
        </GrandTotalTitle>
        <Button text="Proceed to Checkout" />
      </Wrapper>
    )
  );
};

export default GrandTotal;
