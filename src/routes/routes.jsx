import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { useAuthStore } from "../store/AuthStore";
import { Configuracion } from "../pages/Configuracion";
import { Categorias } from "../pages/Categorias";

export const MyRoutes = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        element={
          <ProtectedRoute user={user} redirectTo="/login" loading={loading} />
        }
      >
        <Route path="/" element={<Home />}></Route>
        <Route path="/configurar" element={<Configuracion />}></Route>
        <Route path="/categorias" element={<Categorias />}></Route>
      </Route>
    </Routes>
  );
};
