import {Box, styled, Typography} from "@mui/material";
import {Font} from "../theme";

export const CartContainer = styled(Box)(() => ({
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CartHeader = styled(Typography)(({theme}) => ({
  fontSize: "1rem",
  fontFamily: Font.mantez,
  [theme.breakpoints.up("sm")]: {fontSize: "2rem"},
  [theme.breakpoints.down("md")]: {fontSize: "2rem"},
}));

export const ClearCartContainer = styled(Box)(() => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
}));
