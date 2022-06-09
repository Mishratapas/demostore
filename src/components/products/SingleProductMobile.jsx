import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import {Stack} from "@mui/material";

import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import PreductMeta from "./ProductMeta";
import ProductDetail from "../productDetail";
import useDialogModal from "../../hooks/useDialogModal";

const SingleProductMobile = ({product, matches}) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <PreductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductMobile;
