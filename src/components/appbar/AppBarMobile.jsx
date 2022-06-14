import {Box, Button, IconButton, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {AppBarContainer, AppBarHeader} from "../../styles/appbar";
import Actions from "./Actions";
import {useUIContext} from "../../context/UI";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {subTotal} from "../../services/cartSlice";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {Colors} from "../../styles/theme";
import LoginIcon from "@mui/icons-material/Login";
import {useNavigate} from "react-router-dom";

const AppBarMobile = ({matches}) => {
  const navigate = useNavigate();
  const {user} = useUserAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {fname} = useSelector((state) => state.name);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);
  const {setDrawerOpen} = useUIContext();

  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppBarHeader textAlign={"center"} variant="h6">
        demostore
      </AppBarHeader>
      <Box>
        {user ? (
          <Typography sx={{color: Colors.white, fontWeight: "bold"}}>
            <Typography sx={{color: Colors.primary, fontWeight: "bold"}}>
              Hello,
            </Typography>
            {fname}
          </Typography>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Button variant="contained" onClick={() => navigate("/login")}>
              <LoginIcon /> Sign in
            </Button>
          </Box>
        )}
      </Box>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarMobile;
