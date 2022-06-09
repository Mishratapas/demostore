import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import AppBarMobile from "./AppBarMobile";
import AppbarDesktop from "./AppBarDesktop";

export default function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
