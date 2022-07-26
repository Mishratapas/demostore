import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/auth/UserAuthContext";

const ProtectedRoute = ({children}) => {
  const {user} = useUserAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    window.alert(
      "please signin to see product page!! Redirecting you to login page"
    );
  }

  return children;
};

export default ProtectedRoute;
