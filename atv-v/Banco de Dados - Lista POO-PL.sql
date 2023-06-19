--BANCO DE DADOS - LISTA POO - PL

CREATE TABLE Cliente (
    ClienteID UUID PRIMARY KEY DEFAULT uuid_generate_v4() not null,
	ClienteNome VARCHAR(255) null,
    ClienteNomeSocial VARCHAR(255) null,
    ClienteCPF VARCHAR(11) null,
    ClienteCPFDataEmissao VARCHAR(30) null,
    ClientedataCadastro date default CURRENT_DATE not null
);

CREATE TABLE ClienteRG (
	RG_ID UUID PRIMARY KEY DEFAULT gen_random_uuid() not null,
	ClienteID UUID not null,
	RGNumero VARCHAR(20) null,
    RGDataEmissao VARCHAR(30) null,
	FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

CREATE TABLE ClienteTelefone (
    ClienteTelefoneID UUID PRIMARY KEY DEFAULT uuid_generate_v4() not null,
    ClienteID UUID not null,
    TelefoneDDD VARCHAR(3) null,
    TelefoneNumero VARCHAR(9) null,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

CREATE TABLE Pets (
    PetID UUID PRIMARY KEY DEFAULT uuid_generate_v4() not null,
    ClienteID UUID not null,
    PetNome VARCHAR(255) null,
    PetRaca VARCHAR(255) null,
    PetTipo VARCHAR(255) null,
    PetGenero VARCHAR(255) null,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID)
);

CREATE TABLE Produto (
    ProdutoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() not null,
    ProdutoNome VARCHAR(255) null,
    ProdutoPreco DECIMAL(10, 2) null
);

CREATE TABLE Servico (
    ServicoID UUID PRIMARY KEY DEFAULT uuid_generate_v4() not null,
    ServicoNome VARCHAR(255) null,
    ServicoPreco DECIMAL(10, 2) null
);

CREATE TABLE ProdutosConsumidosCliente (
	ProdutosConsumidosClienteID UUID PRIMARY KEY DEFAULT gen_random_uuid() not null,
    ProdutoID UUID not null,
    ClienteID UUID not null,
    PetID UUID not null,
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);

CREATE TABLE ServicoConsumidosCliente (
	ServicoConsumidosClienteID UUID PRIMARY KEY DEFAULT gen_random_uuid() not null,
    ServicoID UUID not null,
    ClienteID UUID not null,
    PetID UUID not null,
    FOREIGN KEY (ServicoID) REFERENCES Servico(ServicoID),
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (PetID) REFERENCES Pets(PetID)
);
