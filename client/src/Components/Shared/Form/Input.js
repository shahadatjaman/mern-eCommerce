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
}) => {
  return (
    <>
      <InputGroup>
        <Name>{label}</Name>
        <InputWrapper width={width}>
          <InputField
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
          {currency && (
            <Label>
              <Span>৳</Span>
            </Label>
          )}
        </InputWrapper>
        {error && <P>{error}</P>}
      </InputGroup>
    </>
  );
};

export default Input;
