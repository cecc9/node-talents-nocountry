"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import Logo from "../../public/assets/Logo.webp";
import { useState } from "react";
import { ModalInput } from "@/types/modalInput";
import InputBase from "./InputBase";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCompanySchema } from "@/schemas/company/registerCompanySchema";
import customFetch from "@/utils/axios";
import { toast } from "react-toastify";
import Successful_Register from "./modals/Successful_Register";

// Tipo para los datos del formulario
type CompanyFormData = {
  companyName: string;
  businessType: string;
  email: string;
  password: string;
};

const companyRegisterInputs: ModalInput[] = [
  {
    id: "companyName",
    labelTxt: "Nombre de la Compañia",
    type: "text",
    placeholder: "Deloitte",
  },
  {
    id: "businessType",
    labelTxt: "Razon social",
    type: "text",
    placeholder: "Software Development",
  },
  {
    id: "email",
    labelTxt: "Email",
    type: "email",
    placeholder: "support@deloitte.org",
  },
  {
    id: "password",
    labelTxt: "Contraseña",
    type: "password",
    placeholder: "*********",
  },
];

function CompanyRegisterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(registerCompanySchema),
  });

  const onSubmit = async (data: CompanyFormData | any) => {
    const payload = {
      nombreEmpresa: data.companyName,
      razonSocial: data.businessType,
      email: data.email,
      contrasena: data.password,
    };

    try {
      const response = await customFetch.post("/empresas/registro", payload);
      console.log(response.data);
      setIsSubmitted(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Algo salio mal...`, error.response.data);
        if (error.response.data.error.includes("El email ya existe")) {
          setError("email", {
            type: "manual",
            message: "Por favor, usa otro email.",
          });
          toast.error(`El email ${data.email} ya existe.`);
        }
      } else {
        toast.error(`Error inesperado, ${error}`);
      }
    }
  };

  if (isSubmitted) {
    return <Successful_Register />;
  }

  return (
    <div className="form1">
      <Image src={Logo} className="nodeLogo" alt="Logo de pagina, Node" />
      <p>¡Comencemos creando tu cuenta Empresa!</p>
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        {companyRegisterInputs.map((input: ModalInput) => (
          <InputBase
            key={input.id}
            id={input.id}
            labelTxt={input.labelTxt}
            type={input.type}
            placeholder={input.placeholder}
            variant={"secondary"}
            inputError={errors[input.id]}
            registerFn={register}
          />
        ))}

        <button className="submitButton" type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}

export { CompanyRegisterForm };
