import Toolpit from "../Tooltip";
import { InputField, InputGroup, Label, P } from "./Styles";

/**
 *
 * @param {string} param0
 */

const Input = ({
  error,
  label,
  name,
  type,
  value,
  onChange,
  placeHolder,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <InputGroup>
        <Label>{label}</Label>
        <InputField
          name={name}
          type={type}
          value={value}
          placeholder={placeHolder}
          error={error}
          invalid={error}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <P>{error}</P>
      </InputGroup>
    </>
  );
};

export default Input;
