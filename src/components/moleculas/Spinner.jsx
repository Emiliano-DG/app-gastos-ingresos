import { ClimbingBoxLoader } from "react-spinners";
import { useOperaciones } from "../../store/OperacionesStore";
export function Spinner() {
  const { colorCategoria } = useOperaciones();
  return (
    <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 z-[1000] bg-bg transform all 0.3s color-[#6df643]">
      <ClimbingBoxLoader color={colorCategoria} size={`100%`} />
    </div>
  );
}
