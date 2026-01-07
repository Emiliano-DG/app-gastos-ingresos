export function AccionTabla({ funcion, icono, color, fontSize }) {
  return (
    <span
      onClick={funcion}
      className="cursor-pointer hover:opacity-70"
      style={{ color: color }}
    >
      {icono}
    </span>
  );
}
