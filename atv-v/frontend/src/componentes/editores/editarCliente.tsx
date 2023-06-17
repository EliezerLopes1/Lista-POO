import { useState, useEffect } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function EditarCliente(props: { tema: any; }) {
    const tema = props.tema;
    const navigate = useNavigate()

    const [nome, setNome] = useState("" as any)
    const [nomeSocial, setNomeSocial] = useState("" as any)
    const [CPF, setCPF] = useState("" as any)
    const [cpfData, setCpfData] = useState("" as any)

    const dadosJson = localStorage.getItem('dados_telefone')
    const clienteID = localStorage.getItem('cliente_id')
    const cli_cpf = localStorage.getItem('cliente_cpf')

    useEffect(() => {
        if (dadosJson) {
            try {
                const dadosObj = JSON.parse(dadosJson)

                setNome(dadosObj.nome)
                setNomeSocial(dadosObj.nomeSocial)
                setCPF(dadosObj.cpf)
                setCpfData(dadosObj.cpfDataEmissao)

            } catch (erro) {
                console.log(erro)
            }
        }
    }, [])

    const editar = async (event: any) => {
        event.preventDefault()

        await Axios.put(`http://localhost:3001/editar-cliente/${clienteID}`, {
            nome: nome,
            nomeSocial: nomeSocial,
            cpf: CPF,
            cpfDataEmissao: cpfData
        }).then((response) => {
            if (response.data.status === "OK") {
                navigate('/lista-clientes')

                MyToast.fire({
                    icon: 'success',
                    title: response.data.msg
                })
            }

            if (response.data.status !== "OK") {
                Swal.fire("ERRO", response.data.erro, "error")
            }
        })
    }

    return (
        <div className="container-fluid">
            <form>
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Editar Cliente</h2>
                </div>
                <div className="margin-lista">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nome" value={nome} placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="nomeSocial" value={nomeSocial} placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={(e) => setNomeSocial(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="CPF" value={CPF} placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>dd/mm/yyyy</span>
                        <input type="text" className="form-control" name="cpfData" value={cpfData} placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" onChange={(e) => setCpfData(e.target.value)} />
                    </div>

                    <div className="d-flex justify-content-center input-group mb-3">
                        <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-clientes')}>Voltar</button>
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Editar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditarCliente;