/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'



function ListaProdutos(props: { tema: any; }) {
  let tema = props.tema;


  interface Produtos {
    produtoid: string,
    produtonome: string,
    produtopreco: number
  }

  const [produtos, setProdutos] = useState<Produtos[]>([] as any);
  
  const listarProdutos = () => {
    Axios.get("http://localhost:3001/listar-produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    listarProdutos();
  }, []);
  console.log(produtos);

  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
        <h2 style={{ textAlign: "center" }}>Lista de Produtos</h2>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Preço (R$)</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {produtos.map((produto) => (
                <tr key={produto.produtoid} className="item-hover">

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