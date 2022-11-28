import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";

function ProtectedRoute(props){
  const user = auth.currentUser;

  if(!user) return <Navigate to='/info' />;
  return props.children;

}
export default ProtectedRoute;
