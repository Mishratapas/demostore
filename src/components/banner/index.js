import {Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const {user} = useUserAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleGotoProducts = () => {
    if (!user) {
      navigate("/login");
      window.alert(
        "please signin to see product page!! Redirecting you to login page"
      );
    } else {
      navigate("/products");
    }
  };

  return (
    <BannerContainer>
      <BannerImage src="/images/banner.jpg" />
      <BannerContent>
        <Typography variant="h6">New Arrivals</Typography>
        <BannerTitle variant="h2">Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BannerDescription>
        <BannerShopButton onClick={() => handleGotoProducts()} color="primary">
          show now
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
