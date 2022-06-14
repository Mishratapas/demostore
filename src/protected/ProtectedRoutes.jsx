import {Dialog} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/auth/UserAuthContext";

const ProtectedRoutes = ({children}) => {
  const {user} = useUserAuth();
  const navigate = useNavigate();

  if (!user) {
    return navigate("/login");
  }

  return children;
};

export default ProtectedRoutes;
