import {createSlice} from "@reduxjs/toolkit";

const initialState = {fname: "", lname: ""};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      state.fname = action.payload;
    },
    getSecondName: (state, action) => {
      state.lname = action.payload;
    },
  },
});

export const {getFirstName, getSecondName} = nameSlice.actions;
export default nameSlice.reducer;
