import { create } from "zustand";

export const useOperaciones = create((set) => ({
  tipo: "i",
  tituloBtnDes: "Categorias ingresos",
  colorCategoria: "bg-ingresos",
  bgCategoria: "bg-bgingresos",
  setTipo: (tipo) => {
    set({
      tipo,
      tituloBtnDes: tipo.text,
      colorCategoria: tipo.color,
      bgCategoria: tipo.backgound,
    });
  },
}));
