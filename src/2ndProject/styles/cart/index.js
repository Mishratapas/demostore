import {Box, styled, Typography} from "@mui/material";
import {Font} from "../theme";

export const CartContainer = styled(Box)(() => ({
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CartHeader = styled(Typography)(({theme}) => ({
  color: "var(--dark-blue)",
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

export const RightText = styled(Typography)(() => ({
  fontSize: "2rem",
  color: "var(--light-blue)",
}));

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
  background: "var(--blue-background)",
  position: "fixed",
  bottom: 0,
  border: "none",
  width: "100%",
  height: "7%",
  zIndex: 99,
  borderTop: `2px solid var(--light-blue)`,
}));

export const MyList = styled(Box)(() => ({
  flexGrow: 2,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const SubTotal = styled("button")(() => ({
  padding: "0.8rem 2rem",
  borderRadius: "1rem",
  backgroundColor: "var(--background)",
  color: "var(--blue)",
  border: "0.1rem solid var(--blue)",
  fontWeight: "bolder",
  transition: " var(--transition)",
}));
