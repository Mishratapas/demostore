import {Box, styled, Typography} from "@mui/material";
import {Font, Colors} from "../theme";

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

export const LeftContainer = styled(Box)(() => ({}));

export const LeftImage = styled("img")(() => ({width: "70%"}));

export const RemoveButton = styled(Typography)(() => ({color: "#bd1114"}));

export const RightContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
}));

export const RightText = styled(Typography)(() => ({}));

export const InnerContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ContentContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: "10px",
}));

export const BottomContainer = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "7%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `2px solid ${Colors.border}`,
}));

export const MyList = styled(Box)(() => ({
  flexGrow: 2,
  display: "block",
  alignItems: "center",
  justifyContent: "space-evenly",
}));
