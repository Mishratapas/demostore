import {Form, Button, Alert} from "react-bootstrap";
import {GoogleButton} from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import {Box, Divider, Grid} from "@mui/material";

import {
  HeaderContainer,
  HeaderText,
  InputsContainer,
  LeftImage,
  LeftImageContainer,
  OuterContainer,
  SecondContainer,
} from "../../styles/validation";
import Footer from "../../2ndProject/components/footer/Footer";
import {useState} from "react";
import {useUserAuth} from "../../context/auth/UserAuthContext";

const DesktopLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logIn, googleSignIn} = useUserAuth();

  const handleSubmit = async (e) => {
    console.log("logged in");
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    console.log("logged in");
    e.preventDefault();
    setError("");
    try {
      await googleSignIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Box>
      <Grid container spacing={8}>
        <Grid item xs={6} md={6}>
          <LeftImageContainer elevation={5} sx={{marginLeft: "40px"}}>
            <LeftImage src="/images/bag.jpg" />
          </LeftImageContainer>
        </Grid>
        <Grid item xs={6} md={6}>
          <OuterContainer elevation={5}>
            <HeaderContainer>
              <HeaderText variant="h4">demostore</HeaderText>
            </HeaderContainer>
            <InputsContainer>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Log In
                  </Button>
                </div>
              </Form>
              <Divider flexItem style={{marginTop: "15px"}}>
                OR
              </Divider>
              <div className="d-flex justify-content-center mt-3">
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div>
            </InputsContainer>
          </OuterContainer>
          <SecondContainer>
            <div className="text-center">
              Don't have an account ? <Link to="/signup">Sign Up</Link>
            </div>
          </SecondContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DesktopLogIn;
