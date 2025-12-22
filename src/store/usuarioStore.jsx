import { create } from "zustand";
import { MostrarUsuarios } from "../supabase/CrudUsuarios";

export const usuarioStore = create((set) => ({
  datausuarios: [],
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuarios: response });
    return response; // realizamos el return para usar tanStack
  },
}));
