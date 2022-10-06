import { InputField, Label } from "./Styles";

const Input = ({ label, name, value, onChange, error }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputField name={name} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
