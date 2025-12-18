import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, redirectTo, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-bgtotal">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-Principal mx-auto mb-4"></div>
          <p className="text-text">Cargando sesión...</p>
        </div>
      </div>
    );
  }
  if (user == null) return <Navigate replace to={redirectTo} />;
  return <Outlet />;
};
