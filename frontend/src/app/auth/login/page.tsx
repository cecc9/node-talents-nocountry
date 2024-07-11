import LoginForm from "@/components/login-form"
import Image from "next/image"

const LoginPage = () => {
  return (
    <div className="login-page">
      <figure className="login-page__logo">
        <Image
          src="/assets/Logo.webp"
          width={320}
          height={105}
          alt="Logo de pagina, Node"
        />
      </figure>
      <LoginForm />
    </div>
  )
}

export default LoginPage
