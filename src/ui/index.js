import {Box, IconButton, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Colors} from "../styles/theme";
import {clamp} from "./clamp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../services/cartSlice";

export default function IncDec() {
  const dispatch = useDispatch();
  const clampV = clamp(1, 10);
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    setValue(clampV(value - 1));
    let cartQuantity = value;
    console.log(cartQuantity);
    dispatch(decreaseCartQuantity(cartQuantity));
  };

  const handleIncrement = () => {
    setValue(clampV(value + 1));
    dispatch(increaseCartQuantity(value));
  };

  return (
    <Box display="flex">
      <IconButton
        sx={{borderRadius: 0, background: `${Colors.secondary}`}}
        onClick={() => {
          handleDecrement();
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{border: `1px solid ${Colors.secondary}`, p: 2}}
      >
        {value}
      </Typography>
      <IconButton
        sx={{borderRadius: 0, background: `${Colors.secondary}`}}
        onClick={() => {
          handleIncrement();
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
