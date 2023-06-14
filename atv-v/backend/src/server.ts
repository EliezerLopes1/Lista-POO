import express from "express"
import cors from "cors"
import { Pool } from "pg"
// import bcrypt from "bcrypt"
// import nodemailer from "nodemailer";
// import shortid from "shortid";

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "API_Visiona",
    password: "fatec",
    port: 5432      //Porta padrão é 5432 ---- Porta 5555 é a do ELI
})

const app = express()
app.use(cors())
app.use(express.json())




app.listen(3001, () => {
    console.log("Servidor rodando!")
})