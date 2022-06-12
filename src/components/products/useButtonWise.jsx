import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, useMediaQuery, useTheme} from "@mui/material";

import {getData} from "../../services/dataSlice";
import SingleProductMobile from "./SingleProductMobile";
import SingleProductDesktop from "./SingleProductDesktop";
import Loading from "../loading";

const useButtonWise = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const {loading, items} = useSelector((state) => state.data);

  const handleAllClick = () => {
    console.log("all button is clicked");
    return Array.from(items).map((product) => (
      <Grid
        item
        key={product.id}
        xs={2}
        sm={4}
        md={6}
        display="flex"
        alignItems="center"
        flexDirection={"column"}
      >
        {matches ? (
          <SingleProductMobile product={product} matches={matches} />
        ) : (
          <SingleProductDesktop product={product} matches={matches} />
        )}
      </Grid>
    ));
  };
  return {
    handleAllClick,
    render: (
      <>
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
            <Button variant="contained" sx={{mr: 1}} color="warning">
              Jewelery
            </Button>
            <Button variant="contained" sx={{mr: 1}} color="success">
              Men
            </Button>
            <Button variant="contained" sx={{mr: 1}} color="secondary">
              Women
            </Button>
            <Button variant="contained" sx={{mr: 1}} color="error">
              Bags
            </Button>
            <Button variant="contained">Electronics</Button>
          </Grid>
        </Box>
      </>
    ),
  };
};

export default useButtonWise;
