import { DataUser } from "./DataUser";

export const Header = ({ state, setState }) => {
  return (
    <div className="w-full flex items-center relative justify-end">
      <DataUser state={state} setState={setState} />
    </div>
  );
};
