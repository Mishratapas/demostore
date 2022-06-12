import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import AppBarMobile from "./AppBarMobile";
import AppbarDesktop from "./AppBarDesktop";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getData} from "../../services/dataSlice";

export default function AppBar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
