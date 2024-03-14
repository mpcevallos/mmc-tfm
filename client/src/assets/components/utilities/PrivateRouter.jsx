import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ({ token, redirectTo = "/login", children }) => {
  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRouter;
