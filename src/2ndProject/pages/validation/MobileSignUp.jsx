import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Form, Button, Alert} from "react-bootstrap";

import {Box} from "@mui/material";

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
            <HeaderText variant="h4">
              <font color="#FF0000">d</font>
              <font color="#FF8000">e</font>
              <font color="#FFFF00">m</font>
              <font color="#007940">o</font>
              <font color="#4040FF">s</font>
              <font color="#A000C0">t</font>
              <font color="#FF0000">o</font>
              <font color="#FF8000">r</font>
              <font color="#FFFF00">e</font>
            </HeaderText>
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
          <div className="text-center" style={{color: "var(--dark-blue"}}>
            Already have an account ? <Link to="/login">Log in</Link>
          </div>
        </SecondContainer>
      </Box>
    </>
  );
};

export default MobileSignUp;
