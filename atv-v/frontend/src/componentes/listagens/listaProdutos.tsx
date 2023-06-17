/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";



function ListaProdutos() {
  interface Produtos {
    produtoid: string,
    produtonome: string,
    produtopreco: number
  }

  const [produtos, setProdutos] = useState<Produtos[]>([] as any);
  const navigate = useNavigate()

  const listarProdutos = () => {
    Axios.get("http://localhost:3001/listar-produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const enviarDadosProduto = (produto: Produtos) => {
    const id = produto.produtoid
    const nome = produto.produtonome
    const preco = produto.produtopreco


    const data = {
      id: id,
      nome: nome,
      preco: preco
    }

    localStorage.setItem('id_produto', data.id)
    localStorage.setItem('dados_produto', JSON.stringify(data))
  }

  useEffect(() => {
    listarProdutos();
  }, []);

  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
        <h2 style={{ textAlign: "center" }}>Lista de Produtos</h2>
        <h5 style={{ textAlign: "center" }}>(Clique em uma linha da tabela para editar um Produto)</h5>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Preço (R$)</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {produtos.map((produto) => (
                <tr key={produto.produtoid} className="item-hover" onClick={() => {
                  enviarDadosProduto(produto)
                  navigate('/editar-produto')
                }}>

                  <td>{produto.produtonome}</td>
                  <td>{produto.produtopreco}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}

export default ListaProdutos;