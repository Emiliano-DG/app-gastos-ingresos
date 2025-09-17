import { useEffect } from "react";
import { useAuthStore } from "../store/AuthStore";
import { supabase } from "../supabase/supabase.config";

export const useAuthListener = () => {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    //1. revisar si ya hay sesion activa
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    //2. Suscribirse a cambios de sesion
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    //3. Limpiar listener al desmontar
    return () => {
      subscription.unsubscribe();
    };
  }, [setSession]);
};
