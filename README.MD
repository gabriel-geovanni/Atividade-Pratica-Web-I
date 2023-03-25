# SISTEMA DE CONTROLE DE DOAÇÃO DE SANGUE
---

## Sistema Hemocentro
Hemocentro é uma aplicação que simula um sistema de doação de sangue dos postos de doação de sangue, possibilitando que os funcionarios possam cadastrar doadores e adicionar sua doações de sangue no sistema de forma simples e intuitiva. Além de poder cadastrar novos postos e atualizar os dados dos postos existentes.

Desenvolvido por Gabriel Geovanni para a disciplina Sistema Web I da UFOP. 

Professor Fernando Bernardes de Oliveira, Ph.D.

---

## Technologies
O projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Docker
- PostgreSQL
- Express
- React
- Vite
- Axios
- StyledComponents

---

## How to use

Para clonar e rodar essa aplicação é necessário ter o git, docker, node v18.14.2 ou superior, ... instalados na sua máquina.

```
# Clone this repository
$ git clone https://github.com/gabriel-geovanni/Atividade-Pratica-Web-I.git

# Go into the reposity
$ cd atividade-pratica
```

```
# Create PostgreSQL container
$ sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

```
# Go to docker terminal
$ docker exec -it pg bash

# Go to PostgreSQL container
$ psql -U root

# Then create the database and tables using scheme.sql to run the commands
```

Run Server:

```
# open server
$ cd server

# Install dependencies
$ npm install or yarn

# Start Server
$ yarn start

```
Run Web:

# open web
$ cd web1

# Install dependencies
$ npm install or yarn

# Start Web
$ yarn dev

