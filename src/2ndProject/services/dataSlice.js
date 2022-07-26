import axios from "axios";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {loading: false, items: {}, error: false, detail: {}};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {removeDetail: (state) => (state.detail = {})},
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = false;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [getDetail.pending]: (state, action) => {
      state.loading = true;
      state.false = false;
    },
    [getDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
      state.error = false;
    },
    [getDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const {removeDetail} = dataSlice.actions;
export default dataSlice.reducer;
