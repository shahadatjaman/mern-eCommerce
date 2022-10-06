import { FormWraaper } from "./Styles";

function Form({ children, onSubmit }) {
  return <FormWraaper onSubmit={onSubmit}>{children}</FormWraaper>;
}

export default Form;
