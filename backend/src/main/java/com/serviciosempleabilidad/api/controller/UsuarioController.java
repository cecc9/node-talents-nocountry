package com.serviciosempleabilidad.api.controller;

import com.serviciosempleabilidad.api.model.dto.CandidatoDTO;
import com.serviciosempleabilidad.api.model.dto.EmpresaDTO;
import com.serviciosempleabilidad.api.model.entidad.Usuario;
import com.serviciosempleabilidad.api.service.UsuarioService;
import com.serviciosempleabilidad.exceptions.EmailExistsException;
import com.serviciosempleabilidad.security.auth.AuthenticationFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private AuthenticationFacade authenticationFacade;

    @PostMapping("/candidatos/registro")
    public ResponseEntity<?> registrarCandidato(@RequestBody CandidatoDTO candidatoDTO) {
        try {
            Usuario usuarioRegistrado = usuarioService.registrarCandidato(candidatoDTO);
            return ResponseEntity.ok(usuarioRegistrado);
        } catch (EmailExistsException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        }
    }

    @PutMapping("/candidatos/actualizar/{email}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> actualizarCandidatoPorEmail(@PathVariable String email, @RequestBody CandidatoDTO candidatoDTO) {
        try {
            Usuario usuarioActualizado = usuarioService.actualizarCandidatoPorEmail(email, candidatoDTO);
            return ResponseEntity.ok(usuarioActualizado);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PutMapping("/candidatos/actualizar/uuid/{uuid}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> actualizarCandidatoPorUUID(@PathVariable UUID uuid, @RequestBody CandidatoDTO candidatoDTO) {
        try {
            Usuario usuarioActualizado = usuarioService.actualizarCandidatoPorUUID(uuid, candidatoDTO);
            return ResponseEntity.ok(usuarioActualizado);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @DeleteMapping("/candidatos/eliminar/{email}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> eliminarCandidatoPorEmail(@PathVariable String email) {
        try {
            usuarioService.eliminarCandidatoPorEmail(email);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @DeleteMapping("/candidatos/eliminar/uuid/{uuid}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> eliminarCandidatoPorUUID(@PathVariable UUID uuid) {
        try {
            usuarioService.eliminarCandidatoPorUUID(uuid);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PostMapping("/empresas/registro")
    public ResponseEntity<?> registrarEmpresa(@RequestBody EmpresaDTO empresaDTO) {
        try {
            Usuario usuarioRegistrado = usuarioService.registrarEmpresa(empresaDTO);
            return ResponseEntity.ok(usuarioRegistrado);
        } catch (EmailExistsException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        }
    }

    @PutMapping("/empresas/actualizar/{email}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> actualizarEmpresaPorEmail(@PathVariable String email, @RequestBody EmpresaDTO empresaDTO) {
        try {
            Usuario usuarioActualizado = usuarioService.actualizarEmpresaPorEmail(email, empresaDTO);
            return ResponseEntity.ok(usuarioActualizado);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PutMapping("/empresas/actualizar/uuid/{uuid}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> actualizarEmpresaPorUUID(@PathVariable UUID uuid, @RequestBody EmpresaDTO empresaDTO) {
        try {
            Usuario usuarioActualizado = usuarioService.actualizarEmpresaPorUUID(uuid, empresaDTO);
            return ResponseEntity.ok(usuarioActualizado);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @DeleteMapping("/empresas/eliminar/{email}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> eliminarEmpresaPorEmail(@PathVariable String email) {
        try {
            usuarioService.eliminarEmpresaPorEmail(email);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @DeleteMapping("/empresas/eliminar/uuid/{uuid}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> eliminarEmpresaPorUUID(@PathVariable UUID uuid) {
        try {
            usuarioService.eliminarEmpresaPorUUID(uuid);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @GetMapping("/candidatos")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Usuario>> obtenerTodosLosCandidatos() {
        List<Usuario> candidatos = usuarioService.obtenerTodosLosCandidatos();
        return ResponseEntity.ok(candidatos);
    }

    @GetMapping("/empresas")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Usuario>> obtenerTodasLasEmpresas() {
        List<Usuario> empresas = usuarioService.obtenerTodasLasEmpresas();
        return ResponseEntity.ok(empresas);
    }

    @GetMapping("/mi-perfil")
    public ResponseEntity<Usuario> obtenerMiPerfil() {
        String email = authenticationFacade.getAuthentication().getName();
        Usuario usuario = usuarioService.obtenerDetallesDeUsuarioPorEmail(email);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/buscar/{email}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Usuario> buscarUsuarioPorEmail(@PathVariable String email) {
        Usuario usuario = usuarioService.obtenerUsuarioPorEmail(email);
        return ResponseEntity.ok(usuario);
    }
}