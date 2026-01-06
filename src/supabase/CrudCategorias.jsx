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

export const MostrarCategorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", p.idusuario)
      .eq("tipo", p.tipo)
      .order("id", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error inesperado al mostrar usuarios:", err.message);
    throw err;
  }
};

export const EliminarCategorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .delete()
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.error("Error inesperado al mostrar usuarios:", err.message);
    throw err;
  }
};

export const EditarCategorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .update()
      .eq("idusuario", p.idusuario)
      .eq("id", p.id);

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.error("Error inesperado al mostrar usuarios:", err.message);
    throw err;
  }
};
