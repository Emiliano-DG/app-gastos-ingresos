import { supabase } from "../supabase/supabase.config";

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

export const crearUsuarioConAuth = async (dataProvider, idAuthSupabase) => {
  const p = {
    nombres: dataProvider.name,
    foto: dataProvider.picture,
    idauth_supabase: idAuthSupabase,
  };
  return await InsertarUsuario(p);
};
