import { Navigate } from "react-router-dom";
// import { useGlobalStore } from '../hooks/useGlobalStore';
import { isTokenValid } from "../utils/auth.js";

function ProtectedRoute({ children }) {
  // const { store } = useGlobalStore();
  if (!isTokenValid()) return <Navigate to="/signin" />;
  return <>{children}</>;
}

export default ProtectedRoute;
