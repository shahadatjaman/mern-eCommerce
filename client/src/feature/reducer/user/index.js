import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecoder, setLocalstorage } from "../../../utils/";
import jwt_decode from "jwt-decode";
const initialState = {
  user: null,
  errors: {},
  isLoading: false,
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
  },
  extraReducers: {
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
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [register.pending]: (state, { payload }) => {
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
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addUser, addGoogleUser } = loginSlice.actions;

export default loginSlice.reducer;
