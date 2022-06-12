import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {AppBarContainer, AppBarHeader, MyList} from "../../styles/appbar";
import Actions from "./Actions";
import {useUIContext} from "../../context/UI";
import useRoute from "../../hooks/useRoute";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {subTotal} from "../../services/cartSlice";

const AppbarDesktop = ({matches}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const [goHome, goProducts, goCart] = useRoute();
  const {setShowSearch} = useUIContext();

  return (
    <AppBarContainer>
      <AppBarHeader>demoStore</AppBarHeader>
      <MyList type="row">
        <ListItemText
          primary="Home"
          onClick={goHome}
          primaryTypographyProps={{
            fontSize: "40px",
            fontFamily: '"Montez", "cursive"',
          }}
        />
        <ListItemText
          primary="Products"
          onClick={goProducts}
          primaryTypographyProps={{
            fontSize: "40px",
            fontFamily: '"Montez", "cursive"',
          }}
        />
        <ListItemText primary="Category" />
        <ListItemText primary="Contact Us" />
        <ListItemButton onClick={() => setShowSearch(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};

export default AppbarDesktop;
