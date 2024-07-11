package com.serviciosempleabilidad.security.service;

import com.serviciosempleabilidad.api.model.entidad.Usuario;
import com.serviciosempleabilidad.api.repository.UsuarioRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public UserDetailsServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        // Asignar el rol basado en el tipo de usuario
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + usuario.getTipoUsuario().toUpperCase());

        return new User(usuario.getEmail(), usuario.getContrasena(), Collections.singletonList(authority));
    }
}