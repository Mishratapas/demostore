import {Box, styled, Typography} from "@mui/material";

import {Colors} from "../theme";
import "@fontsource/montez";

export const PromotionsContainer = styled(Box)(({theme}) => ({
  [theme.breakpoints.up("md")]: {padding: "40px 0px 40px 0px"},
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  backgroundColor: Colors.secondary,
}));

export const MessageText = styled(Typography)(({theme}) => ({
  fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up("md")]: {fontSize: "3rem"},
  color: Colors.white,
  fontSize: "1.5rem",
}));
