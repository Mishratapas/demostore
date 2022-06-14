import {styled, Box, IconButton, Button, Typography} from "@mui/material";

import {slideInBottom, slideInRight} from "../../animations";
import {Colors, Font} from "../theme";

export const Product = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {position: "relative"},
}));

export const ProductImage = styled("img")(({src, theme}) => ({
  src: `url(${src})`,
  width: "70%",
  backgroundColor: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {width: "200px", padding: "24px"},
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({isFav, theme}) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {position: "absolute", right: 0, top: 0},
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({show, theme}) => ({
  width: "120px",
  fontSize: "12px",
  marginBottom: "10px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "100px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({show, theme}) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));

export const ProductName = styled(Typography)(({theme}) => ({
  fontSize: "60px",
  fontFamily: Font.mantez,
  [theme.breakpoints.down("md")]: {fontSize: "30px", fontFamily: Font.nunito},
}));

export const GotoProductsContainer = styled(Box)(({theme}) => ({
  width: "120px",
  marginBottom: "20px",
  borderWidth: "16px",
  backgroundColor: Colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {padding: "10px 0px", fontSize: "14px"},
}));

export const ButtonText = styled(Button)(({theme}) => ({
  width: "120px",
  marginBottom: "20px",
  color: Colors.white,
  backgroundColor: Colors.primary,
  borderWidth: "16px",
  fontWeight: "bold",
  fontSize: "12px",
  fontFamily: Font.mantez,
  [theme.breakpoints.down("sm")]: {padding: "10px 0px", fontSize: "14px"},
}));

export const GoToProducts2 = styled(Button)(({show, theme}) => ({
  width: "120px",
  fontSize: "12px",
  marginBottom: "10px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));
