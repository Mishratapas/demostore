import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import {Stack, Typography} from "@mui/material";

import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/products";
import PreductMeta from "./ProductMeta";
import ProductDetail from "../productDetail";
import {addToCart, subTotal} from "../../services/cartSlice";

import useDialogModal from "../../hooks/useDialogModal";

const SingleProductMobile = ({product, matches}) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMetaWrapper>
          <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
            {product.title.substring(0, 18)}
          </Typography>
          <Typography variant={matches ? "caption" : "body1"}>
            ${product.price}
          </Typography>
        </ProductMetaWrapper>
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
      <ProductAddToCart
        variant="contained"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductMobile;
