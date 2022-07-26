import {useSelector, useDispatch} from "react-redux";
import {Grid, Typography} from "@mui/material";
import {MyList} from "../../styles/cart";

import {useEffect} from "react";
import {subTotal} from "../../services/cartSlice";
import {SubTotal} from "../../styles/cart";

const MobileBottom = ({matches}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const totalPrice = Math.floor(cart.cartTotalAmount * 70);

  return (
    <div className="bottom-container">
      <div div className="price-container">
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>
      <div className="button-container">
        <button>Sub total</button>
      </div>
    </div>
  );
};

export default MobileBottom;
