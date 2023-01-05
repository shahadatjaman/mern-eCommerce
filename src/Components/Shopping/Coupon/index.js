import Form from "../../Shared/Form/Form";
import Input from "../../Shared/Form/Input";
import Button from "../../Shared/Form/Button";
import { H4, P, TitleWrap, Wrapper } from "../Styles";
import { useColor } from "../../../utils";

const Coupon = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { primary, gray } = useColor();
  return (
    <Wrapper>
      <TitleWrap>
        <H4>Use Coupon Code</H4>
      </TitleWrap>
      <P>Enter your coupon code if you have one.</P>

      <Form onSubmit={handleSubmit}>
        <Input type="text" />
        <Button
          activeColor={gray}
          hoverColor={primary}
          type="submit"
          text="Register"
          isDisabled={false}
          alignMent="center"
          radius="50"
        />
      </Form>
    </Wrapper>
  );
};

export default Coupon;
