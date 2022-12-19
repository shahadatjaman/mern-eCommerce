import axios from "axios";
import { getLocalstorage, setLocalstorage } from "../utils";
import jwtDecode from "jwt-decode";

axios.defaults.withCredentials = true;

export const callApi = async (props) => {
  const token = getLocalstorage("accessToken");
  try {
    let response = await axios[props.method](
      `${process.env.REACT_APP_SERVER_URL}/${props.pathOne}/${props.pathTwo}${
        props._id ? "/" + props._id : ""
      }${props.paramOne ? "/" + props.paramOne + "/" + props.paramWTwo : ""}/${
        props.to ? props.from : ""
      }${props.to ? -+props.to : ""}`,
      (() => {
        if (props.method === "post") {
          return props.values;
        } else {
          return {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        }
      })(),
      (() => {
        if (props.method === "post") {
          return {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        }
      })()
    );

    return await response.data;
  } catch (error) {
    console.log(error);
    return await error.response;
  }
};

export const getNewToken = async () => {
  const token = localStorage.getItem("accessToken");
  var decodedToken = jwtDecode(token, { complete: true });
  var dateNow = new Date();

  if (decodedToken.exp < dateNow.getTime()) {
    const newToken = await callApi({
      pathOne: "auth",
      pathTwo: "refreshtoken",
      method: "get",
    });
    if (newToken.accessToken) {
      setLocalstorage("accessToken", newToken.accessToken);
    }
  }
};
