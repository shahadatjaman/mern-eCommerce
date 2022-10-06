import Form from "../../Shared/Form/Form";
import Input from "../../Shared/Form/Input";
import Button from "../../Shared/Form/Button";
import { H4, P, TitleWrap, Wrapper } from "../Styles";

const Coupon = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <TitleWrap>
        <H4>Use Coupon Code</H4>
      </TitleWrap>
      <P>Enter your coupon code if you have one.</P>

      <Form onSubmit={handleSubmit}>
        <Input />
        <Button type={`submit`} text="APPLY COUPON" />
      </Form>
    </Wrapper>
  );
};

export default Coupon;
