import { useState } from "react";
import "./margin.css"
import Axios from 'axios'
import { MyToast } from "../alertas/swal-mixin";

function AdicionarPet(props: { tema: any; }) {
  const tema = props.tema;

  const [CPF, setCPF] = useState("" as any)
  const [petNome, setPetNome] = useState("" as any)
  const [petTipo, setPetTipo] = useState("" as any)
  const [petRaca, setPetRaca] = useState("" as any)
  const [petGenero, setPetGenero] = useState("" as any)

  const limparCampos = () => {
    setCPF("")
    setPetNome("")
    setPetTipo("")
    setPetRaca("")
    setPetGenero("")
  };

  const adicionar = async (event: any) => {
    event.preventDefault()

    await Axios.post("http://localhost:3001/adicionar-pet", {
      CPF: CPF,
      petNome: petNome,
      petTipo: petTipo,
      petRaca: petRaca,
      petGenero: petGenero
    }).then((response) => {
      if (response.data.msg !== " ") {
        MyToast.fire({
          icon: 'success',
          title: response.data.msg
        })
        limparCampos()
      }
    })
  }

  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Adicionar um Pet</h2>
        </div>
        <div className="margin-lista">
          <h5 >Digite o CPF do cliente que deseja adicionar um Pet</h5>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="CPF" value={CPF} placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)}/>
          </div>

          <br></br>

          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petNome" value={petNome} placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetNome(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petTipo" value={petTipo} placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetTipo(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petRaca" value={petRaca} placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetRaca(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petGenero" value={petGenero} placeholder="Gênero do Pet" aria-label="Gênero do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetGenero(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={adicionar}>Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdicionarPet;