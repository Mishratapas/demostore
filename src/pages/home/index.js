import {useSelector} from "react-redux";
import {Container, Dialog, DialogTitle, Box, Typography} from "@mui/material";

import AppBar from "../../components/appbar";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";
import Products from "../../components/products";
import Footer from "../../components/footer";
import AppDrawer from "../../components/drawer";
import Search from "../../components/search";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {useEffect, useState} from "react";

const WelcomeScreen = () => {
  const {user} = useUserAuth();
  const [open, setOpen] = useState(false);

  const {fname, lname} = useSelector((state) => state.name);

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
            {user ? (
              <>
                <Typography variant="h5" sx={{color: "red"}}>
                  {user.email}
                </Typography>
              </>
            ) : null}
            <Typography variant="h5" sx={{color: "red"}}>
              {`${fname}  ${lname}`}
            </Typography>
          </Box>
        </Dialog>
      ) : null}
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
