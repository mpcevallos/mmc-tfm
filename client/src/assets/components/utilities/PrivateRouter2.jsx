// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRouter = ({ element }) => {
//   const { state } = useLocation();
//   const isAuthenticated = !!state?.token;

//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRouter;

// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRouter = ({ canActivate, redirectPath = "/login" }) => {
//   if (!canActivate) {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return <Outlet />;
// };

// export default PrivateRouter;

// import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ Dashboard }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Authentication logic
//   useEffect(() => {
//     // Check if token exists in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Perform additional checks if needed (e.g., token expiration)
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []); // Run only once on component mount

//   return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
