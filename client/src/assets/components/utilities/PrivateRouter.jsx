import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../context/store";

export const PrivateRouter = ({ redirectTo = "/login" }) => {
  const { user } = useStore();
  return user ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRouter;
