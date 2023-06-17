import express, { Request, Response } from "express"
import cors from "cors"
import { Pool } from "pg"

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Empresa-PL",
    password: "thygas020",
    port: 5432      //Configs banco pro THY
})

// const DB = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "Empresa-PL",
//     password: "250304me",
//     port: 5555      //Configs banco pro ELI
// })

const app = express()
app.use(cors())
app.use(express.json())

//CADASTROS
app.post('/cadastrar-cliente', (req, res) => {
    const { nome, nomeSocial } = req.body
    const { cpf, cpfDataEmissao } = req.body
    const { rg, rgDataEmissao } = req.body

    const { telefoneDDD, telefoneNumero } = req.body
    const { petNome, petTipo, petRaca, petGenero } = req.body

    let SQL = "INSERT INTO cliente (ClienteNome, ClienteNomeSocial, ClienteCPF, ClienteCPFDataEmissao) VALUES ($1, $2, $3, $4) RETURNING ClienteID"

    DB.query(SQL, [nome, nomeSocial, cpf, cpfDataEmissao], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('inseriu')

            const clienteID = result.rows[0].clienteid

            if (clienteID) {
                let SQL2 = "INSERT INTO Pets (ClienteID, PetNome, PetRaca, PetTipo, PetGenero) VALUES ($1, $2, $3, $4, $5)"

                let SQL3 = "INSERT INTO ClienteTelefone (ClienteID, TelefoneDDD, TelefoneNumero) VALUES ($1, $2, $3)"

                let SQL4 = "INSERT INTO ClienteRG (ClienteID, RGNumero, RGDataEmissao) VALUES ($1, $2, $3)"

                DB.query(SQL2, [clienteID, petNome, petRaca, petTipo, petGenero], (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('inseriu pet tbm')
                    }
                })

                DB.query(SQL3, [clienteID, telefoneDDD, telefoneNumero], (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('inseriu telefone tbm')
                    }
                })

                DB.query(SQL4, [clienteID, rg, rgDataEmissao], (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('inseriu RG tbm')
                    }
                })
            }

            res.send({ msg: "Cliente inserido com sucesso." })
        }
    })
})

app.post('/editar-cliente/:ID', (req, res) => {
    const { ID } = req.params

    const { nome, nomeSocial } = req.body
    const { cpf, cpfDataEmissao } = req.body
    // const { rg, rgDataEmissao } = req.body

    // const { telefoneDDD, telefoneNumero } = req.body
    // const { petNome, petTipo, petRaca, petGenero } = req.body

    let SQL = "UPDATE cliente SET ClienteNome = $1, ClienteNomeSocial = $2, ClienteCPF = $3, ClienteCPFDataEmissao = $4) WHERE ClienteID = $5"

    DB.query(SQL, [nome, nomeSocial, cpf, cpfDataEmissao, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ msg: "Cliente editado com sucesso." })
        }
    })
})

app.post('/cadastrar-produto', (req, res) => {
    const { produtoNome, produtoPreco } = req.body

    let SQL = "INSERT INTO Produto (ProdutoNome, ProdutoPreco) VALUES ($1, $2)"

    DB.query(SQL, [produtoNome, produtoPreco], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('deu bom')
            res.send({ msg: 'Produto inserido com sucesso.', data: result.rows.values().next() })
        }
    })
})

app.post('/cadastrar-servico', (req, res) => {
    const { servicoNome, servicoPreco } = req.body

    let SQL = "INSERT INTO Servico (ServicoNome, ServicoPreco) VALUES ($1, $2)"

    DB.query(SQL, [servicoNome, servicoPreco], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('deu bom')
            res.send({ msg: 'Serviço inserido com sucesso.', data: result.rows.values().next() })
        }
    })
})

app.post('/adicionar-pet', (req, res) => {
    const { CPF } = req.body
    const { petNome, petTipo, petRaca, petGenero } = req.body

    let SQL1 = "SELECT * FROM Cliente WHERE ClienteCPF = $1"

    DB.query(SQL1, [CPF], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const clienteID = result.rows[0].clienteid
            const clienteNome = result.rows[0].clientenome

            let SQL2 = "INSERT INTO Pets (ClienteID, PetNome, PetRaca, PetTipo, PetGenero) VALUES ($1, $2, $3, $4, $5)"

            DB.query(SQL2, [clienteID, petNome, petTipo, petRaca, petGenero], (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log('deu bom')
                    res.send({ msg: `Pet adicionado ao cliente ${clienteNome}com sucesso.`, data: result.rows.values().next() })
                }
            })
        }
    })
})

app.post('/adicionar-telefone', (req, res) => {
    const { CPF } = req.body
    const { telefoneDDD, telefoneNumero } = req.body

    let SQL1 = "SELECT * FROM Cliente WHERE ClienteCPF = $1"

    DB.query(SQL1, [CPF], (err, result1) => {
        if (err) {
            console.log(err)
        } else {
            const clienteID = result1.rows[0].clienteid
            const clienteNome = result1.rows[0].clientenome

            let SQL2 = "INSERT INTO ClienteTelefone (ClienteID, TelefoneDDD, TelefoneNumero) VALUES ($1, $2, $3)"

            DB.query(SQL2, [clienteID, telefoneDDD, telefoneNumero], (err, result2) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log('deu bom')
                    res.send({ msg: `Telefone adicionado ao cliente ${clienteNome} com sucesso.` })
                }
            })
        }
    })
})

app.post('/adicionar-rg', (req, res) => {
    const { CPF } = req.body
    const { rg, rgDataEmissao } = req.body

    let SQL1 = "SELECT * FROM Cliente WHERE ClienteCPF = $1"

    DB.query(SQL1, [CPF], (err, result1) => {
        if (err) {
            console.log(err)
        } else {
            const clienteID = result1.rows[0].clienteid
            const clienteNome = result1.rows[0].clientenome

            let SQL2 = "INSERT INTO ClienteRG (ClienteID, RGNumero, RGDataEmissao) VALUES ($1, $2, $3)"

            DB.query(SQL2, [clienteID, rg, rgDataEmissao], (err, result2) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log('deu bom')
                    res.send({ msg: `RG adicionado ao cliente ${clienteNome} com sucesso.` })
                }
            })
        }
    })
})

//CONSUMOS

app.post("/consumir-produtos", (req, res) => {
    const { CPF, produtoNome } = req.body

    let SQL1 = "SELECT * FROM Cliente WHERE ClienteCPF = $1"

    DB.query(SQL1, [CPF], (err, result1) => {
        if (result1.rowCount === 0) {
            console.log(err)
            res.send({ erro: "ERRO" })
        } else {
            const clienteID = result1.rows[0].clienteid
            const clienteNome = result1.rows[0].clientenome

            let SQL2 = "SELECT * FROM Pets WHERE ClienteID = $1"
            let SQL3 = "SELECT * FROM Produto WHERE ProdutoNome = $1"

            DB.query(SQL2, [clienteID], (err, result2) => {
                if (result2.rowCount === 0) {
                    console.log(err)
                    res.send({ erro: "ERRO" })
                } else {
                    const petID = result2.rows[0].petid

                    DB.query(SQL3, [produtoNome], (err, result3) => {
                        if (result3.rowCount === 0) {
                            console.log(err)
                            res.send({ erro: "ERRO" })
                        } else {
                            const produtoID = result3.rows[0].produtoid
                            const nomeProduto = result3.rows[0].produtonome

                            let SQLFinal = "INSERT INTO ProdutosConsumidosCliente (ProdutoID, ClienteID, PetID) VALUES ($1, $2, $3)"

                            DB.query(SQLFinal, [produtoID, clienteID, petID], (err, resultFinal) => {
                                if (resultFinal.rowCount === 0) {
                                    console.log(err)
                                    res.send({ erro: "ERRO" })
                                } else {
                                    console.log("INSERIU")
                                    res.send({ msg: "INSERIU ESSA BOSTA", desc: `Produto ${nomeProduto} consumido com sucesso pelo cliente ${clienteNome}.` })
                                }
                            })
                        }

                    })
                }
            })
        }
    })
})

app.post("/consumir-servicos", (req, res) => {
    const { CPF, servicoNome } = req.body

    let SQL1 = "SELECT * FROM Cliente WHERE ClienteCPF = $1"

    DB.query(SQL1, [CPF], (err, result1) => {
        if (result1.rowCount === 0) {
            console.log(err)
            res.send({ erro: "ERRO" })
        } else {
            const clienteID = result1.rows[0].clienteid
            const clienteNome = result1.rows[0].clientenome

            let SQL2 = "SELECT * FROM Pets WHERE ClienteID = $1"
            let SQL3 = "SELECT * FROM Servico WHERE ServicoNome = $1"

            DB.query(SQL2, [clienteID], (err, result2) => {
                if (result2.rowCount === 0) {
                    console.log(err)
                    res.send({ erro: "ERRO" })
                } else {
                    const petID = result2.rows[0].petid

                    DB.query(SQL3, [servicoNome], (err, result3) => {
                        if (result3.rowCount === 0) {
                            console.log(err)
                            res.send({ erro: "ERRO" })
                        } else {
                            const servicoID = result3.rows[0].servicoid
                            const nomeServico = result3.rows[0].serviconome

                            let SQLFinal = "INSERT INTO ServicoConsumidosCliente (ServicoID, ClienteID, PetID) VALUES ($1, $2, $3)"

                            DB.query(SQLFinal, [servicoID, clienteID, petID], (err, resultFinal) => {
                                if (resultFinal.rowCount === 0) {
                                    console.log(err)
                                    res.send({ erro: "ERRO" })
                                } else {
                                    console.log("INSERIU")
                                    res.send({ msg: "INSERIU ESSA BOSTA", desc: `Serviço ${nomeServico} consumido com sucesso pelo cliente ${clienteNome}.` })
                                }
                            })
                        }

                    })
                }
            })
        }
    })
})


//LISTAGENS

app.get('/listar-clientes', (req, res) => {
    let SQL = "SELECT * FROM Cliente ORDER BY ClienteNome"

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log('pegou os dados do cliente')
            res.send(result.rows)
        }
    })
})

// app.get("/buscar-rg/:id", (req, res) => {
//     const { id } = req.params

//     DB.query("SELECT * FROM ClienteRG WHERE ClienteID = $1", [id], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('achou')
//             res.send(result.rows)
//         }
//     })
// })

app.get("/listar-produtos", (req, res) => {
    DB.query("SELECT * FROM Produto ORDER BY ProdutoNome", (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('pegou os dados do produto')
            res.send(result.rows)
        }
    })
})

app.get("/listar-servicos", (req, res) => {
    DB.query("SELECT * FROM Servico ORDER BY ServicoNome", (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('pegou os dados do servico')
            res.send(result.rows)
        }
    })
})

app.get("/listar-pets/:ID", (req, res) => {
    const { ID } = req.params

    DB.query("SELECT * FROM Pets WHERE ClienteID = $1 ORDER BY PetNome", [ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('pegou os dados do pet')
            res.send(result.rows)
        }
    })
})

app.get("/listar-telefones/:ID", (req, res) => {
    const { ID } = req.params

    DB.query("SELECT * FROM ClienteTelefone WHERE ClienteID = $1", [ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('pegou os dados do telefone')
            res.send(result.rows)
        }
    })
})

app.get("/listar-rgs/:ID", (req, res) => {
    const { ID } = req.params

    DB.query("SELECT * FROM ClienteRG WHERE ClienteID = $1", [ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('pegou os dados do RG')
            res.send(result.rows)
        }
    })
})


//EDITS

app.put('/editar-produto/:ID', (req, res) => {
    const { ID } = req.params 
    const { produtoNome, produtoPreco } = req.body

    DB.query("UPDATE Produto SET ProdutoNome = $1, ProdutoPreco = $2 WHERE ProdutoID = $3", [produtoNome, produtoPreco, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send({erro: "Erro ao editar Produto."})
        } else {
            console.log('atualizou Produto')
            res.send({msg: "Produto editado com sucesso.", status: 'OK'})
        }
    })
})

app.put('/editar-servico/:ID', (req, res) => {
    const { ID } = req.params 
    const { servicoNome, servicoPreco } = req.body

    DB.query("UPDATE Servico SET ServicoNome = $1, ServicoPreco = $2 WHERE ServicoID = $3", [servicoNome, servicoPreco, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send({erro: "Erro ao editar Serviço."})
        } else {
            console.log('atualizou serviço')
            res.send({msg: "Serviço editado com sucesso.", status: 'OK'})
        }
    })
})

app.put('/editar-pet/:ID', (req, res) => {
    const { ID } = req.params 
    const { petNome, petRaca, petTipo, petGenero } = req.body

    DB.query("UPDATE Pets SET PetNome = $1, PetRaca = $2, PetTipo = $3, PetGenero = $4 WHERE ClienteID = $5", [petNome, petRaca, petTipo, petGenero, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send({erro: "Erro ao editar Pet."})
        } else {
            console.log('editado pet')
            res.send({msg: "Pet editado com sucesso.", status: 'OK'})
        }
    })
})

app.put('/editar-telefone/:ID', (req, res) => {
    const { ID } = req.params 
    const { telefoneDDD } = req.body
    const { telefoneNumero } = req.body 

    DB.query("UPDATE ClienteTelefone SET TelefoneDDD = $1, TelefoneNumero = $2 WHERE ClienteID = $3", [telefoneDDD, telefoneNumero, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send({erro: "Erro ao editar Telefone."})
        } else {
            console.log('atualizou telefone tbm')
            res.send({msg: "Telefone editado com sucesso.", status: 'OK'})
        }
    })
})

app.put('/editar-rg/:ID', (req, res) => {
    const { ID } = req.params 
    const { rg, rgDataEmissao } = req.body

    DB.query("UPDATE ClienteRG SET RGNumero = $1, RGDataEmissao = $2 WHERE ClienteID = $3", [rg, rgDataEmissao, ID], (err, result) => {
        if (err) {
            console.log(err)
            res.send({erro: "Erro ao editar RG."})
        } else {
            console.log('atualizou RG')
            res.send({msg: "RG editado com sucesso.", status: 'OK'})
        }
    })
})
     
//DELETES

app.delete("/excluirCliente/:cpf", (req, res) => {
    const clientecpf = req.params.cpf;

    // Excluir registros da tabela produtosconsumidoscliente
    const deleteProdutosQuery = `DELETE FROM produtosconsumidoscliente WHERE clienteid IN (SELECT clienteid FROM cliente WHERE clientecpf = $1)`;

    DB.query(deleteProdutosQuery, [clientecpf])
        .then(() => {
            // Excluir registros da tabela servicoconsumidoscliente
            const deleteServicosQuery = `DELETE FROM servicoconsumidoscliente WHERE clienteid IN (SELECT clienteid FROM cliente WHERE clientecpf = $1)`;

            DB.query(deleteServicosQuery, [clientecpf])
                .then(() => {
                    // Excluir registros da tabela clientetelefone
                    const deleteTelefonesQuery = `DELETE FROM clientetelefone WHERE clienteid IN (SELECT clienteid FROM cliente WHERE clientecpf = $1)`;

                    DB.query(deleteTelefonesQuery, [clientecpf])
                        .then(() => {
                            // Excluir registros da tabela clienterg
                            const deleteRgsQuery = `DELETE FROM clienterg WHERE clienteid IN (SELECT clienteid FROM cliente WHERE clientecpf = $1)`;

                            DB.query(deleteRgsQuery, [clientecpf])
                                .then(() => {
                                    // Excluir registros da tabela pets
                                    const deletePetsQuery = `DELETE FROM pets WHERE clienteid IN (SELECT clienteid FROM cliente WHERE clientecpf = $1)`;

                                    DB.query(deletePetsQuery, [clientecpf])
                                        .then(() => {
                                            // Excluir o cliente da tabela cliente
                                            const deleteClienteQuery = `DELETE FROM cliente WHERE clientecpf = $1`;

                                            DB.query(deleteClienteQuery, [clientecpf])
                                                .then(() => {
                                                    res.status(200).json({ message: "Cliente excluído com sucesso" });
                                                })
                                                .catch((error) => {
                                                    res.status(500).json({ error: "Erro ao excluir cliente" });
                                                });
                                        })
                                        .catch((error) => {
                                            res.status(500).json({ error: "Erro ao excluir registros de pets" });
                                        });
                                })
                                .catch((error) => {
                                    res.status(500).json({ error: "Erro ao excluir registros de clienterg" });
                                });
                        })
                        .catch((error) => {
                            res.status(500).json({ error: "Erro ao excluir registros de clientetelefone" });
                        });
                })
                .catch((error) => {
                    res.status(500).json({ error: "Erro ao excluir registros de servicoconsumidoscliente" });
                });
        })
        .catch((error) => {
            res.status(500).json({ error: "Erro ao excluir registros de produtosconsumidoscliente" });
        });
});

app.listen(3001, () => {
    console.log("Servidor rodando!")
})