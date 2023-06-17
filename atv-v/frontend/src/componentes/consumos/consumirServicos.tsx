import { useState } from 'react'
import { MyToast } from '../../alertas/swal-mixin'
import '../margin.css'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function ConsumirServicos(props: { tema: any }) {
    const tema = props.tema

    const [CPF, setCPF] = useState("" as any)
    const [servicoNome, setServicoNome] = useState("" as any)
    const [petNome, setPetNome] = useState("" as any)

    const limparCampos = () => {
        setCPF("")
        setServicoNome("")
        setPetNome("")
    }

    const consumir = async (event: any) => {
        event.preventDefault()

        await Axios.post("http://localhost:3001/consumir-servicos", {
            CPF: CPF,
            servicoNome: servicoNome
        }).then((response) => {
            if (response.data.erro === "ERRO") {
                Swal.fire('ERRO',response.data.erro, 'error')
            }

            if (response.data.msg === "INSERIU ESSA BOSTA") {
                MyToast.fire({
                    icon: 'success',
                    title: response.data.desc
                })
                limparCampos()
            } 
        }) 
    }

    return (

        <div className="container-fluid">
            <form>
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Consumir serviços</h2>
                </div>
                <div className="margin-lista">
                    <h5 >Digite o CPF do cliente que irá adquirir o serviço</h5>
                    <div className="input-group mb-3">
                        <input type="text" name="CPF" value={CPF} className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)} />
                    </div>
                    <h5 >Digite o nome do Pet que irá consumir o serviço</h5>
                    <div className="input-group mb-3">
                        <input type="text" name="petNome" value={petNome} className="form-control" placeholder="Nome do Pet" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setPetNome(e.target.value)} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" name="servicoNome" value={servicoNome} className="form-control" placeholder="Nome do serviço" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setServicoNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={consumir}>Consumir</button>
                    </div>
                </div>
            </form>
        </div>
    )
}