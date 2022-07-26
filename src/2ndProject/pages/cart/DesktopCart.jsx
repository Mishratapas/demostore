import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import "../../styles/cart/cart.css";

import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
  subTotal,
} from "../../services/cartSlice";
import {CartHeader} from "../../styles/cart";
import {Footer} from "../../components";

const DesktopCart = () => {
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Container>
        <div className="cart-container">
          <div className="header-container">
            <span>
              Your <ShoppingBagIcon htmlColor="#11804a" /> Cart
            </span>
          </div>
          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <span>
                Your <ShoppingBagIcon /> is Empty
              </span>
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
                          <button
                            onClick={() => handleRemoveFromCart(cartItem)}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">
                        ₹{Math.floor(cartItem.price * 70)}
                      </div>
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
                        ₹
                        {Math.floor(
                          cartItem.price * cartItem.cartQuantity * 70
                        )}
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
                        ${Math.floor(cart.cartTotalAmount.toFixed(2) * 70)}
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
      <Footer />
    </>
  );
};

export default DesktopCart;
