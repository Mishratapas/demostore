import {Grid, useMediaQuery, useTheme} from "@mui/material";
import {BoxContainer, ErrorHeading, ErrorText} from "../../styles/notfound";
import AppBar from "../appbar";

const NotFound = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar />
      <Grid
        container
        columns={2}
        spac
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BoxContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ErrorText>Page Not Found</ErrorText>
        </BoxContainer>
      </Grid>
    </>
  );
};

export default NotFound;
