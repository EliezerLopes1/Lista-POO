import { useState, useEffect } from "react";
import "../margin.css"
import Axios from 'axios'
import { MyToast } from "../../alertas/swal-mixin";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function EditarProduto(props: { tema: any; }) {
  const tema = props.tema;
  const navigate = useNavigate()

  const [nome, setNome] = useState("" as any)
  const [preco, setPreco] = useState("" as any)

  const dadosJson = localStorage.getItem('dados_produto')
  const produtoID = localStorage.getItem('id_produto')

  useEffect(() => {
    if (dadosJson) {
      try {
        const dadosObj = JSON.parse(dadosJson)

        setNome(dadosObj.nome)
        setPreco(dadosObj.preco)

      } catch (erro) {
        console.log(erro)
      }
    }
  }, [])

  const editar = async (event: any) => {
    event.preventDefault()

    await Axios.put(`http://localhost:3001/editar-produto/${produtoID}`, {
      produtoNome: nome,
      produtoPreco: preco
    }).then((response) => {
      if (response.data.status === "OK") {
        navigate('/lista-produtos')

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

  const excluirProduto = async (nome: any) => {
    await Axios.delete(`http://localhost:3001/excluirProduto/${nome}`)
      .then((response) => {
        console.log(response.data)

        //Swal.fire({ title: "Produto excluído com sucesso.", confirmButtonColor: "#00ced1", icon: "success" })

        MyToast.fire("Produto excluído com sucesso.", "", "success")
      }).catch((error) => {
        console.log(error);
        // Lida com o erro, se necessário
      });
  }

  return (
    <div className="container-fluid">
      <form>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Editar Produto</h2>
        </div>
        <div className="margin-lista">
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="nome" value={nome} placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
            <input type="number" className="form-control" name="preco" value={preco} placeholder="Preço" aria-label="preco" aria-describedby="basic-addon1" onChange={(e) => setPreco(e.target.value)} />
          </div>

          <div className="d-flex justify-content-center input-group mb-3">
            <button className="btn btn-secondary" type="button" onClick={() => navigate('/lista-produtos')}>Voltar</button>
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={editar}>Editar</button>

            <button className="btn btn-danger" type="button" onClick={() => {
              excluirProduto(nome)
              navigate('/lista-produtos')
            }}>Excluir</button>
          </div>


        </div>
      </form>
    </div>
  );
}

export default EditarProduto;