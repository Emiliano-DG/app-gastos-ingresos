// useGuardarUsuarioAuth.js
import { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";
import { crearUsuarioConAuth } from "../supabase/CrudUsuarios";
import { supabase } from "../supabase/supabase.config";

export const useGuardarUsuarioAuth = () => {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const guardarUsuario = async () => {
      if (!user) return;
      try {
        // 1. Verificar si ya existe el usuario en la tabla
        const { data: existingUser, error } = await supabase
          .from("usuarios")
          .select("id")
          .eq("idauth_supabase", user.id)
          .maybeSingle(); // devuelve null si no hay coincidencia

        if (error) {
          console.error("Error verificando usuario:", error.message);
          return;
        }

        // 2. Si no existe, lo inserto
        if (!existingUser) {
          const dataProvider = {
            name: user?.user_metadata.full_name,
            picture: user?.user_metadata.avatar_url,
          };
          await crearUsuarioConAuth(dataProvider, user.id);
        }
      } catch (err) {
        console.error("Error en guardarUsuario:", err.message);
      }
    };

    guardarUsuario();
  }, [user]);
};
