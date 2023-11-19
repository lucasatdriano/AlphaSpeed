create database DBalphaspeed;

use DBalphaspeed;

create table tbCadastro (
cdCadastro int primary key auto_increment,
nmUsuario varchar(30) not null,
noTel varchar(14) not null,
dsEmail varchar(30) not null,
dsSenha varchar(15) not null
);

create table tbEnderecoCli (
cdEndereco int primary key auto_increment,
nmLogradouro varchar(40) not null,
noLogradouro varchar(10) not null,
sgUf char(2) not null,
nmCidade varchar(20) not null,
nmBairro varchar(20) not null,
dsComplemento varchar(20)
);

create table tbCliente (
cdCli int primary key auto_increment,
nmNome varchar(30) not null,
nmSobrenome varchar(30) not null,
dtNascimento date not null,
cdCadastro int not null,
cdEndereco int not null,
constraint FK_ClienteCadastro foreign key (cdCadastro)
	references tbCadastro(cdCadastro),
constraint FK_ClienteEndereco foreign key (cdEndereco)
	references tbEnderecoCli(cdEndereco)
);

create table tbLogin (
cdLogin int primary key auto_increment,
nmUsuario varchar(30) not null,
dsSenha varchar(15) not null,
cdCadastro int not null,
constraint FK_LoginCadastro foreign key (cdCadastro)
	references tbCadastro(cdCadastro)
);

create table tbVeiculo (
cdVeiculo int primary key auto_increment,
nmModelo varchar(30) not null,
dtFabricacao char(4) not null,
noPlaca char(8) not null,
nmMarca varchar(20) not null,
vlPreco decimal(10,2),
dsCor varchar(20),
dsDescricao varchar(100),
dsImagem varchar(100),
dsTipo varchar(20)
);