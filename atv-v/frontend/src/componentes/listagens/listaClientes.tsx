/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { Modal } from "react-bootstrap"

function ListaCliente(props: { tema: any; }) {
  let tema = props.tema;

  interface Clientes {
    clienteid: string;
    clientenome: string;
    clientenomesocial: string;
    clientecpf: string;
    clientecpfdataemissao: string;
    clientedatacadastro: string;
  }

  const [clientes, setClientes] = useState<Clientes[]>([]);

  const [modalAberto, setModalAberto] = useState(false);

  // Estado para armazenar o cliente selecionado
  const [clienteSelecionado, setClienteSelecionado] = useState<Clientes | null>(null);

  const handleAbrirModal = async (cliente: Clientes) => {
    setClienteSelecionado(cliente);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setClienteSelecionado(null);
    setModalAberto(false);
  };

  const listarCliente = () => {
    Axios.get("http://localhost:3001/listar-clientes")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    listarCliente();
  }, []);
  console.log(clientes);

  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
          <h2 style={{ textAlign: "center" }}>Lista de Clientes</h2>
          <h5 style={{ textAlign: "center" }}>(Para saber as informações do cliente, clique no nome)</h5>
          <br></br>
          {clientes.map((cliente) => (
            <a href="#" className="list-group-item list-group-item-action" onClick={() => handleAbrirModal(cliente)}>{cliente.clientenome}</a>
          ))}
        </div>
      </div>

      {/* Popup que abre as informações dos clientes */}
      <Modal size="lg" show={modalAberto} onHide={handleFecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informações do Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Nome:</b> {clienteSelecionado?.clientenome}</p>
          <p><b>Nome social:</b> {clienteSelecionado?.clientenomesocial}</p>
          <p><b>CPF:</b> {clienteSelecionado?.clientecpf}</p>
          <p><b>Data de emissão do CPF:</b> {clienteSelecionado?.clientecpfdataemissao}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger">Excluir</button>
          <button className="btn btn-secondary" onClick={handleFecharModal}>Fechar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaCliente;