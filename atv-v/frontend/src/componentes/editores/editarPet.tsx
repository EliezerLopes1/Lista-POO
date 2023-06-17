import { useState, useEffect } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function EditarPet(props: { tema: any; }) {
  const tema = props.tema;

  const navigate = useNavigate()

  const [petNome, setPetNome] = useState("" as any)
  const [petTipo, setPetTipo] = useState("" as any)
  const [petRaca, setPetRaca] = useState("" as any)
  const [petGenero, setPetGenero] = useState("" as any)

  const dadosJson = localStorage.getItem('dados_pet')
  const clienteID = localStorage.getItem('cliente_id')

  useEffect(() => {
    if (dadosJson) {
      try {
        const dadosObj = JSON.parse(dadosJson)

        setPetNome(dadosObj.nome)
        setPetTipo(dadosObj.tipo)
        setPetRaca(dadosObj.raca)
        setPetGenero(dadosObj.genero)

      } catch (erro) {
        console.log(erro)
      }
    }
  }, [])

  const editar = async (event: any) => {
    event.preventDefault()

    await Axios.put(`http://localhost:3001/editar-pet/${clienteID}`, {
      petNome: petNome,
      petTipo: petTipo,
      petRaca: petRaca,
      petGenero: petGenero
    }).then((response) => {
      if (response.data.status === "OK") {
        navigate('/lista-pets')

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
          <h2 style={{ textAlign: "center" }}>Ver / Editar um Pet</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petNome" value={petNome} placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetNome(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petTipo" value={petTipo} placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetTipo(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petRaca" value={petRaca} placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetRaca(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="petGenero" value={petGenero} placeholder="Gênero do Pet" aria-label="Gênero do Pet" aria-describedby="basic-addon1" onChange={(e) => setPetGenero(e.target.value)} />
          </div>
          <div className="d-flex justify-content-center input-group mb-3">
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-pets')}>Voltar</button>
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Editar</button>
            <button className="btn btn-danger" type="button" onClick={editar}>Excluir</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarPet;