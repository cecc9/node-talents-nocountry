package com.serviciosempleabilidad.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders(
                        "Authorization",
                        "Content-Type",
                        "Cache-Control",
                        "X-Requested-With",
                        "X-IDP-New-Login"
                )
                .allowCredentials(true)
                .maxAge(3600); // Permite el almacenamiento en caché de la respuesta de preflight durante 3600 segundos
    }
}