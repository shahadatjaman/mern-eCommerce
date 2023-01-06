import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi } from "../../../utils/index";

const initialState = {
  user: null,
  errors: null,
  msg: null,
  isLoading: false,
  loadingUpdatedUser: false,
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

export const createUserAddress = createAsyncThunk(
  "useraddress",
  async (values) => {
    return await callApi(values);
  }
);
export const getUserAddress = createAsyncThunk(
  "getuseraddress",
  async (props) => {
    return await callApi(props);
  }
);

// get user by user id
export const getUser = createAsyncThunk("getuser", async (props) => {
  return await callApi(props);
});

// Upload user image
export const uploadAvatar = createAsyncThunk("uploadavatar", async (props) => {
  return await callApi(props);
});

// Update user
export const updateUser = createAsyncThunk(
  "auth/update_user",
  async (values) => await callApi(values)
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserAddressIsValid: (state, { payload }) => {
      state.isValidAddress = payload.isValidForm;
    },
    getFormState: (state, { payload }) => {
      state.userAddress = payload;
    },
    clearMsg: (state) => {
      state.msg = null;
    },
  },

  extraReducers: (builder) => {
    // Registation
    builder
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
      })
      // Get user
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.user) {
          const { firstName, lastName, email, avatar } = payload.user;
          state.user = { firstName, lastName, email, avatar };
        }
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      })
      // Upload avatar
      .addCase(uploadAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(uploadAvatar.rejected, (state) => {
        state.isLoading = false;
      })

      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loadingUpdatedUser = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.loadingUpdatedUser = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.loadingUpdatedUser = false;
      });
  },
});

export const {
  addUser,
  addGoogleUser,
  logout,
  checkUserAddressIsValid,
  getFormState,
  clearMsg,
} = userSlice.actions;

export default userSlice.reducer;

// Akjon manus e pare r akjon manuser jibone prithibite sorgo r norog kore dite, valobasa holo obvase porinoto hoaer akta jinis, kintu ata mathay rakhte hobe je obvas hoye gele jeno valobasa kokhonoi kome na jay. karon manus hisebe amara prithibite sob kichu orjon korte parleo somoy kokhono orjon korte pari na ba ferot ante pari na. jar fole apnar valobasar mansutir jotno nin, karon valobasar jotno nile balobas kokhono rong bodlay na.
