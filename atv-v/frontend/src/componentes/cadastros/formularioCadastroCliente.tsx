import { useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";

function FormularioCadastroCliente(props: { tema: any; }) {
    const tema = props.tema;

    const [nome, setNome]               = useState("" as any)
    const [nomeSocial, setNomeSocial]   = useState("" as any)
    const [CPF, setCPF]                 = useState("" as any)
    const [cpfData, setCpfData]         = useState("" as any)
    const [RG, setRG]                   = useState("" as any)
    const [rgData, setRgData]           = useState("" as any)

    const [DDD, setDDD]                         = useState("" as any)
    const [telefoneNumero, setTelefoneNumero]   = useState("" as any)

    const [petNome, setPetNome]     = useState("" as any)
    const [petTipo, setPetTipo]     = useState("" as any)
    const [petRaca, setPetRaca]     = useState("" as any)
    const [petGenero, setPetGenero] = useState("" as any)

    const cadastrar = async (event: any) => {
        event.preventDefault()

        await Axios.post("http://localhost:3001/cadastrar-cliente", {
            nome: nome,
            nomeSocial: nomeSocial,
            cpf: CPF,
            cpfDataEmissao: cpfData,
            rg: RG,
            rgDataEmissao: rgData,
            telefoneDDD: DDD,
            telefoneNumero: telefoneNumero,
            petNome: petNome,
            petTipo: petTipo,
            petRaca: petRaca,
            petGenero: petGenero
        }).then((response) =>{
            if (response.data.msg !== " ") {
                MyToast.fire({
                    icon: 'success',
                    title: response.data.msg
                })
            }
        })
    }

    return (
        <div className="container-fluid">
            <form>
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Cadastro de clientes</h2>
                </div>
                <div className="margin-lista">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nome" value={nome} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nomeSocial" value={nomeSocial} placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={(e) => setNomeSocial(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="CPF" value={CPF} placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>dd/mm/yyyy</span>
                        <input type="text" className="form-control" name="cpfData" value={cpfData} placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" onChange={(e) => setCpfData(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="RG" value={RG} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" onChange={(e) => setRG(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>dd/mm/yyyy</span>
                        <input type="text" className="form-control" name="rgData" value={rgData} placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" onChange={(e) => setRgData(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>DDD</span>
                        <input type="text" className="form-control" name="DDD" value={DDD} placeholder="" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setDDD(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="telefoneNumero" value={telefoneNumero}placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setTelefoneNumero(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="petNome" value={petNome}placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetNome(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="petTipo" value={petTipo}placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetTipo(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="petRaca" value={petRaca}placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetRaca(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="petGenero" value={petGenero} placeholder="Gênero do Pet" aria-label="Gênero do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetGenero(e.target.value)}/>
                    </div>

                    <div className="d-flex justify-content-center input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={cadastrar}>Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioCadastroCliente;