import {configureStore} from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";
import nameSlice from "./nameSlice";

export const store = configureStore({
  reducer: {data: dataSlice, cart: cartSlice, name: nameSlice},
});
