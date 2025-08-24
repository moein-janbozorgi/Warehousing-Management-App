import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";

const ProtectedRoute = ({ children }) => {
  const token = getCookie("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
