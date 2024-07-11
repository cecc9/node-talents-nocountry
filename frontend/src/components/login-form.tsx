"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useDispatch } from "react-redux"
import { loginSuccess } from "../redux/features/authReducer"
import { useLoginVerificationMutation } from "../redux/features/authApi"

type FormData = {
  email: string
  contrasena: string
}

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import UserIcon from "./icons/user-icon"
import PadlockIcon from "./icons/padlock-icon"
import LoginFormInput from "./login-form-input"
import { type LoginInputsType, LoginSchema } from "@/schemas/loginSchema"

const LoginForm = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [
    loginVerification,
    { data: loginData, isSuccess: isSuccessLogin, error: errorLogin, isLoading }
  ] = useLoginVerificationMutation()
  // Destructure functions from useForm for handling form submission
  const form = useForm<LoginInputsType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema)
  })

  // Function to call on form submit
  const onSubmit = async (data: LoginInputsType) => {
    try {
      await loginVerification(data).unwrap()

      // Aquí se imprime en consola la respuesta completa del servidor
      console.log("Response data from the server:", loginData)

      if (isSuccessLogin) {
        localStorage.setItem("token", loginData.token)
        const base64Url = loginData.token.split(".")[1]
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
        const decodedPayload = JSON.parse(window.atob(base64))
        const role = decodedPayload.role
        dispatch(loginSuccess(loginData))

        // Redirige basado en el rol
        switch (role) {
          case "ROLE_ADMIN":
            router.push("/")
            break
          case "ROLE_CANDIDATO":
            router.push("/candidate/profile")
            break
          case "ROLE_EMPRESA":
            router.push("/company/profile")
            break
          default:
            console.log("Rol no reconocido")
        }
      } else {
        alert("Authentication failed: " + loginData.error)
        alert("Authentication failed: " + errorLogin)
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
    }
  }

  return (
    <div className="login-form">
      <h2 className="login-form__title">Ingresa a tu cuenta</h2>
      <FormProvider {...form}>
        <form
          className="login-form__form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <LoginFormInput
            labelIcon={<UserIcon />}
            placeholder="Usuario o correo"
            type="text"
            inputName="email"
            inputError={form.formState.errors.email!}
          />
          <LoginFormInput
            labelIcon={<PadlockIcon />}
            placeholder="Contraseña"
            type="password"
            inputName="password"
            inputError={form.formState.errors.password!}
          />
          <button type="submit" className="login-form__button">
            Ingresar
          </button>
        </form>
      </FormProvider>

      <p className="login-form__text">
        ¿No tenés cuenta?{" "}
        <Link href="/candidate/register" className="login-form__link">
          Registrate como candidato
        </Link>
      </p>

      <button
        onClick={() => router.push("/company/register")}
        className="login-form__company-button"
        disabled={isLoading}
      >
        Registrate como Empresa
      </button>
    </div>
  )
}

export default LoginForm
