import {useSelector, useDispatch} from "react-redux";
import {
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

import {
  MyList,
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
} from "../../styles/appbar";
import {Colors} from "../../styles/theme";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {removeNames} from "../../services/nameSlice";

export default function Actions({matches}) {
  const dispatch = useDispatch();
  const {user, logOut} = useUserAuth();
  const navigate = useNavigate();
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  // const {removeNames} = useSelector((state) => state.name);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;

  const handleLogOutClick = async (e) => {
    try {
      await logOut();
      dispatch(removeNames());
      navigate("/");
    } catch (err) {}
  };

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
            {user ? (
              <MenuItem value={20} onClick={() => handleLogOutClick()}>
                <LogoutIcon style={{color: "#db1b18"}} /> Log out
              </MenuItem>
            ) : null}
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
