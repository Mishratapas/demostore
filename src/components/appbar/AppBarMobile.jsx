import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {AppBarContainer, AppBarHeader} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import {useUIContext} from "../../context/UI";

const AppBarMobile = ({matches}) => {
  const {setDrawerOpen, setShowSearch} = useUIContext();

  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppBarHeader textAlign={"center"} variant="h4">
        demostore
      </AppBarHeader>
      <IconButton>
        <SearchIcon onClick={() => setShowSearch(true)} />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarMobile;
