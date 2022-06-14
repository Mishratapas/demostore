import {useSelector, useDispatch} from "react-redux";
import {Button, Grid, Typography} from "@mui/material";
import {BottomContainer, MyList} from "../../styles/cart";
import {Colors} from "../../styles/theme";
import {useEffect} from "react";
import {subTotal} from "../../services/cartSlice";

const MobileBottom = ({matches}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  return (
    <BottomContainer>
      <MyList>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h4" sx={{color: Colors.white}}>
              ${cart.cartTotalAmount.toFixed(2)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained">Subtotal</Button>
          </Grid>
        </Grid>
      </MyList>
    </BottomContainer>
  );
};

export default MobileBottom;
