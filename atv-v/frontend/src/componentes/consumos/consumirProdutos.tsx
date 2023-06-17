import { useState } from 'react'
import { MyToast } from '../../alertas/swal-mixin'
import Swal from 'sweetalert2'
import '../margin.css'
import Axios from 'axios'

export default function ConsumirProdutos(props: { tema: any }) {
    const tema = props.tema

    const [CPF, setCPF] = useState("" as any)
    const [produtoNome, setProdutoNome] = useState("" as any)
    const [petNome, setPetNome] = useState("" as any)

    const limparCampos = () => {
        setCPF("")
        setProdutoNome("")
        setPetNome("")
    }

    const consumir = async (event: any) => {
        event.preventDefault()

        await Axios.post("http://localhost:3001/consumir-produtos", {
            CPF: CPF,
            produtoNome: produtoNome
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
                    <h2 style={{ textAlign: "center" }}>Consumir produtos</h2>
                </div>
                <div className="margin-lista">
                    <h5 >Digite o CPF do cliente que irá adquirir o produto</h5>
                    <div className="input-group mb-3">
                        <input type="text" name="CPF" value={CPF} className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)} />
                    </div>

                    <h5 >Digite o nome do Pet que irá consumir o produto</h5>
                    <div className="input-group mb-3">
                        <input type="text" name="petNome" value={petNome} className="form-control" placeholder="Nome do Pet" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setPetNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" name="produtoNome" value={produtoNome} className="form-control" placeholder="Nome do produto" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setProdutoNome(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={consumir}>Consumir</button>
                    </div>
                </div>
            </form>
        </div>
    )
}