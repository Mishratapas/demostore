import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  Drawer,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import {useUIContext} from "../../context/UI";
import {DrawerCloseButton} from "../../styles/drawer";
import CategoryIcon from "@mui/icons-material/Category";

import {lighten} from "polished";
import {Colors, Font} from "../../styles/theme";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/auth/UserAuthContext";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {
  const navigate = useNavigate();

  const {drawerOpen, setDrawerOpen} = useUIContext();
  const {user} = useUserAuth();

  const handleGoToProducts = () => {
    if (!user) {
      window.onload = function () {
        var mobile =
          /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
            navigator.userAgent.toLowerCase()
          );
        if (mobile) {
          alert(
            "Please sign in to visit Products page!! Redirecting you to login page"
          );
        }
      };
      alert("hello");
    } else {
      navigate("/products");
    }
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
                fontSize: "50px",
                fontFamily: Font.mantez,
                color: Colors.black,
              }}
            >
              Home
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <FormControl
              sx={{
                width: "70%",
              }}
            >
              <InputLabel
                sx={{
                  color: Colors.black,
                  display: "inline",
                }}
              >
                <CategoryIcon style={{color: Colors.black}} />
                category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="category"
              >
                <MenuItem>
                  <img src="/images/dropdown/all.png" alt="" width="20px" />
                  All
                </MenuItem>
                <MenuItem>
                  <img
                    src="/images/dropdown/jewelery.png"
                    alt=""
                    width="20px"
                  />
                  Jewelery
                </MenuItem>
                <MenuItem>
                  <img src="/images/dropdown/men.png" alt="" width="20px" />
                  Men
                </MenuItem>
                <MenuItem>
                  <img src="/images/dropdown/women.png" alt="" width="20px" />
                  Women
                </MenuItem>
                <MenuItem>
                  <img
                    src="/images/dropdown/electronics.png"
                    alt=""
                    width="20px"
                  />
                  Electronics
                </MenuItem>
                <MenuItem>
                  <img src="/images/dropdown/bag.png" alt="" width="20px" />
                  Bags
                </MenuItem>
              </Select>
            </FormControl>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton
            sx={{
              fontSize: "40px",
              fontFamily: Font.mantez,
              color: Colors.black,
            }}
          >
            Category
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton
            sx={{
              fontSize: "40px",
              fontFamily: Font.mantez,
              color: Colors.black,
            }}
          >
            About us
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
