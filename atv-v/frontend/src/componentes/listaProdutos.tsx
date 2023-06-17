/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./margin.css"
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
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
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

      {/* Popup que abre as informações dos produtos */}
      {/* <Modal show={modalAberto} onHide={handleFecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>{produtoSelecionado?.produtonome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Preço: R$ {produtoSelecionado?.produtopreco}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleFecharModal}>Fechar</button>
        </Modal.Footer>
      </Modal> */}
    </div>
    
  );
}

export default ListaProdutos;