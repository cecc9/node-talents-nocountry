package com.serviciosempleabilidad.api.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class EmpresaDTO {
    // Se asume que 'nombre' se refiere al nombre de la empresa.
    @NotBlank(message = "El nombre de la empresa no puede estar vacío")
    @Size(max = 255)
    private String nombreEmpresa;

    @NotBlank(message = "La razón social no puede estar vacía")
    @Size(max = 255)
    private String razonSocial;

    @NotBlank(message = "El CUIT no puede estar vacío")
    @Size(max = 50)
    private String cuit;

    @NotBlank(message = "El email no puede estar vacío")
    @Email(message = "Formato de email inválido")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    private String contrasena;

    @Size(max = 20)
    private String numeroTelefono;
}