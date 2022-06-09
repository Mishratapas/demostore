import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {AppBarContainer, AppBarHeader, MyList} from "../../styles/appbar";
import Actions from "./Actions";
import {useUIContext} from "../../context/UI";

const AppbarDesktop = ({matches}) => {
  const {setShowSearch} = useUIContext();
  return (
    <AppBarContainer>
      <AppBarHeader>demoStore</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Products" />
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
