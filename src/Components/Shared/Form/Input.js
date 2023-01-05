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
  label = false,
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
  weight = false,
  searchWidth,
  bg = false,
}) => {
  return (
    <>
      <InputGroup mb={mb} width={width}>
        {label && <Name>{label}</Name>}

        <InputWrapper>
          {search && (
            <Searched searchWidth={searchWidth} bg={bg}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Searched>
          )}

          <InputField
            mb={mb}
            name={name}
            autoFocus={autoFocus}
            height={height}
            radius={radius}
            bg={bg}
            search={search.toString()}
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
          {weight && (
            <Label disabled={disabled}>
              <Span>kg</Span>
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
