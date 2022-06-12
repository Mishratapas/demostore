import {Container} from "@mui/material";

import AppBar from "../../components/appbar";
import Banner from "../../components/banner";
import Promotions from "../../components/promotions";
import Products from "../../components/products";
import Footer from "../../components/footer";
import AppDrawer from "../../components/drawer";
import Search from "../../components/search";

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
    </Container>
  );
};

export default Home;
