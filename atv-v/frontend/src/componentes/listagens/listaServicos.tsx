/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'

function ListaServicos() {
    interface Servicos {
      servicoid: string,
      serviconome: string,
      servicopreco: number
    }
  
    const [servicos, setServicos] = useState<Servicos[]>([] as any);
    
    const listarServicos = () => {
      Axios.get("http://localhost:3001/listar-servicos")
        .then((response) => {
          setServicos(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    useEffect(() => {
      listarServicos();
    }, []);

    return (
      <div className="container-fluid">
        <div className="list-group">
          <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Lista de Serviços</h2>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Preço (R$)</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {servicos.map((servico) => (
                <tr key={servico.servicoid} className="item-hover">

                  <td>{servico.serviconome}</td>
                  <td>{servico.servicopreco}</td>

                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default ListaServicos;