# 🎲 Rodando no Back End (servidor)

#### Instale as dependências
 $ npm install

### Execute a aplicação em modo de desenvolvimento
 $ npm run dev

### O servidor inciará na porta:3000 - acesse <http://localhost:3000>

### Inciar Servidor
 $ npm run dev

## Instalações ultilizada na aplicação

 $ npm init -y
 $ npx eslint --init
 $ npm i nodemon sucrase --save-dev
 $ npm i express
 $ npm i dotenv
 $ npm i sequelize mariadb
 $ npm i -D sequelize-cli
 $ npm i bcryptjs
 $ npm i jsonwebtoken
 $ npm i multer
 $ npm i cors helmet

==============================================================================
## Criando migrations com sequelize

 $ npx sequelize migration:create --name=alunos <!--Cria o migrations -->
 $ npx sequelize db:migrate <!--Cria e atualiza a migração para o mysql -->
 $ npx sequelize db:migrate:undo <!--Desfazer a migração -->
 $ npx sequelize migration:create --name=mudar-email-aluno-unique <!-- Adicionando unique no email do Aluno -->

## Criando seed's com sequelize
 $ npx sequelize seed:generate --name criar-usuarios <!--Cria o Seeds -->
 $ npx sequelize db:seed:all <!-- Criando base de dados e enviando pro mysql-->
==============================================================================

### 🚀 Tecnologias 🚀

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [Insomnia](https://insomnia.rest/)

### 🚧 Banco de Dados 🚧

- [MySQL](https://www.mysql.com/)

### Features

- [x] Cadastro de Usuário
- [x] Cadastro de Aluno
- [x] Cadastro de Foto
- [x] Authenticação

🛠 Manage Environments (Insomnia);

{
	"base_url": "http://localhost:3000",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoiYWxpc3Nvbi5kZWxhdGltQGhvdG1haWwuY29tIiwiaWF0IjoxNjQ1MTQzNjg2LCJleHAiOjE2NDU3NDg0ODZ9.AYtDTKrmLgIrkbRW0kYychWc8jmSZ4oTivRgEvn3gXY"
}