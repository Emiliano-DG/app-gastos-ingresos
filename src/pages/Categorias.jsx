import { useQuery } from "@tanstack/react-query";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { usuarioStore } from "../store/usuarioStore";

export const Categorias = () => {
  const { datacategorias, mostrarCategorias } = useCategoriasStore();
  const { datausuario } = usuarioStore();
  const { isLoading, error } = useQuery({
    queryKey: ["categorias", datausuario?.id, "i"],
    queryFn: () => mostrarCategorias({ idusuario: datausuario.id, tipo: "i" }),
    enabled: !!datausuario?.id,
  });

  //TODO: manejar estados de carga y error
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error al cargar las categorias</div>;
  }

  return (
    <div className="h-screen ">
      <CategoriasTemplate data={datacategorias} />
    </div>
  );
};
