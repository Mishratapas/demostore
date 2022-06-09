import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

import {FooterTitle, SubscribeTf} from "../../styles/footer";
import {Colors} from "../../styles/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.shaft,
        color: Colors.white,
        p: {xs: 4, md: 10},
        pt: 12,
        pb: 12,
        fontSize: {xs: "12px", md: "14px"},
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
          <Box sx={{mt: 4, color: Colors.dove_gray}}>
            <FacebookIcon sx={{mr: 1}} />
            <InstagramIcon sx={{mr: 1}} />
            <TwitterIcon sx={{mr: 1}} />
            <GoogleIcon sx={{mr: 1}} />
            <GitHubIcon sx={{mr: 1}} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Order tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                privacy &amp; polices
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                terms &amp; conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Log in
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                My cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                My details
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email Address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{color: Colors.white}} />}
              sx={{mt: 4, mb: 4}}
              variant="contained"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
