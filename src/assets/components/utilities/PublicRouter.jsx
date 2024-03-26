import { Outlet, Navigate } from "react-router-dom";
import { useStore } from "../../context/store";

const PublicRouter = () => {
  const { user } = useStore();
  return user ? <Navigate to="/login" /> : <Outlet />;
};

export default PublicRouter;
