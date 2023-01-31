import { callApi } from "../index";

const fetchData = async (values) => {
  let result = null;

  result = await callApi(values);

  return result;
};

export default fetchData;
