// "use client" se usa en Next.js para indicar que el componente o hook debe ejecutarse solo en el cliente.
"use client";

import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import Logo from "../../public/assets/Logo.webp";
import React, { useState } from "react";
import InputBase from "./InputBase";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCandidateSchema } from "@/schemas/registerSchema";
import Successful_Register from "./modals/Successful_Register";
import customFetch from "@/utils/axios";
import { toast } from "react-toastify";

// Interface para los datos del formulario
interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  province: string;
  country: string;
}

function CandidateRegisterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(registerCandidateSchema),
  });

  // console.log(errors);

  const onSubmit = async (data: FormData) => {
    const payload = {
      nombre: data.name,
      apellido: data.surname,
      email: data.email,
      contrasena: data.password,
      pais: data.country,
      provincia: data.province,
      tipoUsuario: "candidato",
    };

    try {
      const response = await customFetch.post("/candidatos/registro", payload);
      // console.log(response.data);
      setIsSubmitted(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          `Lo sentimos, error en la respuesta del servidor...`,
          error.response.data
        );
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
      <Image
        src={Logo}
        alt="Logo de pagina, Node"
        className="nodeLogo"
        priority
      />
      <p>¡Comencemos creando tu cuenta!</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          <InputBase
            type="text"
            placeholder="Juan"
            labelTxt="Nombre"
            inputError={errors.name}
            id="name"
            variant="secondary"
            registerFn={register}
          />
          <InputBase
            type="text"
            placeholder="Osorio"
            labelTxt="Apellidos"
            inputError={errors.surname}
            id="surname"
            name="surname"
            variant="secondary"
            registerFn={register}
          />
          <InputBase
            type="email"
            placeholder="sample@example.com"
            labelTxt="Email"
            inputError={errors.email}
            id="email"
            name="email"
            variant="secondary"
            registerFn={register}
          />
          <InputBase
            type="password"
            placeholder="sample@example.com"
            labelTxt="Contraseña"
            inputError={errors.password}
            id="password"
            name="password"
            variant="secondary"
            registerFn={register}
          />
          <InputBase
            type="text"
            placeholder="Costa Rica"
            labelTxt="País"
            inputError={errors.country}
            id="country"
            name="country"
            variant="secondary"
            registerFn={register}
          />
          <InputBase
            type="text"
            placeholder="Le province"
            labelTxt="Provincia"
            inputError={errors.province}
            id="province"
            name="province"
            variant="secondary"
            registerFn={register}
          />

          <button className="submitButton" type="submit">
            Continuar
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export { CandidateRegisterForm };
