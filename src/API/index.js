import axios from "axios";
import { getLocalstorage } from "../utils";
import jwtDecode from "jwt-decode";

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
            withCredentials: true,
          };
        }
      })(),
      (() => {
        if (props.method === "post") {
          return {
            headers: {
              Authorization: "Bearer " + token,
            },
            withCredentials: true,
          };
        }
      })()
    );

    return await response.data;
  } catch (error) {
    return await error.response;
  }
};
