import { supabase } from "../supabase/supabase.config";
import { ObtenerIdAuthSupabase } from "./GlobalSupabase";
import Swal from "sweetalert2";

//INSERTA DATOS EN LA TABLA
export const InsertarUsuario = async (p) => {
  try {
    const { data, error } = await supabase.from("usuarios").insert(p).select();

    if (error) {
      console.error("Error de Supabase al insertar usuario:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Error inesperado al insertar usuario:", err.message);
    return null;
  }
};

//OBTIENE DATOS DE LA TABLA
export const MostrarUsuarios = async () => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", await ObtenerIdAuthSupabase())
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error inesperado al mostrar usuarios:", err.message);
    throw err;
  }
};

//INSERTA DATOS EN LA TABLA
export const crearUsuarioConAuth = async (dataProvider, idAuthSupabase) => {
  const p = {
    nombres: dataProvider.name,
    foto: dataProvider.picture,
    idauth_supabase: idAuthSupabase,
  };
  return await InsertarUsuario(p);
};

export const EditarTemaMonedaUser = async (p) => {
  try {
    const { error } = await supabase.from("usuarios").update(p).eq("id", p.id);

    if (error) {
      throw new Error(error.message);
    }

    //mostrar notificacion
    Swal.fire({
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    console.error("Error inesperado al editar tema y moneda:", err.message);
    throw err;
  }
};
