import axios from "axios";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getData = createAsyncThunk("get/getData", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {loading: false, items: {}, error: false, detail: {}};

export const dataSlice = createSlice({
  name: "data",
  initialState,
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
  },
});

export default dataSlice.reducer;
