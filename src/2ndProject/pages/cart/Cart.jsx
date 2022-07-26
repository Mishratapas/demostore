import {useMediaQuery, useTheme} from "@mui/material";
import DesktopCart from "./DesktopCart";
import MobileCart from "./MobileCart";

const Cart = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <MobileCart /> : <DesktopCart />} </>;
};

export default Cart;
