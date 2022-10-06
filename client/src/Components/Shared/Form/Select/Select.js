import { SelectInput } from "./Styles";
import { Label } from "../Styles";
const Select = ({ children, label }) => {
  return (
    <>
      <Label>{label}</Label>
      <SelectInput>{children}</SelectInput>{" "}
    </>
  );
};

export default Select;
