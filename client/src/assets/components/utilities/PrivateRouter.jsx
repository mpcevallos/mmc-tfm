import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = ({ redirectTo = "/login" }) => {
  // Verifica si hay un token almacenado en localStorage
  const token = localStorage.getItem("token");

  // Si hay un token, permite el acceso a la ruta protegida (renderiza el Outlet)
  // Si no hay token, redirige al usuario a la página de inicio de sesión
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRouter;
