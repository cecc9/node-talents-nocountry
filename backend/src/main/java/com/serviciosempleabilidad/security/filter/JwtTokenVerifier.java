package com.serviciosempleabilidad.security.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Collections;

public class JwtTokenVerifier extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authorizationHeader.replace("Bearer ", "");
        try {
            DecodedJWT decodedJWT = JWT.require(Algorithm.HMAC512("secret".getBytes()))
                    .build()
                    .verify(token);
            String username = decodedJWT.getSubject();
            String role = decodedJWT.getClaim("role").asString();

            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, Collections.singletonList(authority));
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (JWTVerificationException exception) {
            throw new IllegalStateException("Token no puede ser verificado");
        }

        filterChain.doFilter(request, response);
    }
}
