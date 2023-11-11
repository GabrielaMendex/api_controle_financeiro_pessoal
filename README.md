# RESTful API para Controle Financeiro Pessoal

A API permite que o usuário faça as seguintes operações:

- Cadastrar Usuário
- Fazer Login
- Detalhar Perfil do Usuário Logado
- Editar Perfil do Usuário Logado
- Listar categorias
- Listar transações
- Detalhar transação
- Cadastrar transação
- Editar transação
- Remover transação
- Obter extrato de transações

## Informações sobre o sistema:

### **Banco de dados**

A API criada em Javascript acessa o Banco de Dados em PostgreSQL, persiste os dados de usuários, criptografa a senha usando o JSON Web Token.
O Banco de Dados contem as seguintes tabelas e colunas:  

- usuarios
  - id
  - nome
  - email (campo único)
  - senha
- categorias
  - id
  - descricao
- transacoes
  - id
  - descricao
  - valor
  - data
  - categoria_id
  - usuario_id
  - tipo

### **Rotas disponíveis**

```javascript
rotas.post('/usuario', controladores.cadastraUsuario);
rotas.post('/login', controladores.fazerLogin);
rotas.use(validaToken);
rotas.get('/categoria', controladores.listarCategorias);
rotas.get('/transacao', controladores.listaTransacoes);
rotas.delete('/transacao/:id', controladores.removeTransacao);
rotas.post('/transacao', controladores.cadastraTransacao);
rotas.get('/transacao/extrato', controladores.obterExtrato);
rotas.get('/transacao/:id', controladores.detalharTransacao);
rotas.get('/usuario', controladores.detalharPerfilUsuario);
rotas.put('/usuario', controladores.atualizarPerfilUsuario);
rotas.put('/transacao/:id', controladores.editarTransacao);
```
