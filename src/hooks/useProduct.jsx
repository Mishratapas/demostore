import {useSelector} from "react-redux";
import {Grid, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import SingleProductMobile from "../components/products/SingleProductMobile";
import SingleProductDesktop from "../components/products/SingleProductDesktop";
import {bags} from "../data";

export default function UseProduct() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const {items} = useSelector((state) => state.data);

  const renderAll = Array.from(items).map((product) => (
    <Grid
      item
      key={product.id}
      xs={6}
      sm={4}
      md={2}
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

  const renderJewe = Array.from(items)
    .filter((p) => p.category === "jewelery")
    .map((product) => (
      <Grid
        item
        key={product.id}
        xs={6}
        sm={4}
        md={2}
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

  const renderMens = Array.from(items)
    .filter((p) => p.category === "men's clothing")
    .map((product) => (
      <Grid
        item
        key={product.id}
        xs={6}
        sm={4}
        md={2}
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

  const renderWomen = Array.from(items)
    .filter((p) => p.category === "women's clothing")
    .map((product) => (
      <Grid
        item
        key={product.id}
        xs={6}
        sm={4}
        md={2}
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

  const renderEle = Array.from(items)
    .filter((p) => p.category === "electronics")
    .map((product) => (
      <Grid
        item
        key={product.id}
        xs={6}
        sm={4}
        md={2}
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

  const renderBag = Array.from(bags).map((product) => (
    <Grid
      item
      key={product.id}
      xs={6}
      sm={4}
      md={2}
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

  return [renderAll, renderJewe, renderMens, renderWomen, renderEle, renderBag];
}
