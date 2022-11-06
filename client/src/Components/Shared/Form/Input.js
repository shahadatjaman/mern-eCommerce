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
  width,
  mb = 1,
}) => {
  return (
    <>
      <InputGroup>
        <Label>{label}</Label>
        <InputField
          width={width}
          mb={mb}
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
        {error && <P>{error}</P>}
      </InputGroup>
    </>
  );
};

export default Input;
