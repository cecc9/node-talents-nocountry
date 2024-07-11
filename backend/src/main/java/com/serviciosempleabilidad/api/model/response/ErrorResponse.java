package com.serviciosempleabilidad.api.model.response;

public class ErrorResponse {
    private String error;

    public ErrorResponse(String error) {
        this.error = error;
    }

    // Getter y Setter
    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
