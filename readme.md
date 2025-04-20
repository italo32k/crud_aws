# Gerenciador de Biblioteca com Node.js, PostgreSQL e Docker

## Descrição
Esta é uma aplicação CRUD (Criar, Ler, Atualizar, Deletar) full-stack, construída com Node.js para o backend, PostgreSQL como banco de dados e Docker para conteinerização. A aplicação roda localmente em `http://localhost:80`.

## Funcionalidades
- **Criar**: Adicionar novos registros ao banco de dados.
- **Ler**: Recuperar e exibir registros do banco de dados.
- **Atualizar**: Modificar registros existentes no banco de dados.
- **Deletar**: Remover registros do banco de dados.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Plataforma de containerização para simplificar o desenvolvimento e a implantação.

## Pré-requisitos
Certifique-se de ter instalado em seu sistema:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (se for executar fora do Docker)

## Como Rodar a Aplicação
### Usando Docker
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Inicie os containers do backend e do banco de dados:
   ```sh
   docker-compose up -d
   ```
3. Acesse a aplicação em `http://localhost:80`.

### Rodando Localmente (Sem Docker)
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   npm start
   ```

## Estrutura do Projeto
```
📂 projeto
│-- 📂 controllers
│-- │-- 📄 BibliotecaControllers.js
│-- 📂 public
│-- │-- 📄 index.html
│-- 📂 services
│-- │-- 📄 BibliotecaServices.js
│-- 📂 views
│-- │-- 📄 biblioteca.ejs
│-- │-- 📄 result-page.ejs
│-- 📄 db.js
│-- 📄 docker-compose.yml
│-- 📄 Dockerfile
│-- 📄 package.json
│-- 📄 readme.md
│-- 📄 routes.js
│-- 📄 server.js
```

## Endpoints da API
| Método  | Rota           | Descrição                      |
|---------|--------------|--------------------------------|
| GET     | `/biblioteca`      | Retorna todos os livros    |
| GET     | `/biblioteca/:codigo`  | Retorna um livro específico |
| POST    | `/biblioteca`      | Adiciona um novo livro     |
| PUT     | `/biblioteca/:codigo`  | Atualiza um livro existente |
| DELETE  | `/biblioteca/:codigo`  | Remove um livro            |

---
🚀 Desenvolvido com Node.js, PostgreSQL e Docker.

