import {useDispatch} from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

import {Colors, Font} from "../../styles/theme";
import {Product, ProductImage} from "../../styles/products";
import {addToCart} from "../../services/cartSlice";

const SlideTransition = (props) => {
  return <Slide direction="down" {...props} />;
};

const ProductDetailWrapper = styled(Box)(({theme}) => ({
  display: "flex",
  padding: theme.spacing(2),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  lineHight: 1.5,
}));

const ProductDetail = ({open, onClose, product}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanent"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{background: Colors.secondary}}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          {product.category.substring(0, 20)}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{marginRight: 4}}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography
              variant="h4"
              sx={{width: "100%", fontFamily: Font.mantez}}
            >
              {product.title}
            </Typography>
            <Grid
              sx={{
                width: "65px",
                height: "30px",
                backgroundColor: "#059e1e",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{fontSize: "20px"}}>
                {product.rating.rate}
                <StarIcon fontSize="10px" style={{color: "#e1fa00"}} />
              </Typography>
            </Grid>
            <Divider
              flexItem
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Typography variant="h5" sx={{fontWeight: "bolder"}}>
              ${product.price}
            </Typography>
            <Typography
              variant="subtitle"
              sx={{marginTop: "10px", color: "#c7a3a3"}}
            >
              {product.description}
            </Typography>
            <Divider flexItem style={{marginTop: "10px"}} />
            <Typography
              variant="subtitle"
              sx={{marginTop: "10px", color: "#d43737"}}
            >
              Instocks: {product.rating.count}
            </Typography>
            <Box
              sx={{mt: 4}}
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Button
                variant="contained"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
