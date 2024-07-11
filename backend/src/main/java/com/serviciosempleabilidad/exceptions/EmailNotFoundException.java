package com.serviciosempleabilidad.exceptions;

public class EmailNotFoundException extends RuntimeException {

    public EmailNotFoundException(String email) {
        super("No se encontró ningún candidato con el email: " + email);
    }
}