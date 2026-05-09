# Calculator API Clean Architecture

Projeto criado para estudo de arquitetura backend utilizando Node.js e boas práticas de desenvolvimento.

## Objetivo

Construir uma API evolutiva começando por operações simples e adicionando gradualmente:

* Arquitetura em camadas
* Validação de dados
* Banco de dados
* Testes
* Docker
* Autenticação
* Cache
* Filas
* Observabilidade

---

# Tecnologias utilizadas

* Node.js
* TypeScript
* Fastify
* Zod

---

# Arquitetura

O projeto segue princípios de:

* Clean Architecture
* SOLID
* Separation of Concerns

Estrutura inicial:

```txt
src/
├── modules/
│   └── calculator/
│       ├── controllers/
│       ├── services/
│       ├── routes/
│       └── dto/
│
├── shared/
│   └── errors/
│
├── app.ts
└── server.ts
```

---

# Funcionalidades atuais

## Soma de 3 números

Endpoint:

```http
POST /sum
```

Exemplo de body:

```json
{
  "number1": 10,
  "number2": 20,
  "number3": 30
}
```

Resposta:

```json
{
  "result": 60
}
```

---

# Como rodar o projeto

## Instalar dependências

```bash
npm install
```

## Rodar ambiente de desenvolvimento

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3333
```

---

# Próximas evoluções

* [ ] Persistência com PostgreSQL
* [ ] Prisma ORM
* [ ] Repository Pattern
* [ ] Testes automatizados
* [ ] Docker
* [ ] Autenticação JWT
* [ ] Logs estruturados
* [ ] CI/CD
* [ ] Cache com Redis

---

# Autor

Vitor Prado
