import express from "express"
import cors from "cors"
import { Pool } from "pg"

// const DB = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "Empresa-PL",
//     password: "thygas020",
//     port: 5432      //Configs banco pro THY
// })

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Empresa-PL",
    password: "250304me",
    port: 5555      //Configs banco pro ELI
})

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

    let SQL = "INSERT INTO cliente (ClienteNome, ClienteNomeSocial, ClienteCPF, ClienteCPFDataEmissao, ClienteRG, ClienteRGDataEmissao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ClienteID"

    DB.query(SQL, [nome, nomeSocial, cpf, cpfDataEmissao, rg, rgDataEmissao], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('inseriu')
            console.log(result.rows.values().next())
            console.log(result.rows[0].clienteid)

            const clienteID = result.rows[0].clienteid

            if (clienteID) {
                let SQL2 = "INSERT INTO Pets (ClienteID, PetNome, PetRaca, PetTipo, PetGenero) VALUES ($1, $2, $3, $4, $5)"

                let SQL3 = "INSERT INTO ClienteTelefone (ClienteID, TelefoneDDD, TelefoneNumero) VALUES ($1, $2, $3)"

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


            }

            res.send({ msg: "Cliente inserido com sucesso." })
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

            let SQL2 = "INSERT INTO Pets (ClienteID, PetNome, PetRaca, PetTipo, PetGenero) VALUES ($1, $2, $3, $4, $5)"

            DB.query(SQL2, [clienteID, petNome, petTipo, petRaca, petGenero], (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log('deu bom')
                    res.send({ msg: 'Pet adicionado com sucesso.', data: result.rows.values().next() })
                }
            })
        }
    })
})

app.post('/adicionar-telefone', (req, res) => {
    const { CPF } = req.body
    const { telefoneDDD, telefoneNumero} = req.body

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
                    res.send({ msg: `Telefone adicionado ao cliente ${clienteNome} com sucesso.`})
                }
            })
        }
    })
})




//LISTAGENS

// app.get('/listar-top5', => {

// })


app.listen(3001, () => {
    console.log("Servidor rodando!")
})