CREATE DATABASE blooddonationsystem;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS tipos_sanguineos(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	tipo VARCHAR(255) NOT NULL,
	fator VARCHAR(255) NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS pessoas(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	nome VARCHAR(255) NOT NULL,
	rua VARCHAR(255) NOT NULL,
	numero VARCHAR(255) NOT NULL,
	complemento VARCHAR(255),
	documento VARCHAR(255) NOT NULL UNIQUE,
	cidade VARCHAR(255) NOT NULL,
	estado VARCHAR(2) NOT NULL,
	tipo_id NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(tipo_id) REFERENCES tipos_sanguineos(id)
);

CREATE TABLE IF NOT EXISTS locais_coleta(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
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

CREATE TABLE IF NOT EXISTS doacoes(
	id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
	pessoa_id UUID NOT NULL,
	local_id UUID NOT NULL,
	data_doacao DATE NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(pessoa_id) REFERENCES pessoas(id),
	FOREIGN KEY(local_id) REFERENCES locais_coleta(id)
);