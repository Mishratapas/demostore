import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Box, Button, Container, Grid} from "@mui/material";

import {getData} from "../../services/dataSlice";

import OtherAppBar from "../appbar/OtherAppBar";
import Footer from "../footer";

import UseProduct from "../../hooks/useProduct";
import useBoolean from "../../hooks/useBoolean";

const AllProducts = () => {
  const [renderAll, renderJewe, renderMens, renderWomen, renderEle, renderBag] =
    UseProduct();
  const [
    showAll,
    showJewe,
    showMens,
    showWomen,
    showEle,
    showBag,
    setShowAll,
    setShowJewe,
    setShowMens,
    setShowWomen,
    setShowEle,
    setShowBag,
  ] = useBoolean();

  const dispatch = useDispatch();

  useEffect(() => {
    setShowAll(true);
    dispatch(getData());
  }, [dispatch]);

  const handleAllClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowBag(false);
    setShowJewe(false);
    setShowAll(true);
  };

  const handleJeweClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowBag(false);
    setShowJewe(true);
  };

  const handleMensClick = () => {
    setShowAll(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(false);
    setShowMens(true);
  };

  const handleBagClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(true);
  };

  const handleWomenClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(false);
    setShowWomen(true);
  };

  const handleEleClick = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowJewe(false);
    setShowBag(false);
    setShowEle(true);
  };

  return (
    <>
      <Container maxWidth="xl">
        <OtherAppBar />
        <Box
          sx={{
            margin: "10px 0px",
          }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item spacing={2} xs={12}>
            <Button
              variant="contained"
              sx={{mr: 1}}
              color="info"
              onClick={() => handleAllClick()}
            >
              All
            </Button>
            <Button
              variant="contained"
              sx={{mr: 1}}
              color="warning"
              onClick={() => handleJeweClick()}
            >
              Jewelery
            </Button>
            <Button
              variant="contained"
              sx={{mr: 1}}
              color="success"
              onClick={() => handleMensClick()}
            >
              Men
            </Button>
            <Button
              variant="contained"
              sx={{mr: 1}}
              color="secondary"
              onClick={() => handleWomenClick()}
            >
              Women
            </Button>
            <Button
              variant="contained"
              sx={{mr: 1}}
              color="error"
              onClick={() => handleEleClick()}
            >
              Electronics
            </Button>
            <Button variant="contained" onClick={() => handleBagClick()}>
              Bags
            </Button>
          </Grid>
        </Box>
      </Container>
      <Grid
        container
        spacing={{xs: 2, md: 3}}
        justifyContent={"center"}
        sx={{margin: "20px 4px 10px 4px"}}
        columns={{xs: 4, sm: 9, md: 12}}
      >
        {showAll && renderAll}
        {showBag && renderBag}
        {showJewe && renderJewe}
        {showMens && renderMens}
        {showWomen && renderWomen}
        {showEle && renderEle}
      </Grid>
      <Footer />
    </>
  );
};

export default AllProducts;
