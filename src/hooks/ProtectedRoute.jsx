import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, redirectTo, loading }) => {
  if (loading) return <div>Cargando sesión...</div>;
  if (user == null) return <Navigate replace to={redirectTo} />;
  return <Outlet />;
};
