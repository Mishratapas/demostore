import {Container, Grid, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import {bags} from "../../data";
import SingleProductDesktop from "./SingleProductDesktop";
import SingleProductMobile from "./SingleProductMobile";

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = bags.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
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
  return (
    <Container>
      <Grid
        container
        spacing={{xs: 2, md: 3}}
        justifyContent={"center"}
        sx={{margin: "20px 4px 10px 4px"}}
        columns={{xs: 4, sm: 9, md: 12}}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default Products;
