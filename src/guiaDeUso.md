Guia de Uso das Rotas do Projeto:

# 1. Cadastro de Usuário:
   # Rota: POST /usuario
   - Descrição: Use esta rota para cadastrar um novo usuário.
   - Parâmetros: Nenhum
   # Corpo da Requisição: JSON com dados do usuário (nome, email, senha)
   - Exemplo: POST /usuario { "nome": "Exemplo", "email": "exemplo@example.com", "senha": "senha123" }

# 2. Login de Usuário:
   # Rota: POST /login
   - Descrição: Faça o login de um usuário.
   - Parâmetros: Nenhum
   # Corpo da Requisição: JSON com dados de login (email, senha)
   - Exemplo: POST /login { "email": "exemplo@example.com", "senha": "senha123" }

# 3. Cadastro de Transação:
   # Rota: POST /transacao
   - Descrição: Cadastre uma nova transação.
   - Parâmetros: Nenhum
   # Corpo da Requisição: JSON com dados da transação (descricao, valor, data, categoria_id, usuario_id, tipo)
   - Exemplo: POST /transacao { "descricao": "Compra de alimentos", "valor": 50, "data": "2023-11-08", "categoria_id": 1, "usuario_id": 1, "tipo": "Despesa" }

# 4. Listagem de Transações:
   # Rota: GET /transacao
   - Descrição: Liste todas as transações.
   # Parâmetros: Nenhum

# 5. Obtenção do Extrato de Transações:
   # Rota: GET /transacao/extrato
   - Descrição: Obtenha o extrato de todas as transações.
   # Parâmetros: Nenhum

# 6. Detalhamento de uma Transação:
   # Rota: GET /transacao/:id
   - Descrição: Detalhe uma transação pelo seu ID.
   # Parâmetros: ID da transação na URL

# 7. Listagem de Categorias:
   # Rota: GET /categoria
   - Descrição: Liste todas as categorias de transações.
   # Parâmetros: Nenhum

# 8. Detalhamento do Perfil do Usuário:
   # Rota: GET /usuario
   - Descrição: Obtenha os dados do seu próprio perfil.
   # Parâmetros: Nenhum

# 9. Atualização do Perfil do Usuário:
   # Rota: PUT /usuario
   - Descrição: Atualize o perfil do seu próprio usuário.
   - Parâmetros: Nenhum
   # Corpo da Requisição: JSON com dados a serem atualizados (nome, email, senha)
    Exemplo: PUT /usuario { "nome": "Novo Nome", "email": "novo@example.com", "senha": "novaSenha" }

# 10. Edição de uma Transação:
  # Rota: PUT /transacao/:id
  - Descrição: Edite uma transação pelo seu ID.
  # Parâmetros: ID da transação na URL
  # Corpo da Requisição: JSON com dados da transação a serem atualizados
  - Exemplo: PUT /transacao/1 { "descricao": "Nova descrição", "valor": 60 }

# 11. Remoção de uma Transação:
  # Rota: DELETE /transacao/:id
  - Descrição: Remova uma transação pelo seu ID.
  # Parâmetros: ID da transação na URL.

