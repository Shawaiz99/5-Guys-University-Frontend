import { Navigate } from 'react-router';
import { useGlobalStore } from '../hooks/useGlobalStore';
import { isTokenValid } from '../utils/auth.js';

function ProtectedRoute({ children }) {
  // const { store } = useGlobalStore();
  if (!isTokenValid()) return <Navigate to="/login" />;
  return <>{children}</>;
}

export default ProtectedRoute;
