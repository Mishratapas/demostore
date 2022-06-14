import {useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import DesktopCart from "./DesktopCart";
import MobileCart from "./MobileCart";

const Cart = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return <>{matches ? <MobileCart /> : <DesktopCart />} </>;
};

export default Cart;
