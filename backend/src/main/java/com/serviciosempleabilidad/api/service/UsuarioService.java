package com.serviciosempleabilidad.api.service;

import com.serviciosempleabilidad.api.model.dto.CandidatoDTO;
import com.serviciosempleabilidad.api.model.dto.EmpresaDTO;
import com.serviciosempleabilidad.api.model.entidad.Usuario;

import java.util.List;
import java.util.UUID;

public interface UsuarioService {
    Usuario registrarCandidato(CandidatoDTO candidatoDTO);
    Usuario actualizarCandidatoPorEmail(String email, CandidatoDTO candidatoDTO) throws Exception;
    Usuario actualizarCandidatoPorUUID(UUID uuid, CandidatoDTO candidatoDTO) throws Exception;
    void eliminarCandidatoPorEmail(String email) throws Exception;
    void eliminarCandidatoPorUUID(UUID uuid) throws Exception;

    Usuario registrarEmpresa(EmpresaDTO empresaDTO);
    Usuario actualizarEmpresaPorEmail(String email, EmpresaDTO empresaDTO) throws Exception;
    Usuario actualizarEmpresaPorUUID(UUID uuid, EmpresaDTO empresaDTO) throws Exception;
    void eliminarEmpresaPorEmail(String email) throws Exception;
    void eliminarEmpresaPorUUID(UUID uuid) throws Exception;

    List<Usuario> obtenerTodosLosCandidatos();
    List<Usuario> obtenerTodasLasEmpresas();
    Usuario obtenerUsuarioPorEmail(String email);

    Usuario obtenerDetallesDeUsuarioPorEmail(String email);

}
