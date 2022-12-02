/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getAccessToken } from './helper';

function ProtectedRoute(props) {
  const token = getAccessToken();

  if (!token) return <Navigate to="/info" />;
  return props.children;
}

export default ProtectedRoute;

// import { Navigate } from "react-router-dom";
// import { auth } from "../config/firebase-config";

// function ProtectedRoute(props){
//   const user = auth.currentUser;

//   if(!user) return <Navigate to='/info' />;
//   return props.children;

// }
// export default ProtectedRoute;
