import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import {useUIContext} from "../../context/UI";
import {DrawerCloseButton} from "../../styles/drawer";

import {lighten} from "polished";
import {Colors, Font} from "../../styles/theme";
import useRoute from "../../hooks/useRoute";
import {Navigate, useNavigate} from "react-router-dom";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {
  const navigate = useNavigate();
  const [goProducts] = useRoute();
  const {drawerOpen, setDrawerOpen} = useUIContext();

  const handleGoToProducts = () => {
    navigate("/products");
  };

  const handleGoToHome = () => {
    navigate("/");
  };

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
          <ListItemButton onClick={() => handleGoToHome()}>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "30px",
                fontFamily: Font.mantez,
              }}
            >
              Home
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => handleGoToProducts()}>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "30px",
                fontFamily: Font.mantez,
              }}
            >
              Products
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>Category</ListItemButton>
          <MiddleDivider />
          <ListItemButton>About us</ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
