package com.serviciosempleabilidad.exceptions;

public class EmailExistsException extends RuntimeException {

    public EmailExistsException(String email) {
        super(String.format("El email ya existe: %s", email));
    }
}
