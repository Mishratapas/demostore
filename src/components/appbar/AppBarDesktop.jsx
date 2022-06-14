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
  const {fname, lname} = useSelector((state) => state.name);
  console.log(fname + lname);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  return (
    <AppBarContainer>
      <Grid container spacing={2}>
        <Grid item lg={2} md={2}>
          <AppBarHeader>demoStore</AppBarHeader>
        </Grid>
        <Grid item lg={7} md={7}>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{marginTop: "25px"}}
          >
            <Button variant="contained">Home</Button>
            <Button variant="contained">Category</Button>
            <Button variant="contained">Products</Button>
            <Box>
              {user ? (
                <Typography sx={{color: Colors.white, fontWeight: "bold"}}>
                  <Typography sx={{color: Colors.primary, fontWeight: "bold"}}>
                    Hello,
                  </Typography>
                  {`${fname}`}
                </Typography>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{color: Colors.primary, fontWeight: "bold"}}>
                    Not logged in ?
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    <LoginIcon /> Sign in
                  </Button>
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
