import { useEffect, useState } from "react";
import "../margin.css"
import { MyToast } from "../../alertas/swal-mixin";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function EditarRG(props: { tema: any; }) {
  const tema = props.tema;
  const navigate = useNavigate()
  
  const [ID, setID] = useState("" as any)
  const [RG, setRG] = useState("" as any)
  const [rgData, setRgData] = useState("" as any)
  const [teste2, setTeste2] = useState("" as any)

  const dadosJson = localStorage.getItem('dados_rg')
  const clienteID = localStorage.getItem('id_cliente')
  const teste = localStorage.getItem('CPF')
  
  useEffect(() => {
    if (dadosJson) {
      try {
        const dadosObj = JSON.parse(dadosJson)

        setID(dadosObj.id)
        setTeste2(dadosObj.IDcliente)
        setRG(dadosObj.numero)
        setRgData(dadosObj.dataemissao)

      } catch (erro) {
        console.log(erro)
      }
    }
  }, [])

  const editar = async (event: any) => {
    event.preventDefault()

    await Axios.put(`http://localhost:3001/editar-rg/${clienteID}`, {
      rg: RG,
      rgDataEmissao: rgData
    }).then((response) => {
      if (response.data.status === "OK") {
        navigate('/lista-rgs')
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

  const excluirRG = async (ID: any, clienteID: any) => {
    await Axios.delete(`http://localhost:3001/excluirRG/${ID}/${clienteID}`)
      .then((response) => {
        console.log(response.data)

        //Swal.fire({ title: "Produto excluído com sucesso.", confirmButtonColor: "#00ced1", icon: "success" })

        MyToast.fire("RG excluído com sucesso.", "", "success")
      }).catch((error) => {
        console.log(error);
        // Lida com o erro, se necessário
      });
  }
    
  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Editar RG</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="RG" value={RG} placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" onChange={(e) => setRG(e.target.value)} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>dd/mm/yyyy</span>
            <input type="text" className="form-control" name="rgData" value={rgData} placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" onChange={(e) => setRgData(e.target.value)} />
          </div>
          <div className="d-flex justify-content-center input-group mb-3">
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-rgs')}>Voltar</button>
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Editar</button>
            <button className="btn btn-danger" type="button" onClick={() => {
              excluirRG(ID, clienteID)
              navigate('/lista-rgs')
            }}>Excluir</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditarRG;