import { InputField, InputGroup, Label, P } from "./Styles";

/**
 *
 * @param {string} param0
 */

const Input = ({
  error,
  label,
  name,
  height,
  type,
  value,
  handleChange,
  placeHolder,
  handleFocus,
  handleBlur,
  autoFocus,
}) => {
  return (
    <>
      <InputGroup>
        <Label>{label}</Label>
        <InputField
          name={name}
          autoFocus={autoFocus}
          height={height}
          type={type}
          value={value}
          placeholder={placeHolder}
          error={error}
          invalid={error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <P>{error}</P>
      </InputGroup>
    </>
  );
};

export default Input;
