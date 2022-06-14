import {
  Container,
  Dialog,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";

import AppBar from "../../components/appbar";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";
import Products from "../../components/products";
import Footer from "../../components/footer";
import AppDrawer from "../../components/drawer";
import Search from "../../components/search";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {useEffect, useState} from "react";
// import party from "../../../public/images/party.png";

const WelcomeScreen = () => {
  const {user} = useUserAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {user ? (
        <Dialog
          open={user && open}
          onClose={handleClose}
          sx={{
            padding: "10px",
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            Welcome
            <img
              src="/images/party.png"
              alt=""
              width={"40px"}
              height={"40px"}
            />
          </DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{color: "red"}}>
              {user.email}
            </Typography>
          </Box>
        </Dialog>
      ) : (
        "not logged in"
      )}
    </>
  );
};

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{background: "#fff"}}>
      <AppBar />
      <AppDrawer />
      <Search />
      <Banner />
      <Promotions />
      <Products />
      <Footer />
      <WelcomeScreen />
    </Container>
  );
};

export default Home;
