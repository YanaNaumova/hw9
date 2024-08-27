function UIInput({
  divClassName,
  htmlFor,
  labelTitle,
  className,
  type,
  id,
  register,
  name,
  validation,
  placeholder,
  errors,
}) {
  return (
    <div className={divClassName}>
      <label htmlFor={htmlFor}>{labelTitle} </label>
      <input
        className={className}
        type={type}
        id={id}
        {...register(name, validation)}
        placeholder={placeholder}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}
export default UIInput;
