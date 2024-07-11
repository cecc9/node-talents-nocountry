package com.serviciosempleabilidad.api.model.entidad;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "contrasena", nullable = false)
    private String contrasena;

    @Column(name = "pais")
    private String pais;

    @Column(name = "provincia")
    private String provincia;

    @Column(name = "fechacreacion", nullable = false)
    private LocalDateTime fechacreacion;

    @Column(name = "ultimaactualizacion")
    private LocalDateTime ultimaactualizacion;

    @Column(name = "softdelete", nullable = false)
    private Boolean softdelete = false;

    @Column(name = "tipo_usuario", nullable = false)
    private String tipoUsuario;

    // Campos específicos para empresas
    @Column(name = "razon_social")
    private String razonSocial;

    @Column(name = "cuit")
    private String cuit;

    @Column(name = "numero_telefono")
    private String numeroTelefono;

    @PrePersist
    protected void onCreate() {
        this.fechacreacion = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.ultimaactualizacion = LocalDateTime.now();
    }
}
