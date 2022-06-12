import {Container, useMediaQuery, useTheme} from "@mui/material";

import DesktopSignUp from "./DesktopSignUp";
import MobileSignUp from "./MobileSignUp";

const SignUp = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>{matches ? <MobileSignUp /> : <DesktopSignUp />}</Container>
  );
};

export default SignUp;
