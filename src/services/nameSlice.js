import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  fname: localStorage.getItem("fname")
    ? JSON.parse(localStorage.getItem("fname"))
    : "",
  lname: localStorage.getItem("lname")
    ? JSON.parse(localStorage.getItem("lname"))
    : "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      state.fname = action.payload;
      localStorage.setItem("fname", JSON.stringify(state.fname));
    },
    getSecondName: (state, action) => {
      state.lname = action.payload;
      localStorage.setItem("lname", JSON.stringify(state.lname));
    },
    removeNames: (state, action) => {
      state.fname = "";
      state.lname = "";
      localStorage.setItem("fname", JSON.stringify(state.fname));
      localStorage.setItem("lname", JSON.stringify(state.lname));
    },
  },
});

export const {getFirstName, getSecondName, removeNames} = nameSlice.actions;
export default nameSlice.reducer;
