import {useNavigate} from "react-router-dom";

export default function useRoute() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goProducts = () => {
    navigate("/products");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const goLogIn = () => {
    navigate("/login");
  };
  const goSignUp = () => {
    navigate("/signup");
  };
  return [goHome, goProducts, goCart, goLogIn, goSignUp];
}
