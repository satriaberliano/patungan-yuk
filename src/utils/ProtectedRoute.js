import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from './helper';

function ProtectedRoute({ children }) {
  const token = getAccessToken();

  if (!token) return <Navigate to="/welcome" />;
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
