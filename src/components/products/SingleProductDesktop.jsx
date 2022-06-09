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
import {useState} from "react";

const SingleProductDesktop = ({product, matches}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
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
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <PreductMeta product={product} matches={matches} />
    </>
    /*  
    product
    Image
    Meta
    Actions
    Footer
   */
  );
};

export default SingleProductDesktop;
