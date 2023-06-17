import { useState } from "react";
import "../margin.css"
import { MyToast } from "../../alertas/swal-mixin";
import Axios from 'axios'
import Swal from "sweetalert2";


function AdicionarRG(props: { tema: any; }) {
  const tema = props.tema;
  
  const [CPF, setCPF] = useState("" as any)
  const [RG, setRG] = useState("" as any)
  const [rgData, setRgData] = useState("" as any)

  const limparCampos = () => {
    setCPF("")
    setRG("")
    setRgData("")
  }

  const addRG = async (event: any) => {
    event.preventDefault()

    await Axios.post("http://localhost:3001/adicionar-rg", {
      CPF: CPF,
      rg: RG,
      rgDataEmissao: rgData
    }).then((response) => {
      if (response.data.status === "OK") {
        MyToast.fire({
          icon: 'success',
          title: response.data.msg
        })
        limparCampos()
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
          <h2 style={{ textAlign: "center" }}>Adicionar um RG</h2>
        </div>
        <div className="margin-lista">
          <h5 >Digite o CPF do cliente que deseja adicionar um RG</h5>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="CPF" value={CPF} placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)}/>
          </div>

          <br></br>

          <div className="input-group mb-3">
            <input type="text" className="form-control" name="RG" value={RG} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" onChange={(e) => setRG(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>dd/mm/yyyy</span>
            <input type="text" className="form-control" name="rgData" value={rgData} placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" onChange={(e) => setRgData(e.target.value)}/>
          </div>
          <div className="d-flex justify-content-center input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={addRG}>Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdicionarRG;