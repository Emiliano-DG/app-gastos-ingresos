import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { useAuthStore } from "../store/AuthStore";

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
      </Route>
    </Routes>
  );
};
