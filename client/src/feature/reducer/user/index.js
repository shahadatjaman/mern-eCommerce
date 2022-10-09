import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLocalstorage } from "../../../utils/";
import jwt_decode from "jwt-decode";
const initialState = {
  user: null,
  errors: {},
  isLoading: false,
};

export const addNewUser = createAsyncThunk(
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
    [addNewUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [addNewUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;

      if (payload.token) {
        const user = jwt_decode(payload.token);
        state.user = user;
        setLocalstorage("user_info", payload.token);
      }
    },
    [addNewUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addUser, addGoogleUser } = loginSlice.actions;

export default loginSlice.reducer;
