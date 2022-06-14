import {Box, Container} from "@mui/material";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {getData} from "../../services/dataSlice";
import {ButtonText} from "../../styles/products";

import {subTotal} from "../../services/cartSlice";
import {useUserAuth} from "../../context/auth/UserAuthContext";

const Products = () => {
  const {user} = useUserAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleClick = () => {
    if (!user) {
      alert(
        "please login to visit product page!! Redirecting you to login page"
      );
      navigate("/login");
    } else {
      navigate("/products");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => handleClick()}
      >
        <ButtonText variant="contained">
          Go to Products
          <ArrowRightAltIcon />
        </ButtonText>
      </Box>
    </Container>
  );
};

export default Products;
