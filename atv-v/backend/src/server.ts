import express from "express"
import cors from "cors"
import { Pool } from "pg"
import { resourceLimits } from "worker_threads"
// import bcrypt from "bcrypt"
// import nodemailer from "nodemailer";
// import shortid from "shortid";

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Empresa-PL",
    password: "thygas020",
    port: 5432      //Porta padrão é 5432 ---- Porta 5555 é a do ELI
})

const app = express()
app.use(cors())
app.use(express.json())

//CADASTROS
app.post('/cadastrar-cliente', (req, res) => {
    const { nome, nomeSocial}       = req.body
    const { cpf, cpfDataEmissao }   = req.body
    const { rg, rgDataEmissao }     = req.body
    
    const { telefoneDDD, telefoneNumero }           = req.body
    const { petNome, petTipo, petRaca, petGenero }  = req.body
    
    let SQL = "INSERT INTO cliente (ClienteNome, ClienteNomeSocial, ClienteCPF, ClienteCPFDataEmissao, ClienteRG, ClienteRGDataEmissao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ClienteID"

    DB.query(SQL, [nome, nomeSocial, cpf, cpfDataEmissao, rg, rgDataEmissao], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('inseriu')
            const clienteID = result.rows[0].ClienteID
            
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

            res.send({msg: "Cliente inserido com sucesso."})
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
            res.send({msg: 'Produto inserido com sucesso.', data: result.rows.values().next()})
        }
    })
})

app.listen(3001, () => {
    console.log("Servidor rodando!")
})