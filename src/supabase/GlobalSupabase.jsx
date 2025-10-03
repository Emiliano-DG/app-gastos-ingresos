import { supabase } from "../supabase/supabase.config";

export const ObtenerIdAuthSupabase = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error al obtener sesión:", error.message);
    return null;
  }
  if (session?.user) {
    return session.user.id;
  }
};
