import {Box, styled, Typography} from "@mui/material";
import {Colors, Font} from "../theme";

export const OuterContainer = styled(Box)(({theme}) => ({
  positoin: "relative",
  marginTop: 40,
  width: "90%",
  height: "440px",
  backgroundColor: Colors.white,
  border: `1px solid ${Colors.dove_gray}`,
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

export const HeaderContainer = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100px",
  top: 0,

  backgroundColor: Colors.white,
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
  backgroundColor: Colors.white,
  border: `1px solid ${Colors.dove_gray}`,
  borderRadius: "10px",
}));
