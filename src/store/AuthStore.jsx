import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,

  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
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
      // set({ isAuth: false, user: null });
    } catch (err) {
      console.error("Error en logout", err.message);
    }
  },

  setSession: (session) => {
    //actualizar el estado cuando supabase detecta sesion
    set({ isAuth: !!session, user: session?.user || null }); // !!{..} = true || !!null = false
  },
}));
