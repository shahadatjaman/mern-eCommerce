import {
  InputField,
  InputGroup,
  InputWrapper,
  Label,
  Name,
  P,
  Span,
} from "./Styles";

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
  currency = false,
  parsent = false,
  disabled = false,
}) => {
  return (
    <>
      <InputGroup mb={mb} width={width}>
        <Name>{label}</Name>
        <InputWrapper>
          <InputField
            mb={mb}
            name={name}
            autoFocus={autoFocus}
            height={height}
            type={type}
            disabled={disabled}
            value={value}
            placeholder={placeHolder}
            error={error}
            invalid={error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {currency && (
            <Label disabled={disabled}>
              <Span>৳</Span>
            </Label>
          )}
          {parsent && (
            <Label disabled={disabled}>
              <Span>%</Span>
            </Label>
          )}
        </InputWrapper>
        {error && <P>{error}</P>}
      </InputGroup>
    </>
  );
};

export default Input;
