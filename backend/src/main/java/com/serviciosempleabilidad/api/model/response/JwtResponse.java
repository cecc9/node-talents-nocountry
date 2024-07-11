package com.serviciosempleabilidad.api.model.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String role;

    public JwtResponse(String token, String type, String role) {
        this.token = token;
        this.type = type;
        this.role = role;
    }
}
