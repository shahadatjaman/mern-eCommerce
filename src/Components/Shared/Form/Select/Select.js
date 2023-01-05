import { SelectInput } from "./Styles";
import { InputGroup, Name, P } from "../Styles";
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
  mb,
}) => {
  return (
    <>
      <InputGroup mb={mb} width={width}>
        <Name>{label}</Name>
        <SelectInput
          name={name}
          value={value}
          defaultValue={defaultValue}
          isError={error}
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
