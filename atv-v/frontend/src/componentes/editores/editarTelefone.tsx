import { useState, useEffect } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function EditarTelefone(props: { tema: any; }) {
  const tema = props.tema;
  const navigate = useNavigate()

  const [DDD, setDDD] = useState("" as any)
  const [numero, setNumero] = useState("" as any)

  const dadosJson = localStorage.getItem('dados_telefone')
  const clienteID = localStorage.getItem('id_CLIENTE')
  // const teste = localStorage.getItem('NUMERO_TELEFONE')

  useEffect(() => {
    if (dadosJson) {
      try {
        const dadosObj = JSON.parse(dadosJson)

        setDDD(dadosObj.ddd)
        setNumero(dadosObj.numeroTelefone)

      } catch (erro) {
        console.log(erro)
      }
    }
  }, [])

  const editar = async (event: any) => {
    event.preventDefault()

    await Axios.put(`http://localhost:3001/editar-telefone/${clienteID}`, {
      telefoneDDD: DDD,
      telefoneNumero: numero
    }).then((response) => {
      if (response.data.status === "OK") {
        navigate('/lista-telefones')

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

  // const excluirTelefone = async (teste: any, clienteID: any) => {
  //   await Axios.delete(`http://localhost:3001/excluirTelefone/${teste}/${clienteID}`)
  //     .then((response) => {
  //       console.log(response.data)

  //       MyToast.fire("Telefone excluído com sucesso.", "", "success")
  //     }).catch((error) => {
  //       console.log(error);
  //       // Lida com o erro, se necessário
  //     });
  // }

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

          <div className="d-flex justify-content-center input-group mb-3">
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-telefones')}>Voltar</button>
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Editar</button>
            <button className="btn btn-danger" type="button" onClick={() => {
              // excluirTelefone(teste, clienteID)
              navigate('/lista-telefones')
            }}>Excluir</button>
          </div>


        </div>
      </form>
    </div>
  );
}

export default EditarTelefone;