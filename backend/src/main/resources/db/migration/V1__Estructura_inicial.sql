-- Flyway migration script
-- Version: 001
-- Description: Create usuarios table with both candidato and empresa fields, including admin user

-- Assuming you are using a PostgreSQL database
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear tabla nueva usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50),
    email VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    pais VARCHAR(50),
    provincia VARCHAR(50),
    fechacreacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ultimaactualizacion TIMESTAMP,
    softdelete BOOLEAN NOT NULL DEFAULT FALSE,
    tipo_usuario VARCHAR(10) NOT NULL,
    razon_social VARCHAR(255),
    cuit VARCHAR(50),
    numero_telefono VARCHAR(20)
    );

-- Poblar la tabla con un usuario admin por defecto
INSERT INTO usuarios (nombre, email, contrasena, tipo_usuario)
VALUES ('Admin', 'admin@admin.com', '$2a$10$f6s4xcAB6jazNSWjztl15u2RDyctxM/g9HTaVEYuMCpV/TmVDJczi', 'admin')
    ON CONFLICT (email) DO NOTHING;