import { useSelector } from "react-redux";
import { useColor } from "../../../utils";
import Button from "../../Shared/Form/Button";

import { Cuntinue, H4, TitleWrap, Wrapper } from "../Styles";
import { GrandTotalTitle, H5, Price, Span } from "./Styles";

const GrandTotal = () => {
  const { total } = useSelector((state) => state.cart);

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
        <Cuntinue to={`/billing`}>PROCEED TO CHECKOUT</Cuntinue>
      </Wrapper>
    )
  );
};

export default GrandTotal;
