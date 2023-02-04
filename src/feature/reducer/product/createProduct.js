import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApi } from "../../../utils";

const requiredValue = {
  name: "",
  short_desc: "",
  price: 0,
};

const optionalValue = {
  discount: 0,
  checked: false,
  saleprice: 0,
  isStock: "In Stock",
  sku: "",
  weight: "",
  status: "",
  category: "",
  product_type: "",
  sub_category: "",
};

const initialState = {
  alt_id: null,
  color: [],
  product: null,
  loading: false,
  productInit: {
    requiredValue: { ...requiredValue },
    optionalValue: { ...optionalValue },
    variations: null,
  },
  allCategories: null,
  subCategories: null,
  tags: [],
  productFormState: {},
};

// Product initial
export const createInitProduct = createAsyncThunk(
  "vendor/product",
  async (values) => await callApi(values)
);

// Create a new product
export const createProduct = createAsyncThunk(
  "v1/newproduct",
  async (values) => {
    return await callApi(values);
  }
);

// get product all parent categories
export const fetchAllCategories = createAsyncThunk(
  "v1/getCategories",
  async (values) => await callApi(values)
);

// Get sub categorie by parent id
export const getSubCategories = createAsyncThunk(
  "v1/get_sub_categories",
  async (values) => await callApi(values)
);

// Create tags
export const createTags = createAsyncThunk(
  "vendor/createtag",
  async (values) => await callApi(values)
);

// Delete or remove tag
export const deleteTag = createAsyncThunk(
  "vendor/deletetag",
  async (values) => await callApi(values)
);

// Get product by product id for update
export const getProductByProductId = createAsyncThunk(
  "get_product_for_update",
  async (values) => callApi(values)
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
    resetInitialProduct: (state) => {
      state.productInit = {
        requiredValue: { ...requiredValue },
        optionalValue: { ...optionalValue },
      };
    },
  },
  extraReducers: {
    [createInitProduct.pending]: (state) => {
      state.loading = true;
    },
    [createInitProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.product = payload.product;
    },
    [createInitProduct.rejected]: (state) => {
      state.loading = false;
    },

    // get product all parent categories
    [fetchAllCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllCategories.fulfilled]: (state, { payload }) => {
      state.allCategories = payload.category;
    },
    [fetchAllCategories.rejected]: (state) => {
      state.loading = false;
    },

    // Get sub categories
    [getSubCategories.pending]: (state) => {
      state.loading = true;
    },
    [getSubCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.sub_category) {
        state.subCategories = payload.sub_category;
      }
    },
    [getSubCategories.rejected]: (state) => {
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
    [deleteTag.fulfilled]: (state, { payload }) => {},
    [deleteTag.pending]: (state) => {
      state.loading = false;
    },

    // Get product by product id for update
    [getProductByProductId.pending]: (state) => {
      state.loading = true;
    },
    [getProductByProductId.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.product) {
        const { name, short_desc, price } = payload.product;

        const requiredValue = {
          name,
          short_desc,
          price: price.$numberDecimal,
        };

        const optionalValue = {
          discount: payload.discount?.discount_percent.$numberDecimal
            ? payload.discount?.discount_percent.$numberDecimal
            : 0,
          isStock: "In Stock",
          sku: payload.product.SKU,
          weight: "",
          status: payload.product.product_status
            ? payload.product.product_status
            : "",
          category: payload.product?.category_id,
          product_type: payload.product?.product_type
            ? payload.product?.product_type
            : "",
          sub_category: payload.product.sub_category_id
            ? payload.product.sub_category_id
            : "",
        };

        state.productInit = {
          ...state.productInit,
          requiredValue: { ...requiredValue },
          optionalValue: { ...optionalValue },
          variations: payload.productVariation
            ? payload.productVariation
            : null,
        };

        console.log(payload);
      }
    },
    [getProductByProductId.rejected]: (state) => {
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
  resetInitialProduct,
} = productSlice.actions;

export default productSlice.reducer;
