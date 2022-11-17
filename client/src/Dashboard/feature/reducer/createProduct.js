import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLocalstorage } from "../../../utils";

const init = {
  name: "",
  price: 0,
  short_desc: "",
};

const initialState = {
  alt_id: null,
  color: [],
  product: null,
  loading: false,
  productInit: init,
  allCategories: null,
  tags: [],
  productFormState: {},
};

// Product initial
export const createInitProduct = createAsyncThunk(
  "vendor/product",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/vendor/createemptyproduct`,

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

// Create a new product
export const createProduct = createAsyncThunk(
  "vendor/newproduct",
  async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/vendor/createproduct`,
        values,

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

// get product all categories
export const fetchAllCategories = createAsyncThunk(
  "vendor/getCategories",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/vendor/getcategories`,

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

// Create tags
export const createTags = createAsyncThunk(
  "vendor/createtag",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/vendor/createtag`,
        values,

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

// Delete or remove tag
export const deleteTag = createAsyncThunk(
  "vendor/deletetag",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/vendor/romvetag`,
        values,

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

// Product Silce
export const productSlice = createSlice({
  name: "Product_option",
  initialState,
  reducers: {
    createColor: (state, { payload }) => {
      state.color = [...state.color, payload];
    },
    createId: (state, { payload }) => {
      state.alt_id = payload;
    },
    addProductOrganizeState: (state, { payload }) => {
      state.productFormState = {
        ...state.productFormState,
        ...payload,
      };
    },
    addProductFormState: (state, { payload }) => {
      state.productFormState = {
        ...state.productFormState,
        ...payload,
      };
    },
    addTag: (state, { payload }) => {
      state.tags = [...state.tags, payload];
    },
    removeTag: (state, { payload }) => {
      state.tags = payload;
    },
  },
  extraReducers: {
    [createInitProduct.pending]: (state) => {
      state.loading = true;
    },
    [createInitProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.product = payload.product;
      console.log(payload);
    },
    [createInitProduct.rejected]: (state) => {
      state.loading = false;
    },

    // get product all categories
    [fetchAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllCategories.fulfilled]: (state, { payload }) => {
      state.allCategories = payload.category;
    },
    [fetchAllCategories.rejected]: (state) => {
      state.loading = false;
    },

    // Create a product
    [createProduct.pending]: (state) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [createProduct.rejected]: (state) => {
      state.loading = false;
    },

    [createTags.pending]: (state) => {
      state.loading = true;
    },
    [createTags.fulfilled]: (state, { payload }) => {
      state.tags = [...state.tags, payload.tag];
    },
    [createTags.rejected]: (state) => {
      state.loading = false;
    },
    [deleteTag.pending]: (state) => {
      state.loading = true;
    },
    [deleteTag.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [deleteTag.pending]: (state) => {
      state.loading = false;
    },
  },
});

export const {
  createColor,
  createId,
  addProductOrganizeState,
  addTag,
  removeTag,
  addProductFormState,
  removeFile,
} = productSlice.actions;

export default productSlice.reducer;
