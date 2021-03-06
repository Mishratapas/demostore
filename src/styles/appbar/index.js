import {Box, Typography, List, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Colors} from "../theme";
//import "@fontsource/montez";

export const AppBarContainer = styled(Box)(() => ({
  position: "static",
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#7b60d1",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  fontSize: "2rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.black,
}));

export const MyList = styled(List)(({type}) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  alignItems: "center",
  justifyContent: "space-evenly",
}));

export const ActionIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `2px solid ${Colors.border}`,
}));

export const ActionIconContainerDesktop = styled(Box)(() => ({flexGrow: 0}));

export const OtherAppBarContainer = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginTop: 4,
  backgroundColor: "#77d9d9",
  borderRadius: "20px",
  // [theme.breakpoints.down("md")]: {},
}));

export const OtherAppBarHeader = styled(Typography)(({theme}) => ({
  [theme.breakpoints.up("md")]: {fontSize: "2rem"},
  padding: "2px",
  [theme.breakpoints.down("sm")]: {fontSize: "2rem"},
  fontSize: "4rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.white,
}));

export const OtherAppBarLeft = styled(Button)(({theme}) => ({
  [theme.breakpoints.up("md")]: {fontSize: "2rem"},
  padding: "2px",
  [theme.breakpoints.down("sm")]: {fontSize: "2rem"},
  fontSize: "4rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.primary,
  cursor: "pointer",
}));
