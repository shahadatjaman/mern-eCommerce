import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Cookies from "universal-cookie";
import { callApi } from "../../../API";
import { removeLocalstorage, setLocalstorage } from "../../../utils/";
const initialState = {
  user: null,
  errors: null,
  msg: null,
  loading: false,
  errorToLogin: null,
  findLoadAccount: false,
  new_pass_url: false,
  loadSendCode: false,
  isValidCode: false,
  validTime: 1,
  modalIsOpen: false,
  modalName: "",
};

export const login = createAsyncThunk("login", async (values) => {
  let res = await callApi(values);
  if (values.navigate) {
    res.navigate = values.navigate;
  }
  return res;
});

export const getNewAccessToken = createAsyncThunk(
  "refreshToken",
  async (values) => await callApi(values)
);

export const register = createAsyncThunk("register", async (values) => {
  let res = await callApi(values);
  if (values.navigate) {
    res.navigate = values.navigate;
  }

  return res;
});

// Find user account
export const findAccount = createAsyncThunk("findAccount", async (values) => {
  const res = await callApi(values);
  if (values.navigate) {
    res.navigate = values.navigate;
  }

  return res;
});

// Get a verification code by email
export const verifyCode = createAsyncThunk("verifycode", async (values) => {
  const res = await callApi(values);
  if (values?.navigate) {
    res.navigate = values.navigate;
  }

  return res;
});

// Check validity of verification code
export const checkVeriCodeIsValid = createAsyncThunk(
  "checkVerification",
  async (values) => await callApi(values)
);

// Change password of user profile
export const changePassword = createAsyncThunk(
  "change_password",
  async (values) => {
    const res = await callApi(values);
    if (values.navigate) {
      res.navigate = values.navigate;
    }

    return res;
  }
);

// Create a new password
export const createNewPassword = createAsyncThunk(
  "auht/create_new_password",
  async (values) => {
    const res = await callApi(values);
    if (values.navigate) {
      res.navigate = values.navigate;
    }

    return res;
  }
);

// Delete user account
export const deleteAccount = createAsyncThunk(
  "delete-account",
  async (values) => {
    const res = await callApi(values);
    if (values.navigate) {
      res.navigate = values.navigate;
    }

    return res;
  }
);

// Check create new password url valid or not
export const checkCreatePassUrl = createAsyncThunk(
  "auth/checkvalidiy",
  async (values) => await callApi(values)
);

const loginSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.modalIsOpen = true;
      state.modalName = payload;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
      state.msg = null;
    },
    addUser: (state, { payload }) => {
      state.user = payload;
    },

    addGoogleUser: (state, { payload }) => {
      console.log(payload);
    },
    logout: (state, { payload }) => {
      removeLocalstorage("accessToken");
      state.user = null;
      const cookies = new Cookies();
      cookies.remove("refreshToken", {
        path: "/",
        domain: "localhost",
      });
    },

    clearMsg: (state) => {
      state.msg = null;
    },
  },

  extraReducers: (builder) => {
    // Registation
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.accessToken) {
          setLocalstorage("accessToken", payload.accessToken);
        }

        if (payload?.data?.errors) {
          state.errors = payload.data.errors;
        }

        if (payload.navigate && payload.status !== 400) {
          payload.navigate("/");
        }
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      // Login user
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.accessToken) {
          setLocalstorage("accessToken", payload.accessToken);
        }

        if (payload?.data?.message) {
          state.errorToLogin = payload.data.message;
        }

        if (payload.navigate && payload.status === 200) {
          payload.navigate("/");
        }
      })
      .addCase(login.rejected, (state, payload) => {
        state.isLoading = false;
      })

      // Get access token
      .addCase(getNewAccessToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewAccessToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.accessToken) {
          setLocalstorage("accessToken", payload.accessToken);
        }
      })
      .addCase(getNewAccessToken.rejected, (state) => {
        state.isLoading = false;
      })

      // Find account
      .addCase(findAccount.pending, (state) => {
        state.findLoadAccount = true;
      })
      .addCase(findAccount.fulfilled, (state, { payload }) => {
        state.findLoadAccount = false;

        if (payload.message && payload.status === 400) {
          state.msg = payload.message;
        }

        if (payload.status === 200) {
          payload.navigate &&
            payload.navigate(`/indentify/recovery_account/${payload.email}`);
          state.isValidCode = true;
        }
      })
      .addCase(findAccount.rejected, (state) => {
        state.findLoadAccount = false;
      })

      // Verify Code
      .addCase(verifyCode.pending, (state) => {
        state.loadSendCode = true;
      })
      .addCase(verifyCode.fulfilled, (state, { payload }) => {
        state.loadSendCode = false;
        if (payload.status === 200) {
          setLocalstorage("accessToken", payload.accessToken);
          if (payload.navigate) {
            payload.navigate("/create_new_password");
          }
        }
        if (payload.status === 400) {
          state.msg = payload.message;
        }

        if (payload?.data?.error) {
          state.msg = payload.data.error;
        }
      })
      .addCase(verifyCode.rejected, (state) => {
        state.loadSendCode = false;
      })

      //Check verification code is valid or not
      .addCase(checkVeriCodeIsValid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkVeriCodeIsValid.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.status === 200) {
          state.isValidCode = true;
          state.validTime = payload.validTime;
        } else {
          state.isValidCode = false;
          state.validTime = 1;
        }
      })
      .addCase(checkVeriCodeIsValid.rejected, (state) => {
        state.isLoading = false;
      })

      // Change user password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);

        if (payload.data?.status === 400) {
          state.msg = payload.data.message;
        } else {
          state.modalIsOpen = false;
          state.msg = null;
        }
      })
      .addCase(changePassword.rejected, (state) => {
        state.isLoading = false;
      })

      // Delete user account
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAccount.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload?.data?.status === 400) {
          state.msg = payload.data.message;
        } else {
          removeLocalstorage("accessToken");
          state.user = null;
          state.modalIsOpen = false;
          payload.navigate("/");
        }
      })
      .addCase(deleteAccount.rejected, (state) => {
        state.isLoading = false;
      })

      // Create new password state handle
      .addCase(createNewPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPassword.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload.navigate) {
          payload.navigate("/");
        }
      })
      .addCase(createNewPassword.rejected, (state, { payload }) => {
        state.loading = false;
      })

      // Check create new password url valid or not
      .addCase(checkCreatePassUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkCreatePassUrl.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        if (payload.url_validity) {
          state.new_pass_url = payload.url_validity;
        }
      })
      .addCase(checkCreatePassUrl.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  openModal,
  closeModal,
  addUser,
  addGoogleUser,
  logout,
  checkUserAddressIsValid,
  getFormState,
  clearMsg,
} = loginSlice.actions;

export default loginSlice.reducer;
