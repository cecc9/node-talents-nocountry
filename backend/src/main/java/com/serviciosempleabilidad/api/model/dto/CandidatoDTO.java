package com.serviciosempleabilidad.api.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CandidatoDTO {
    @NotBlank(message = "El nombre no puede estar vacío")
    @Size(max = 50)
    private String nombre;

    @NotBlank(message = "El apellido no puede estar vacío")
    @Size(max = 50)
    private String apellido;

    @NotBlank(message = "El email no puede estar vacío")
    @Email(message = "Formato de email inválido")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    private String contrasena;

    @NotBlank(message = "El país no puede estar vacío")
    @Size(max = 50)
    private String pais;

    @NotBlank(message = "La provincia no puede estar vacía")
    @Size(max = 50)
    private String provincia;
}