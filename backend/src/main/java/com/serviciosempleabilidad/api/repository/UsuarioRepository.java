package com.serviciosempleabilidad.api.repository;

import com.serviciosempleabilidad.api.model.entidad.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {
    // Método para buscar un usuario por su email
    Optional<Usuario> findByEmail(String email);


}
