import { create } from "zustand";

export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtnDes: "Categorias ingresos",
  colorCategoria: "bg-ingresos",
  bgCategoria: "bg-bgingresos",
  setTipo: (tipo) => {
    set({
      tipo,
      tituloBtnDes: tipo === "i" ? "Categorias ingresos" : "Categorias gastos",
      colorCategoria: tipo === "i" ? "bg-ingresos" : "bg-gastos",
      bgCategoria: tipo === "i" ? "bg-bgingresos" : "bg-bggastos",
    });
  },
}));
