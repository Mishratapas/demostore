import {useDispatch} from "react-redux";
import {Form, Button, Alert} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {Box, Grid} from "@mui/material";

import {
  HeaderContainer,
  HeaderText,
  InputsContainer,
  LeftImage,
  LeftImageContainer,
  OuterContainer,
  SecondContainer,
} from "../../styles/validation";
import Footer from "../../components/footer";
import {useState} from "react";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {getFirstName, getSecondName} from "../../services/nameSlice";

const DesktopLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {signUp} = useUserAuth();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log("logged in");
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
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
              {error && <Alert variant="danger">{error}s</Alert>}
            </HeaderContainer>
            <InputsContainer>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter First name (optional)"
                    onChange={(e) => dispatch(getFirstName(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Second name (optional)"
                    onChange={(e) => dispatch(getSecondName(e.target.value))}
                  />
                </Form.Group>
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
                    Sign up
                  </Button>
                </div>
              </Form>
            </InputsContainer>
          </OuterContainer>
          <SecondContainer>
            <div className="text-center">
              Already have an account ? <Link to="/login">Log in</Link>
            </div>
          </SecondContainer>
        </Grid>
      </Grid>
      <Box sx={{marginTop: "20px"}}>
        <Footer />
      </Box>
    </Box>
  );
};

export default DesktopLogIn;
