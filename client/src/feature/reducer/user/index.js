import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  callApi,
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
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
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
  "auth/useraddress",
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
  "auth/getuseraddress",
  async (props) => {
    return await callApi(props);
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
    checkUserAddressIsValid: (state, { payload }) => {
      state.isValidAddress = payload.isValidForm;
    },
    getFormState: (state, { payload }) => {
      state.userAddress = payload;
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

    // Create user Address
    [createUserAddress.pending]: (state) => {
      state.isLoadingToOrder = true;
    },
    [createUserAddress.fulfilled]: (state, { payload }) => {
      state.isLoadingToOrder = false;
    },
    [createUserAddress.rejected]: (state) => {
      state.isLoadingToOrder = false;
    },

    // Get User Address
    [getUserAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserAddress.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload && payload.user_address) {
        state.userAddress = payload.user_address;
      }
    },
    [getUserAddress.rejected]: (state) => {
      state.isLoading = false;
    },
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
