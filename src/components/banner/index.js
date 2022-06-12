import {Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
        <BannerShopButton color="primary">show now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
