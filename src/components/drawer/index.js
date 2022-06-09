import CloseIcon from "@mui/icons-material/Close";
import {Divider, Drawer, List, ListItemButton, styled} from "@mui/material";
import {useUIContext} from "../../context/UI";
import {DrawerCloseButton} from "../../styles/drawer";

import {lighten} from "polished";
import {Colors} from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {
  const {drawerOpen, setDrawerOpen} = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton>
          <CloseIcon
            sx={{fontSize: "2.5rem", color: lighten(0.09, Colors.secondary)}}
            onClick={() => setDrawerOpen(false)}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>Home</ListItemButton>
          <MiddleDivider />
          <ListItemButton>Category</ListItemButton>
          <MiddleDivider />
          <ListItemButton>About Us</ListItemButton>
          <MiddleDivider />
          <ListItemButton>Contact us</ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
