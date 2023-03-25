CREATE DATABASE blooddonationsystem;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE tipos_sanguineos CASCADE;
CREATE TABLE IF NOT EXISTS tipos_sanguineos(
    id VARCHAR(255) NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    tipo VARCHAR(255) NOT NULL,
    fator VARCHAR(255) NOT NULL,
    quantidade VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(id)
);

  INSERT INTO tipos_sanguineos (id,tipo,fator,quantidade,created_at, updated_at)
  SELECT 'g30od4f4-56ef-47de-cg44-37518f9q45j2','A','+', '1000', '2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'A' AND fator = '+'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'A','-','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'A' AND fator = '-'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'B','+','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'B' AND fator = '+'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'B','-','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'B' AND fator = '-'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'AB','+','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'AB' AND fator = '+'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'AB','-','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'AB' AND fator = '-'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'O','+','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'O' AND fator = '+'
  );

  INSERT INTO tipos_sanguineos (tipo,fator,quantidade,created_at, updated_at)
  SELECT 'O','-','0','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM tipos_sanguineos WHERE tipo = 'O' AND fator = '-'
  );

DROP TABLE pessoas CASCADE;

CREATE TABLE IF NOT EXISTS pessoas(
    id VARCHAR(255) NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    documento VARCHAR(255) NOT NULL UNIQUE,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    tipo_id  VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(tipo_id) REFERENCES tipos_sanguineos(id)
);

  INSERT INTO pessoas (id,nome, rua,numero,complemento, documento, cidade, estado, tipo_id, created_at, updated_at)
  SELECT 'g30od4f4-56ef-47de-cg44-37518f9q45j2','Gabriel','Avenida AABC','52', '', '31232132111', 'Matozinhos', 'MG', 'g30od4f4-56ef-47de-cg44-37518f9q45j2', '2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM pessoas WHERE id = 'g30od4f4-56ef-47de-cg44-37518f9q45j2'
  );
  INSERT INTO pessoas (nome, rua,numero,complemento, documento, cidade, estado, tipo_id, created_at, updated_at)
  SELECT 'Matheus','Avenida AABC','52', '', '43243243233', 'Matozinhos', 'MG', 'g30od4f4-56ef-47de-cg44-37518f9q45j2', '2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM pessoas WHERE nome = 'Matheus'
  );
  INSERT INTO pessoas (nome, rua,numero,complemento, documento, cidade, estado, tipo_id, created_at, updated_at)
  SELECT 'Guilherme','Avenida AABC','52', '', '88899933345', 'Matozinhos', 'MG', 'g30od4f4-56ef-47de-cg44-37518f9q45j2', '2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM pessoas WHERE nome = 'Guilherme'
  );

DROP TABLE locais_coleta CASCADE;

CREATE TABLE IF NOT EXISTS locais_coleta(
    id VARCHAR(255) NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL UNIQUE,
    complemento VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(id)
);

  INSERT INTO locais_coleta (id,nome, rua,numero,complemento, cidade, estado,  created_at, updated_at)
  SELECT 'g30od4f4-56ef-47de-cg44-37518f9q45j2','Coleta1','Avenida CCC','99', 'blocoB', 'Matozinhos', 'MG', '2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM locais_coleta WHERE id = 'g30od4f4-56ef-47de-cg44-37518f9q45j2'
  );

DROP TABLE doacoes CASCADE;

CREATE TABLE IF NOT EXISTS doacoes(
    id VARCHAR(255) NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    pessoa_id VARCHAR(255) NOT NULL,
    local_id VARCHAR(255) NOT NULL,
    data_doacao VARCHAR(255) NOT NULL,
    quantidade VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(pessoa_id) REFERENCES pessoas(id),
    FOREIGN KEY(local_id) REFERENCES locais_coleta(id)
);

  INSERT INTO doacoes (id, pessoa_id, local_id,quantidade, data_doacao, created_at, updated_at)
  SELECT 'g30od4f4-56ef-47de-cg44-37518f9q45j2','g30od4f4-56ef-47de-cg44-37518f9q45j2','g30od4f4-56ef-47de-cg44-37518f9q45j2', '1500', '2023-01-01 00:00:00','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM doacoes WHERE id = 'g30od4f4-56ef-47de-cg44-37518f9q45j2'
  );

  INSERT INTO doacoes (id, pessoa_id, local_id,quantidade, data_doacao, created_at, updated_at)
  SELECT 'g30od4f4-56ef-47de-cg44-37518f9q45j5','g30od4f4-56ef-47de-cg44-37518f9q45j2','g30od4f4-56ef-47de-cg44-37518f9q45j2', '1200', '2023-01-01 00:00:00','2023-01-01 00:00:00','2023-01-01 00:00:00'
  WHERE NOT EXISTS (
    SELECT 1 FROM doacoes WHERE id = 'g30od4f4-56ef-47de-cg44-37518f9q45j5'
  );
