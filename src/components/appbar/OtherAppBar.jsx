import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  OtherAppBarContainer,
  OtherAppBarHeader,
  OtherAppBarLeft,
} from "../../styles/appbar";
import useRoute from "../../hooks/useRoute";
import {subTotal} from "../../services/cartSlice";
import {useEffect} from "react";

const OtherAppBar = () => {
  const dispatch = useDispatch();
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  const [goHome] = useRoute();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch]);

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <OtherAppBarContainer>
      <OtherAppBarLeft onClick={goHome}>
        <KeyboardBackspaceIcon /> Home
      </OtherAppBarLeft>
      <OtherAppBarHeader>demoStore</OtherAppBarHeader>
      <OtherAppBarLeft onClick={handleClick}>
        <ShoppingCartIcon /> ({cartTotalQuantity})
      </OtherAppBarLeft>
    </OtherAppBarContainer>
  );
};

export default OtherAppBar;
