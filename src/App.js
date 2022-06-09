import {useEffect} from "react";
import {Box, Container, Typography} from "@mui/material";
import theme from "./styles/theme";

import AppBar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Search from "./components/search";

function App() {
  useEffect(() => {
    document.title = "demostore";
  }, []);
  return (
    <Container maxWidth="xl" sx={{background: "#fff"}}>
      <AppBar />
      <AppDrawer />
      <Search />
      <Banner />
      <Promotions />
      <Box
        display="flex"
        alignItems="Center"
        justifyContent="center"
        sx={{p: 4}}
      >
        <Typography style={{fontFamily: "'Nunito', 'sans-serif'"}}>
          New Arrivals Bags
        </Typography>
      </Box>
      <Products />
      <Footer />
    </Container>
  );
}

export default App;
