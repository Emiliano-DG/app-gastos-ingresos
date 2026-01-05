import { supabase } from "./supabase.config";
import Swal from "sweetalert2";

export const InsertarCategorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Ya existe un registro con " + p.descripcion,
        footer: '<a href="">Agregar una nueva descripcion</a>',
      });
    }
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Datos guardados",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.error("Error inesperado al insertar categoria:", err.message);
  }
};
