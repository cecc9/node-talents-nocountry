interface InputProps {
  styleName: string
  type: string
  name: string
  value?: string
  labelText?: string
  list?: string[]
  register?: any
  inputError?: any
}

function FormInput({
  styleName,
  type,
  name,
  labelText,
  list,
  register,
  inputError
}: InputProps) {
  return (
    <div className={styleName}>
      <label htmlFor={name}>{labelText || name}</label>
      {list ? (
        <select
          name={name}
          id={name}
          // onChange={handleChange}
          className="form-select"
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            )
          })}
        </select>
      ) : (
        <input
          type={type}
          {...register(`${name}`, {
            required: {
              value: true,
              message: `${labelText || name} requerido`
            },
            minLength: {
              value: 2,
              message: "Tiene que tener un minimo de 2 caracteres"
            },
            maxLength: {
              value: 20,
              message: "Tiene un maximo de 20 caracteres"
            }
          })}
        />
      )}
      <span>{inputError && inputError.message}</span>
    </div>
  )
}

export { FormInput }
