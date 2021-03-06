import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import OtherAppBar from "../../../components/appbar/OtherAppBar";
import "../../styles/cart/cart.css";

import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  subTotal,
} from "../../services/cartSlice";
import {CartHeader} from "../../../styles/cart";

const DesktopCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   window.reload();
  // }, []);

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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <OtherAppBar />
      <div className="cart-container">
        <Grid
          sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
          <CartHeader>
            Your <ShoppingBagIcon htmlColor="#11804a" /> Cart
          </CartHeader>
        </Grid>
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
          <>
            <div>
              <div className="titles">
                <h3 className="product-title">Title</h3>
                <h3 className="product-price">Price</h3>
                <h3 className="product-quantity ms-4">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItems?.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt="" />
                      <div>
                        <h3>{cartItem.title.substring(0, 12)}</h3>
                        <p>{cartItem.description.substring(0, 64)}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price"> ???{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ???{cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <button
                  className="clear-cart"
                  onClick={() => {
                    handleClearCart();
                  }}
                >
                  <span className="clearCartText">
                    <ClearAllIcon /> clear cart
                  </span>
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">
                      ???{cart.cartTotalAmount.toFixed(2)}
                    </span>
                  </div>
                  <p>Taxes and shipping calculatd at checkpoint</p>
                  <button>Check out</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default DesktopCart;
