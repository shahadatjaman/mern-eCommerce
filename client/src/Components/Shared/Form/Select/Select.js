import { SelectInput } from "./Styles";
import { InputGroup, Label, P } from "../Styles";
const Select = ({
  children,
  label,
  name,
  error,
  value,
  handleChange,
  handleFocus,
  handleBlur,
  defaultValue,
  width,
}) => {
  return (
    <>
      <InputGroup width={width}>
        <Label>{label}</Label>
        <SelectInput
          name={name}
          value={value}
          defaultValue={defaultValue}
          error={error}
          invalid={error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {children}
        </SelectInput>
        <P>{error}</P>
      </InputGroup>
    </>
  );
};

export default Select;
