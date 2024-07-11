package com.serviciosempleabilidad.exceptions;

import java.util.UUID;

public class CandidatoNotFoundException extends RuntimeException {

    public CandidatoNotFoundException(UUID id) {
        super("No se encontró ningún candidato con el ID: " + id.toString());
    }
}