import { create } from "zustand";
import {
  EliminarCategorias,
  InsertarCategorias,
  MostrarCategorias,
  EditarCategorias,
} from "../supabase/CrudCategorias";

export const useCategoriasStore = create((set, get) => ({
  datacategorias: [],
  mostrarCategorias: async (p) => {
    const response = await MostrarCategorias(p);
    set({ datacategorias: response });
    return response;
  },
  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    await mostrarCategorias(p);
  },
  eliminarCategorias: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    await mostrarCategorias(p);
  },
  editarCategorias: async (p) => {
    await EditarCategorias(p);
    const { mostrarCategorias } = get();
    await mostrarCategorias(p);
  },
}));
