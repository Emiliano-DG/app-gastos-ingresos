import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

// Store de autenticación usando Zustand
export const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  loading: true,

  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/", // ajusta al puerto de tu proyecto
          queryParams: {
            prompt: "select_account", // para forzar selección de cuenta
          },
        },
      });
      if (error) throw error;
      return data;
    } catch (err) {
      console.error("Error en login", err.message);
      return null;
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (err) {
      console.error("Error en logout", err.message);
    }
  },

  setSession: (session) => {
    //actualizar el estado cuando supabase detecta sesion
    set({ isAuth: !!session, user: session?.user || null, loading: false }); // !!{..} = true || !!null = false
  },
}));
