import { useEffect, useState } from "react";
import {
  deepClone,
  isEmptyObject,
  mapStateToKeys,
  mapValuesToState,
} from "../utils";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object|boolean)} validate
 *
 * create forms using this useForm hook easily
 * @param {Param} param
 * @returns formState others
 */
export const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(deepClone(init)));

  // console.log(isValid);
  const handleChange = (e) => {
    const { name: key, value, type } = e.target;

    const oldState = deepClone(state);

    if (type === "checkbox") {
      oldState[key].value = "checked";
    } else {
      oldState[key].value = value;
    }

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);

    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;

    const { errors } = getErrors();

    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { hasError, errors, values } = getErrors();

    cb({ hasError, errors, values });
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = () => {
    let hasError = null,
      errors = null;
    const values = mapStateToKeys(state, "value");
    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const { errors: errorsFromCB } = validate(values);
      hasError = !isEmptyObject(errorsFromCB);

      errors = errorsFromCB;
    } else {
      throw new Error("validate must be a function or boolean");
    }

    return {
      hasError,
      errors,
      values,
    };
  };

  // Check validities for all input fields
  const oldState = deepClone(state);
  const values = mapStateToKeys(oldState, "value");
  let isValid = false;
  Object.keys(values).forEach((k, i) => {
    if (values[k] === "") {
      isValid = true;
    } else {
      isValid = false;
    }
  });

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
    isValid,
  };
};
