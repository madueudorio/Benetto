drop database if exists benetto;

create database benetto;

use benetto;

create table Clientes (
	id int not null auto_increment,
	nome varchar(200) not null,
	telefone varchar(11) not null,
	endereco varchar(250) not null,
	email varchar(200) not null unique,
	cpf varchar(11) not null unique,
	password varchar(100) not null,
	imagem varchar(1000)not null,
	primary key (id)
);


create table Produtos (
	id int not null auto_increment,
	nome varchar(200) not null,
	peco varchar(45) not null,
	ingredientes varchar(2000) not null,
	imagem varchar(1000)not null,
	primary key (id)
);

create table Pedidos (
	id int not null auto_increment,
	data_pedido datetime not null,
	status varchar(45) not null,
	valor_total int not null,
	clientes_id int not null,
	primary key (id)
);

create table pedidos_produtos (
     quantidade int not null,
     valor int not null,
     produtos_id int not null,
     pedidos_id int not null,
     constraint fk_pedidos_produtos
		foreign key (pedidos_id )
		references pedidos (id)
);