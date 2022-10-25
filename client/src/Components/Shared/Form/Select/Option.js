import { OptionElement } from "./Styles";

const Option = ({ option, disabled, selected, value }) => {
  return (
    <OptionElement disabled={disabled} value={value} selected={selected}>
      {option}
    </OptionElement>
  );
};

export default Option;
