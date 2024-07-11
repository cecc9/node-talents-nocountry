package com.serviciosempleabilidad.api.model.request;

import lombok.Getter;

@Getter
public class LoginRequest {
    // Getters y Setters
    private String email;
    private String contrasena;

    public void setUsername(String email) {
        this.email = email;
    }

    public void setPassword(String contrasena) {
        this.contrasena = contrasena;
    }
}