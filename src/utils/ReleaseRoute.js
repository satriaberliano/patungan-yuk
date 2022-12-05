import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from './helper';

function ReleaseRoute({ children }) {
  const token = getAccessToken();

  if ((token)) {
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line no-unneeded-ternary
  return children ? children : <Outlet />;
}
export default ReleaseRoute;
