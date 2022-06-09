import {Box, Typography, List} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Colors} from "../theme";
import "@fontsource/montez";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 10px",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({type}) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  alignItems: "center",
  justifyContent: "Center",
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
