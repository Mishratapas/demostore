import {useSelector} from "react-redux";
import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  MenuItem,
  Select,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";

import {
  MyList,
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
} from "../../styles/appbar";
import {Colors} from "../../styles/theme";
import {Link, useNavigate} from "react-router-dom";
import useRoute from "../../hooks/useRoute";
import {useUserAuth} from "../../context/auth/UserAuthContext";

export default function Actions({matches}) {
  // const {user} = useUserAuth();
  const [goLogIn] = useRoute();
  const navigate = useNavigate();
  const {cartTotalQuantity} = useSelector((state) => state.cart);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;

  const handleGoToLogIn = () => {
    navigate("/login");
  };

  // const outOrIn = {
  //   if(user) {
  //     <MenuItem>
  //       <LogoutIcon style={{color: "#db1b18"}} /> Log out
  //     </MenuItem>;
  //   },
  // };

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{justifyContent: "center"}}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon onClick={(e) => handleClick(e)} /> (
            {cartTotalQuantity})
          </ListItemIcon>
        </ListItemButton>
        <FormControl sx={{m: 1, minWidth: 60}}>
          <InputLabel id="demo-simple-select-helper-label">
            <PersonIcon />
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={""}
            label="Age"
          >
            <MenuItem value={10}>
              <AccountBoxIcon style={{color: "#241ab4"}} /> Account
            </MenuItem>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <MenuItem value={20} onClick={() => handleGoToLogIn()}>
                <LogoutIcon style={{color: "#db1b18"}} /> Log out
              </MenuItem>
              {/* <MenuItem value={""}>{user && outOrIn}</MenuItem> */}
            </Grid>
          </Select>
        </FormControl>
        <ListItemButton sx={{justifyContent: "center"}}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
