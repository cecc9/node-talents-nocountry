package com.serviciosempleabilidad.api.service;

import com.serviciosempleabilidad.api.model.dto.CandidatoDTO;
import com.serviciosempleabilidad.api.model.dto.EmpresaDTO;
import com.serviciosempleabilidad.api.model.entidad.Usuario;
import com.serviciosempleabilidad.api.repository.UsuarioRepository;
import com.serviciosempleabilidad.exceptions.EmailExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Usuario registrarCandidato(CandidatoDTO candidatoDTO) {
        if (usuarioRepository.findByEmail(candidatoDTO.getEmail()).isPresent()) {
            throw new EmailExistsException(candidatoDTO.getEmail());
        }
        Usuario usuario = new Usuario();
        usuario.setNombre(candidatoDTO.getNombre());
        usuario.setApellido(candidatoDTO.getApellido());
        usuario.setEmail(candidatoDTO.getEmail());
        usuario.setContrasena(passwordEncoder.encode(candidatoDTO.getContrasena()));
        usuario.setPais(candidatoDTO.getPais());
        usuario.setProvincia(candidatoDTO.getProvincia());
        usuario.setTipoUsuario("candidato");
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario actualizarCandidatoPorEmail(String email, CandidatoDTO candidatoDTO) throws Exception {
        return usuarioRepository.findByEmail(email).map(usuario -> {
            actualizarDatosUsuarioDesdeDTO(usuario, candidatoDTO);
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new Exception("No se encuentra el usuario con el email: " + email));
    }

    @Override
    public Usuario actualizarCandidatoPorUUID(UUID uuid, CandidatoDTO candidatoDTO) throws Exception {
        return usuarioRepository.findById(uuid).map(usuario -> {
            actualizarDatosUsuarioDesdeDTO(usuario, candidatoDTO);
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new Exception("No se encuentra el usuario con el UUID: " + uuid));
    }

    @Override
    public void eliminarCandidatoPorEmail(String email) throws Exception {
        Usuario usuario = usuarioRepository.findByEmail(email).orElseThrow(() -> new Exception("No se encuentra el usuario con el email: " + email));
        usuarioRepository.delete(usuario);
    }

    @Override
    public void eliminarCandidatoPorUUID(UUID uuid) throws Exception {
        Usuario usuario = usuarioRepository.findById(uuid).orElseThrow(() -> new Exception("No se encuentra el usuario con el UUID: " + uuid));
        usuarioRepository.delete(usuario);
    }

    private void actualizarDatosUsuarioDesdeDTO(Usuario usuario, CandidatoDTO candidatoDTO) {
        usuario.setNombre(candidatoDTO.getNombre());
        usuario.setApellido(candidatoDTO.getApellido());
        usuario.setEmail(candidatoDTO.getEmail());
        usuario.setContrasena(passwordEncoder.encode(candidatoDTO.getContrasena()));
        usuario.setPais(candidatoDTO.getPais());
        usuario.setProvincia(candidatoDTO.getProvincia());
    }

    @Override
    public Usuario registrarEmpresa(EmpresaDTO empresaDTO) {
        if (usuarioRepository.findByEmail(empresaDTO.getEmail()).isPresent()) {
            throw new EmailExistsException(empresaDTO.getEmail());
        }
        Usuario usuario = new Usuario();
        usuario.setNombre(empresaDTO.getNombreEmpresa());
        usuario.setEmail(empresaDTO.getEmail());
        usuario.setContrasena(passwordEncoder.encode(empresaDTO.getContrasena()));
        usuario.setRazonSocial(empresaDTO.getRazonSocial());
        usuario.setTipoUsuario("empresa");
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario actualizarEmpresaPorEmail(String email, EmpresaDTO empresaDTO) throws Exception {
        return usuarioRepository.findByEmail(email).map(usuario -> {
            actualizarDatosEmpresaDesdeDTO(usuario, empresaDTO);
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new Exception("No se encuentra la empresa con el email: " + email));
    }

    @Override
    public Usuario actualizarEmpresaPorUUID(UUID uuid, EmpresaDTO empresaDTO) throws Exception {
        return usuarioRepository.findById(uuid).map(usuario -> {
            actualizarDatosEmpresaDesdeDTO(usuario, empresaDTO);
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new Exception("No se encuentra la empresa con el UUID: " + uuid));
    }

    @Override
    public void eliminarEmpresaPorEmail(String email) throws Exception {
        Usuario usuario = usuarioRepository.findByEmail(email).orElseThrow(() -> new Exception("No se encuentra la empresa con el email: " + email));
        usuarioRepository.delete(usuario);
    }

    @Override
    public void eliminarEmpresaPorUUID(UUID uuid) throws Exception {
        Usuario usuario = usuarioRepository.findById(uuid).orElseThrow(() -> new Exception("No se encuentra la empresa con el UUID: " + uuid));
        usuarioRepository.delete(usuario);
    }

    private void actualizarDatosEmpresaDesdeDTO(Usuario usuario, EmpresaDTO empresaDTO) {
        usuario.setNombre(empresaDTO.getNombreEmpresa());
        usuario.setEmail(empresaDTO.getEmail());
        usuario.setContrasena(passwordEncoder.encode(empresaDTO.getContrasena()));
        usuario.setRazonSocial(empresaDTO.getRazonSocial());
        usuario.setTipoUsuario("empresa");
    }

    @Override
    public List<Usuario> obtenerTodosLosCandidatos() {
        return usuarioRepository.findAll().stream()
                .filter(usuario -> "candidato".equals(usuario.getTipoUsuario()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Usuario> obtenerTodasLasEmpresas() {
        return usuarioRepository.findAll().stream()
                .filter(usuario -> "empresa".equals(usuario.getTipoUsuario()))
                .collect(Collectors.toList());
    }

    @Override
    public Usuario obtenerDetallesDeUsuarioPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("No user found with email: " + email));
    }

    @Override
    public Usuario obtenerUsuarioPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("No user found with email: " + email));
    }
}