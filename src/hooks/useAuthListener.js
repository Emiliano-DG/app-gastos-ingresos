import { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";
import { supabase } from "../supabase/supabase.config";

// Hook personalizado para escuchar cambios de autenticación
export const useAuthListener = () => {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    // Verificar que supabase esté configurado correctamente
    if (!supabase) {
      console.error("❌ Supabase no está configurado correctamente");
      setSession(null); // Establecer loading en false para que la app pueda renderizar
      return;
    }

    //1. revisar si ya hay sesion activa
    supabase.auth
      .getSession()
      .then(({ data: { session }, error }) => {
        if (error) {
          console.error("Error al obtener sesión:", error.message);
          setSession(null);
          return;
        }
        setSession(session);
      })
      .catch((err) => {
        console.error("Error inesperado al obtener sesión:", err);
        setSession(null);
      });

    //2. Suscribirse a cambios de sesion
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    //3. Limpiar listener al desmontar
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [setSession]);
};
