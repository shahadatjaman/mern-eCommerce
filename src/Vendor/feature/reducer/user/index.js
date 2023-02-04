import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLocalstorage } from "../../../utils";
import { callApi } from "../../../utils/callApi";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const login = createAsyncThunk("admin/login", async (values) => {
  const res = await callApi(values);
  res.navigate = values.navigate;

  return res;
});

export const getNewAccessToken = createAsyncThunk(
  "refreshToken",
  async (values) => await callApi(values)
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload.data?.errors) {
          state.error = payload.data.errors;
        }

        if (payload.accessToken) {
          setLocalstorage("accessToken", payload.accessToken);
          payload.navigate("/");
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
      })
      // Get access token
      .addCase(getNewAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewAccessToken.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload.accessToken) {
          setLocalstorage("accessToken", payload.accessToken);
        }
      })
      .addCase(getNewAccessToken.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
