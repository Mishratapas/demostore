import {Container, useMediaQuery, useTheme} from "@mui/material";

import DesktopLogIn from "./DesktopLogIn";
import MobileLogIn from "./MobileLogIn";

const LogIn = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <Container>{matches ? <MobileLogIn /> : <DesktopLogIn />}</Container>;
};

export default LogIn;
