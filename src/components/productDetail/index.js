import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {Colors} from "../../styles/theme";

const SlideTransition = (props) => {
  return <Slide direction="down" {...props} />;
};

const ProductDetail = ({open, onClose, product}) => {
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanent"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{background: Colors.secondary}}>
        <Box display="flex" alignItems="center" justifyContent={"center"}>
          {product.name}
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
