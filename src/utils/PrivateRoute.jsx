import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to={"/signin"} />;
}

export default PrivateRoute;
