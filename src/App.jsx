import { useState } from "react";
import { useAuthListener } from "./hooks/useAuthListener";
import { MyRoutes } from "./routes/routes";
import { Sidebar } from "./components/organismos/sidebar/Sidebar";
import { MenuHambur } from "./components/organismos/MenuHambur";
import { useGuardarUsuarioAuth } from "./hooks/useGuardarUsuarioAuth";
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { usuarioStore } from "./store/usuarioStore";

function App() {
  useAuthListener(); // escucha los cambios de sesión en Supabase y actualiza tu AuthStore.
  useGuardarUsuarioAuth(); // guarda en la tabla usuarios si hay login
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation(); // obtener la ruta actual
  const { mostrarUsuarios, datausuario } = usuarioStore(); // obtener la función mostrarUsuarios

  // Usar useQuery para obtener los usuarios y mantenerlos actualizados
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarUsuarios,
  });

  //TODO: hacer un spinner o algo mientras carga
  if (isLoading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error al cargar usuarios: {error.message}</div>;
  if (!datausuario) return null;

  return (
    <>
      {pathname != "/login" ? (
        <div
          className={` bg-bgtotal h-screen flex flex-col md:grid  grid-cols-1  transition-[grid-template-columns] duration-300 ease-in-out ${
            sidebarOpen
              ? "md:grid-cols-[180px_1fr]"
              : "md:grid-cols-[65px_1fr] "
          }`}
        >
          {/* SIDEBAR */}
          <div className="hidden md:block">
            <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
          </div>

          {/* MENU HAMBURGUESA */}
          <div className=" absolute left-5 top-5 md:hidden">
            <MenuHambur />
          </div>

          {/* MY ROUTES */}
          <div className="w-full md:col-start-2">
            <MyRoutes />
          </div>
        </div>
      ) : (
        <MyRoutes />
      )}
    </>
  );
}

export default App;
