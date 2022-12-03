import { Navigate } from 'react-router-dom';
import { getAccessToken } from './helper';

function ProtectedRoute(props) {
  const token = getAccessToken();

  if (!token) return <Navigate to="/info" />;
  return props.children;
}

export default ProtectedRoute;
