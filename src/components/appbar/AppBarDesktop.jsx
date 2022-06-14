import {Box, Button, Grid, Typography} from "@mui/material";

import {AppBarContainer, AppBarHeader} from "../../styles/appbar";
import Actions from "./Actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {subTotal} from "../../services/cartSlice";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import LoginIcon from "@mui/icons-material/Login";
import {useNavigate} from "react-router-dom";
import {Colors} from "../../styles/theme";

const AppbarDesktop = ({matches}) => {
  const navigate = useNavigate();
  const {user} = useUserAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {fname} = useSelector((state) => state.name);

  const handleGotoProducts = () => {
    if (!user) {
      navigate("/login");
      window.alert(
        "please signin to see product page!! Redirecting you to login page"
      );
    } else {
      navigate("/products");
    }
  };
  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  return (
    <AppBarContainer>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item lg={2} md={2}>
          <AppBarHeader>demoStore</AppBarHeader>
        </Grid>
        <Grid item lg={7} md={7}>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            // sx={{marginTop: "25px"}}
          >
            <Button variant="contained">Home</Button>
            <Button variant="contained">Category</Button>
            <Button variant="contained" onClick={() => handleGotoProducts()}>
              Products
            </Button>
            <Box>
              {user ? (
                <>
                  {fname ? (
                    <>
                      <Typography>Hello, {`${fname}`}</Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        sx={{color: Colors.primary, fontWeight: "bold"}}
                      >
                        Hello,
                        <Typography
                          sx={{color: Colors.white}}
                        >{`${user.email}`}</Typography>
                      </Typography>
                    </>
                  )}
                </>
              ) : (
                <Box display="block">
                  <Box sx={{marginLeft: "60px"}}>
                    <Typography
                      sx={{color: Colors.primary, fontWeight: "bold"}}
                    >
                      Not logged in ?
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/login")}
                    >
                      <LoginIcon /> Sign in
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      background: "#000000",
                      borderRadius: "16px",
                      padding: "5px",
                    }}
                  >
                    <Typography sx={{color: Colors.white}}>
                      please signin to see products page
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={3}>
          <Actions matches={matches} />
        </Grid>
      </Grid>
    </AppBarContainer>
  );
};

export default AppbarDesktop;
