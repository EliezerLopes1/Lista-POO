import { useState } from "react";
import "./margin.css"
import Swal from "sweetalert2"
import Axios from 'axios'


// type props = {
//     tema: string
// }

function FormularioCadastroProduto(props: { tema: any; }) {
    const tema = props.tema;

    const [nome, setNome] = useState("" as any)
    const [preco, setPreco] = useState("" as any)

    const limparCampos = () => {
      setNome("")
      setPreco("")
    };

    const cadastrar = (event: any) => {
      event.preventDefault()
      
      Axios.post("http://localhost:3001/cadastrar-produto", {
        produtoNome: nome,
        produtoPreco: preco
      }).then((response) => {
        if (response.data.msg !== " ") {
          Swal.fire({
            title: 'Sucesso',
            html: response.data.msg,
            icon: 'success',
            confirmButtonColor: '#00ced1'
          })
          limparCampos()
        }
      })
    }

    return (
      <div className="container-fluid">
        <form>
          <div className="margin-lista">
            <h2 style={{ textAlign: "center" }}>Cadastro de produtos</h2>
          </div>
          <div className="margin-lista">
            <div className="input-group mb-3">
              <input type="text" name="nome" value={nome} className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
              <input type="number" className="form-control" name="produtoPreco" value={preco}placeholder="Preço" aria-label="E-mail" aria-describedby="basic-addon1" onChange={(e) => setPreco(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={cadastrar}>Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default FormularioCadastroProduto;