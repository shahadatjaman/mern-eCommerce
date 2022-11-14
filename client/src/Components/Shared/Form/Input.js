import {
  InputField,
  InputGroup,
  InputWrapper,
  Label,
  Name,
  P,
  Searched,
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
  radius,
  currency = false,
  parsent = false,
  disabled = false,
  search = false,
}) => {
  return (
    <>
      <InputGroup mb={mb} width={width}>
        <Name>{label}</Name>
        <InputWrapper>
          {search && (
            <Searched>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Searched>
          )}

          <InputField
            mb={mb}
            name={name}
            autoFocus={autoFocus}
            height={height}
            radius={radius}
            search={search}
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
