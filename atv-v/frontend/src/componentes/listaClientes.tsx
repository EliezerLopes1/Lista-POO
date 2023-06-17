/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./margin.css"
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

  interface RgCliente {
    rgnumero: string;
    rgdataemissao: string;
  }

  const [clientes, setClientes] = useState<Clientes[]>([]);
  const [rgCliente, setRgCliente] = useState<RgCliente | null>(null);

  const [modalAberto, setModalAberto] = useState(false);

  // Estado para armazenar o cliente selecionado
  const [clienteSelecionado, setClienteSelecionado] = useState<Clientes | null>(null);

  const handleAbrirModal = (cliente: Clientes) => {
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

  const buscarDadosRG = (clienteId: string) => {
    Axios.get(`http://localhost:3001/buscar-rg/${clienteId}`)
      .then((response) => {
        setRgCliente(response.data);
        console.log(rgCliente)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    listarCliente();
  }, []);
  console.log(clientes);

  // useEffect(() => {
  //   if (clienteSelecionado) {
  //     buscarDadosRG(clienteSelecionado.clienteid);
  //   }
  // }, [clienteSelecionado]);

  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="margin-lista">
          {clientes.map((cliente) => (
            <a href="#" className="list-group-item list-group-item-action" onClick={() => handleAbrirModal(cliente)}>{cliente.clientenome}</a>
          ))}
        </div>
      </div>

      {/* Popup que abre as informações dos clientes */}
      <Modal show={modalAberto} onHide={handleFecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informações do Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nome: {clienteSelecionado?.clientenome}</p>
          <p>Nome social: {clienteSelecionado?.clientenomesocial}</p>
          <p>CPF: {clienteSelecionado?.clientecpf}</p>
          <p>Data de emissão do CPF: {clienteSelecionado?.clientecpfdataemissao}</p>
          <p>RG: {rgCliente?.rgnumero}</p>
          <p>Data de emissão do RG: {rgCliente?.rgdataemissao}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleFecharModal}>Fechar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaCliente;