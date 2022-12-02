import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../utils";

/**
 *
 * @param {String} name
 * @param {String} url
 * @param {String} method
 * @returns
 */

export const useProduct = (name, url, method) => {
  const createInitProduct = createAsyncThunk(name, async () => {
    try {
      const response = await axios[method](
        url,

        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  });

  return createInitProduct;
};
