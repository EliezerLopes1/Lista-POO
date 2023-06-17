import { useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";


function AdicionarTelefone(props: { tema: any; }) {
  const tema = props.tema;

  const [CPF, setCPF] = useState("" as any)
  const [DDD, setDDD] = useState("" as any)
  const [numero, setNumero] = useState("" as any)

  const limparCampos = () => {
    setCPF("")
    setDDD("")
    setNumero("")
  }

  const adicionar = async (event: any) => {
    event.preventDefault()

    await Axios.post("http://localhost:3001/adicionar-telefone", {
      CPF: CPF,
      telefoneDDD: DDD,
      telefoneNumero: numero
    }).then((response) => {
      if (response.data.msg !== " ") {
        MyToast.fire({
          icon: 'success',
          title: 'Sucesso',
          html: response.data.msg,
        })
        limparCampos()
      }
    })
  }

  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Adicionar um Telefone</h2>
        </div>
        <div className="margin-lista">
          <h5 >Digite o CPF do cliente que deseja adicionar um Telefone</h5>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)} />
          </div>

          <br></br>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>DDD</span>
            <input type="text" className="form-control" name="DDD" value={DDD} placeholder="" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setDDD(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="numero" value={numero} placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setNumero(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={adicionar}>Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdicionarTelefone;