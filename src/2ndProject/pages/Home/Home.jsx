import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Dialog, DialogTitle, Box, Typography} from "@mui/material";
import {useUserAuth} from "../../context/auth/UserAuthContext";

import {Header, Slider, Category, ProductPage, Footer} from "../../components";

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
                {fname && lname ? (
                  <>
                    <Typography variant="h5" sx={{color: "red"}}>
                      {`${fname}  ${lname}`}
                    </Typography>
                  </>
                ) : null}
              </>
            ) : null}
          </Box>
        </Dialog>
      ) : null}
    </>
  );
};

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <ProductPage />
      <Footer />
      <WelcomeScreen />
    </div>
  );
};

export default Home;
