export function InputText({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
}) {
  return (
    <div className="relative">
      <input
        className="bg-bgtotal font-16px block  pt-2.5 pr-2.5 pl-2.5 pb-1 border-b border-b-gray-500 text-text  focus-within:border-b-transparent"
        style={style}
        onChange={onChange}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register("descripcion", { required: true, minLength: 2 })}
      ></input>

      {errors.descripcion?.type === "required" && (
        <p class="text-[#ff6d00] text-[12px]">Campo requerido</p>
      )}
      {errors.descripcion?.type === "minLength" && (
        <p class="text-[#ff6d00] text-[12px]">
          Debe tener al menos 2 caracteres
        </p>
      )}
    </div>
  );
}
