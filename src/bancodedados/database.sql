create database dindin;

create table categorias (
	id serial primary key,
  descricao text not null
);

create table usuarios (
id serial primary key,
nome varchar(50) not null,
email varchar(50) unique not null,
senha text not null
);

create table transacoes (
id serial primary key,
descricao text not null,
valor integer not null,
data timestamptz not null,
categoria_id integer not null references categorias(id),
usuario_id integer not null references usuarios(id),
tipo varchar(100) not null
);

insert into categorias
(descricao) values
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');













