import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
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
import {addToCart, subTotal} from "../../services/cartSlice";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";

const SingleProductDesktop = ({product, matches}) => {
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart
            variant="contained"
            label="add to cart"
            show={showOptions}
            onClick={() => handleClick()}
          >
            Add To Cart
          </ProductAddToCart>
        )}
        <ProductActionWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon
                color="primary"
                onClick={() => showProductDetailDialog()}
              />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <PreductMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductDesktop;
