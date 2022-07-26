import {Box, styled, Typography} from "@mui/material";
import {Colors, Font} from "../theme";

export const OuterContainer = styled(Box)(({theme}) => ({
  positoin: "relative",
  marginTop: 40,
  width: "90%",
  height: "440px",
  backgroundColor: "var(--blue-background)",
  // border: `1px solid var(--blue-background)`,
  border: `1px solid var(--light-blue)`,
  borderRadius: "16px",
  //   [theme.breakpoints.down("sm")]: {width: "90%", height: "600px"},
}));

export const LeftImageContainer = styled(Box)(({theme}) => ({
  marginTop: 40,
  marginLeft: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  height: "550px",
  borderColor: "none",
}));

export const HeaderContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100px",
  top: 0,
  padding: "1rem",
}));

export const LeftImage = styled("img")(({src, theme}) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {width: "330px"},
  [theme.breakpoints.down("sm")]: {width: "320px", height: "300px"},
}));

export const HeaderText = styled(Typography)(({theme}) => ({
  fontSize: "60px",
  color: Colors.primary,
  fontFamily: Font.mantez,
  [theme.breakpoints.down("md")]: {fontSize: "50px"},
}));

export const InputsContainer = styled(Box)(() => ({
  padding: "0px 40px 0px 40px",
}));

export const SecondContainer = styled(Box)(() => ({
  marginTop: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  height: "100px",
  backgroundColor: "var(--blue-background)",
  border: `1px solid var(--light-blue)`,
  borderRadius: "10px",
}));
