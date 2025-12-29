import { create } from "zustand";
import {
  EditarTemaMonedaUser,
  MostrarUsuarios,
} from "../supabase/CrudUsuarios";

export const usuarioStore = create((set) => ({
  datausuario: null,
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ datausuario: response });
    return response; // realizamos el return para usar tanStack
  },
  editartemamonedaUser: async (p) => {
    await EditarTemaMonedaUser(p);
  },
}));
