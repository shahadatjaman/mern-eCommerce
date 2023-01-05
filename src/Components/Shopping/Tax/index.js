import Form from "../../Shared/Form/Form";
import Input from "../../Shared/Form/Input";
import Select from "../../Shared/Form/Select/Select";
import Option from "../../Shared/Form/Select/Option";
import { Wrapper, H4, P } from "../Styles";
import { InputGroup } from "../../Shared/Form/Styles";
import Button from "../../Shared/Form/Button";

const Tax = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <H4>Estimate Shipping And Tax</H4>
      <P>Enter your destination to get a shipping estimate.</P>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Select label="* Cuntry">
            <Option />
          </Select>
        </InputGroup>

        <InputGroup>
          <Select label={"* Region / State"}>
            <Option />
          </Select>
        </InputGroup>
        <InputGroup>
          <Input label={"* Zip/Postal Code"} />
        </InputGroup>

        <Button type={"submit"} text="GET A QUOTE" />
      </Form>
    </Wrapper>
  );
};

export default Tax;
