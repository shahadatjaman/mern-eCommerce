import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getLocalstorage,
  jwtDecoder,
  removeLocalstorage,
  setLocalstorage,
} from "../../../utils/";
const initialState = {
  user: null,
  errors: {},
  isLoading: false,
  userAddress: {
    company_name: "",
    street_address: "",
    town_city: "",
    postcode_zip: "",
    state_country: "",
    phone: "",
    country: "",
  },
};

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/login`,
        values
      );
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/register`,
        values
      );
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

export const createUserAddress = createAsyncThunk(
  "auth/useraddress",
  async ({ navigate, values }, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/useraddress`,
        values,
        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      navigate("/order");
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);
export const getUserAddress = createAsyncThunk(
  "auth/getuseraddress",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/auth/getuseraddress`,

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
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },

    addGoogleUser: (state, { payload }) => {
      console.log(payload);
    },
    logout: (state, { payload }) => {
      removeLocalstorage("user_info");
      state.user = null;
    },
  },
  extraReducers: {
    // User Login
    [login.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;

      if (payload.token) {
        const user = jwtDecoder(payload.token);
        state.user = user;
        setLocalstorage("user_info", payload.token);
      }
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },

    // User Register
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
      }
      if (payload.token) {
        const user = jwtDecoder(payload.token);
        state.user = user;
        state.errors = {};
        setLocalstorage("user_info", payload.token);
      }
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
    },

    // Get User Address
    [getUserAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserAddress.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userAddress = payload.user_address;
    },
    [getUserAddress.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addUser, addGoogleUser, logout } = loginSlice.actions;

export default loginSlice.reducer;
