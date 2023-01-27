import { FormWraaper } from "./Styles";

const Form = ({ children, onSubmit }) => {
  return <FormWraaper onSubmit={onSubmit}>{children}</FormWraaper>;
};

export default Form;
