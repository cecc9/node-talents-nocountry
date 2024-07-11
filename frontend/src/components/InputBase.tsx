import { cva } from "class-variance-authority"
import styles from "../styles/base-input.module.scss"
import { useFormContext } from "react-hook-form"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    variant?: "primary" | "secondary"
    labelTxt: string
    id: string
    inputError?: string | any
    registerFn?: void | any
  }

export default function InputBase({
  variant,
  labelTxt,
  id,
  type,
  inputError,
  registerFn
}: InputProps): JSX.Element {
  // const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <label htmlFor={id} className={labelVariants({ variant })}>
        {labelTxt}
      </label>
      <input
        id={id}
        type={type}
        {...registerFn(id)}
        className={inputVariants({ variant })}
      />
      <p className={styles.inputError}>{inputError?.message}</p>
    </div>
  )
}

const labelVariants = cva(styles.labelBase, {
  variants: {
    variant: {
      primary: styles.labelPrimary,
      secondary: styles.labelSecondary
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

const inputVariants = cva(styles.inputBase, {
  variants: {
    variant: {
      primary: "flex-1 bg-gray-100 border border-gray-300 rounded-md p-2",
      // primary: styles.inputPrimary,
      secondary: styles.inputSecondary
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})
