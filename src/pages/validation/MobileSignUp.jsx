import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Form, Button, Alert} from "react-bootstrap";

import {Box} from "@mui/material";
import Footer from "../../components/footer";

import {
  HeaderContainer,
  HeaderText,
  InputsContainer,
  OuterContainer,
  SecondContainer,
} from "../../styles/validation";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {getFirstName, getSecondName} from "../../services/nameSlice";

const MobileSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {signUp} = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <OuterContainer>
          <HeaderContainer>
            <HeaderText variant="h4">demostore</HeaderText>
            {error && <Alert variant="danger">{error}</Alert>}
          </HeaderContainer>
          <InputsContainer>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="name"
                  placeholder="Enter First Name (Optional)"
                  onChange={(e) => dispatch(getFirstName(e.target.value))}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="name"
                  placeholder="Enter Last Name (Optional)"
                  onChange={(e) => dispatch(getSecondName(e.target.value))}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
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
      </Box>
      <Box
        sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <SecondContainer>
          <div className="text-center">
            Already have an account ? <Link to="/login">Log in</Link>
          </div>
        </SecondContainer>
      </Box>
      <Box sx={{marginTop: "20px"}}>
        <Footer />
      </Box>
    </>
  );
};

export default MobileSignUp;
