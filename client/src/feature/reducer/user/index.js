import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { callApi } from "../../../API";
import {
  jwtDecoder,
  removeLocalstorage,
  setLocalstorage,
} from "../../../utils/";
const initialState = {
  user: null,
  errors: {},
  isLoading: false,
  isLoadingToOrder: false,
  userAddress: {
    company_name: "",
    street_address: "",
    town_city: "",
    postcode_zip: "",
    state_country: "",
    phone: "",
    country: "",
  },
  isValidAddress: false,
};

export const login = createAsyncThunk(
  "login",
  async (values) => await callApi(values)
);

export const getNewAccessToken = createAsyncThunk(
  "refreshToken",
  async () => await callApi()
);

export const register = createAsyncThunk(
  "register",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/register`,
        values
      );
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

export const createUserAddress = createAsyncThunk(
  "useraddress",
  async ({ values }) => {
    return await callApi({
      pathOne: "auth",
      pathTwo: "useraddress",
      method: "post",
      values,
    });
  }
);
export const getUserAddress = createAsyncThunk(
  "getuseraddress",
  async (props) => {
    return await callApi(props);
  }
);

const loginSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
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
      cookies.remove("refreshToken", { path: "/" });
    },
    checkUserAddressIsValid: (state, { payload }) => {
      state.isValidAddress = payload.isValidForm;
    },
    getFormState: (state, { payload }) => {
      state.userAddress = payload;
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
        if (payload.errors) {
          state.errors = payload.errors;
        }
        if (payload.token) {
          const user = jwtDecoder(payload.token);
          state.user = user;
          state.errors = {};
          setLocalstorage("user_info", payload.token);
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
        const cookies = new Cookies();

        cookies.set("refreshToken", payload.refreshToken, { path: "/" });
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })

      // Get access token
      .addCase(getNewAccessToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewAccessToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const cookies = new Cookies();
        cookies.set("refreshToken", payload.refreshToken, { path: "/" });
      })
      .addCase(getNewAccessToken.rejected, (state) => {
        state.isLoading = false;
      })
      // // Create user address
      .addCase(createUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(createUserAddress.rejected, (state) => {
        state.isLoading = false;
      })
      // Get user address
      .addCase(getUserAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload && payload.user_address) {
          state.userAddress = payload.user_address;
        }
      })
      .addCase(getUserAddress.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  addUser,
  addGoogleUser,
  logout,
  checkUserAddressIsValid,
  getFormState,
} = loginSlice.actions;

export default loginSlice.reducer;

// Akjon manus e pare r akjon manuser jibone prithibite sorgo r norog kore dite, valobasa holo obvase porinoto hoaer akta jinis, kintu ata mathay rakhte hobe je obvas hoye gele jeno valobasa kokhonoi kome na jay. karon manus hisebe amara prithibite sob kichu orjon korte parleo somoy kokhono orjon korte pari na ba ferot ante pari na. jar fole apnar valobasar mansutir jotno nin, karon valobasar jotno nile balobas kokhono rong bodlay na.
