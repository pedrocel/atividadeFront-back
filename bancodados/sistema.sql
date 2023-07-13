CREATE database sistema;

-- Tabela de Contatos
CREATE TABLE Contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    instagram VARCHAR(255),
    linkedin VARCHAR(255)
);

-- Tabela de Experiência Profissional
CREATE TABLE ExperienciaProfissional (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_empresa VARCHAR(255),
    inicio_trabalho DATE,
    fim_trabalho DATE,
    trabalho_atual BOOLEAN,
    cargo VARCHAR(255),
    id_usuario INT
);

-- Tabela de Escolaridade
CREATE TABLE Escolaridade (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_instituicao VARCHAR(255),
    nome_curso VARCHAR(255),
    ano_conclusao INT,
    id_usuario INT
);

-- Tabela de Atividades Extracurriculares
CREATE TABLE AtividadesExtracurriculares (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_atividade VARCHAR(255),
    detalhes VARCHAR(255),
    id_usuario INT
);

-- Tabela de Certificações
CREATE TABLE Certificacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_certificacao VARCHAR(255),
    instituicao VARCHAR(255),
    data_termino DATE,
    id_usuario INT
);

-- Tabela de Contatos
CREATE TABLE username (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    usuario VARCHAR(20),
    cpf VARCHAR(255),
    password VARCHAR(255)
)
