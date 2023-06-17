import { useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";
import { useNavigate } from "react-router-dom";


function EditarTelefone(props: { tema: any; }) {
  const tema = props.tema;
  const navigate = useNavigate()

  const [DDD, setDDD] = useState("" as any)
  const [numero, setNumero] = useState("" as any)

  const editar = async (event: any) => {
    event.preventDefault()

    await Axios.post("http://localhost:3001/editar-telefone", {
      telefoneDDD: DDD,
      telefoneNumero: numero
    }).then((response) => {
      if (response.data.msg !== " ") {
        MyToast.fire({
          icon: 'success',
          title: 'Sucesso',
          html: response.data.msg,
        })
      }
    })
  }

  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Editar Telefone</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>DDD</span>
            <input type="text" className="form-control" name="DDD" value={DDD} placeholder="" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setDDD(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="numero" value={numero} placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" onChange={(e) => setNumero(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-clientes')}>Voltar</button>
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarTelefone;