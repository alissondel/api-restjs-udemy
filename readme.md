# 🎲 Rodando no Back End (servidor)

#### Instale as dependências
 $ npm install

### Execute a aplicação em modo de desenvolvimento
 $ npm run dev

### O servidor inciará na porta:3000 - acesse <http://localhost:3000>

## Instalações ultilizada na aplicação

 $ npm init -y <br />
 $ npx eslint --init <br />
 $ npm i nodemon sucrase --save-dev <br />
 $ npm i express <br />
 $ npm i dotenv <br />
 $ npm i sequelize mariadb <br />
 $ npm i -D sequelize-cli <br />
 $ npm i bcryptjs <br />
 $ npm i jsonwebtoken <br />
 $ npm i multer <br />
 $ npm i cors helmet <br />

==============================================================================
## Criando migrations com sequelize

 $ npx sequelize migration:create --name=alunos <!--Cria o migrations --><br />
 $ npx sequelize db:migrate <!--Cria e atualiza a migração para o mysql --><br />
 $ npx sequelize db:migrate:undo <!--Desfazer a migração --><br />
 $ npx sequelize migration:create --name=mudar-email-aluno-unique <!-- Adicionando unique no email do Aluno --><br />

## Criando seed's com sequelize
 #### $ npx sequelize seed:generate --name criar-usuarios <!--Cria o Seeds --> <br />
 #### $ npx sequelize db:seed:all <!-- Criando base de dados e enviando pro mysql-->
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
