import {Form, Button, Alert} from "react-bootstrap";
import {GoogleButton} from "react-google-button";
import {Box, Divider} from "@mui/material";

import Footer from "../../components/footer";

import {
  HeaderContainer,
  HeaderText,
  InputsContainer,
  OuterContainer,
  SecondContainer,
} from "../../styles/validation";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useUserAuth} from "../../context/auth/UserAuthContext";

const MobileLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logIn, GoogleSignIn} = useUserAuth();

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
  return (
    <>
      <Box
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <OuterContainer elevation={5}>
          <HeaderContainer>
            <HeaderText variant="h4">demostore</HeaderText>
          </HeaderContainer>
          <InputsContainer>
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
              <GoogleButton className="g-btn" type="dark" />
            </div>
          </InputsContainer>
        </OuterContainer>
      </Box>
      <Box
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <SecondContainer>
          <div className="text-center">
            Don't have an account ? <Link to="/signup">Sign Up</Link>
          </div>
        </SecondContainer>
      </Box>
      <Box sx={{marginTop: "20px"}}>
        <Footer />
      </Box>
    </>
  );
};

export default MobileLogIn;
