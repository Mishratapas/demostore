import {configureStore} from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {data: dataSlice, cart: cartSlice},
});
