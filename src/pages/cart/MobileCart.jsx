import {useSelector, useDispatch} from "react-redux";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import OtherAppBar from "../../components/appbar/OtherAppBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import {
  CartHeader,
  ContentContainer,
  InnerContainer,
  LeftContainer,
  LeftImage,
  RemoveButton,
  RightContainer,
  RightText,
} from "../../styles/cart";

import "../../styles/cart/cart.css";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  subTotal,
} from "../../services/cartSlice";
import MobileBottom from "./MobileBottom";

const MobileCart = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCartQuantity(cartItem));
  };

  return (
    <>
      <Container>
        <Box
          sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
          <CartHeader>
            Your <ShoppingBagIcon htmlColor="#11804a" /> Cart
          </CartHeader>
        </Box>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <CartHeader>
              Your <ShoppingBagIcon /> is Empty
            </CartHeader>
            <Link to="/products" className="start-shopping">
              <ArrowBackIcon className="back-arrow" /> BackToShopping
            </Link>
          </div>
        ) : (
          <Box sx={{marginTop: "20px"}}>
            <Divider flexItem sx={{marginBottom: "20px"}} />
            {cart.cartItems?.map((cartItem) => (
              <Grid container spacing={4}>
                <Grid item md={4} xs={4}>
                  <LeftContainer>
                    <LeftImage key={cartItem.id} src={cartItem.image} alt="" />
                  </LeftContainer>
                  <RemoveButton
                    variant="subtitle"
                    sx={{color: "#bd1114"}}
                    onClick={() => handleRemoveFromCart(cartItem)}
                  >
                    <DeleteIcon style={{color: "#bd1114"}} />
                    remove
                  </RemoveButton>
                  <Divider
                    flexItem
                    sx={{marginBottom: "20px", marginTop: "10px"}}
                  />
                </Grid>
                <Grid item md={8} xs={8}>
                  <RightContainer>
                    <RightText>{cartItem.title.substring(0, 16)}</RightText>
                  </RightContainer>
                  <InnerContainer>
                    <Typography>
                      {cartItem.rating.rate}
                      <StarIcon style={{color: "#c3c90e"}} />
                    </Typography>
                  </InnerContainer>
                  <ContentContainer>
                    <Typography variant="h6">${cartItem.price} </Typography>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                  </ContentContainer>
                </Grid>
              </Grid>
            ))}
          </Box>
        )}
      </Container>
      <MobileBottom matches={matches} />
    </>
  );
};

export default MobileCart;
