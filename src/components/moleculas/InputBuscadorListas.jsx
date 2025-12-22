export const InputBuscadorListas = ({ onChange, placeholder }) => {
  return (
    <div className="relative bg-bgtotal font-16px block pt-2.5 pr-2.5 pl-2.5 pb-1  border-b border-b-gray-500 text-text  focus-within:border-b-transparent">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-full  outline-none border-none focus:border-0 focus:outline-none focus:ring-0"
      />
    </div>
  );
};
