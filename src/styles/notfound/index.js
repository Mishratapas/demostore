import {Box, styled, Typography} from "@mui/material";
import {Colors} from "../theme";
import "@fontsource/montez";

export const ErrorHeading = styled(Typography)(({theme}) => ({
  [theme.breakpoints.up("md")]: {fontSize: "60px"},
  fontSize: "40px",
  fontFamily: '"Montez", "cursive"',
  borderRadius: "16px",
  backgroundColor: Colors.primary,
}));

export const BoxContainer = styled(Box)(() => ({
  position: "absolute",
  top: "200px",
  height: "300px",
  width: "350px",
  backgroundColor: Colors.secondary,
  borderColor: `2px solid black`,
  boxShadow: `10px 10px 5px #aaaaaa`,
  borderRadius: "16px",
}));

export const ErrorText = styled(Typography)(({theme}) => ({
  [theme.breakpoints.up("md")]: {fontSize: "60px"},
  [theme.breakpoints.down("md")]: {fontSize: "60px"},
  fontFamily: '"Montez", "cursive"',
}));
