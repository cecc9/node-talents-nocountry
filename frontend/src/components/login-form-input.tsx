import { InputHTMLAttributes, ReactNode } from "react"
import { FieldError, useFormContext } from "react-hook-form"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelIcon: ReactNode
  inputName: string
  inputError: FieldError
}

const LoginFormInput = ({
  labelIcon,
  inputName,
  inputError,
  ...props
}: Props) => {
  const { register } = useFormContext()

  return (
    <div className="input">
      <label className="input__label">
        <span className="input__icon">{labelIcon}</span>
        <input {...register(inputName)} {...props} className="input__field" />
      </label>
      <span className="input__error">{inputError?.message}</span>
    </div>
  )
}

export default LoginFormInput
