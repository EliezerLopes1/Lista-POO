/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { Modal } from "react-bootstrap"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ListaCliente() {
  const navigate = useNavigate()

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

  const excluirCliente = async (clienteCpf: any) => {
    await Axios.delete(`http://localhost:3001/excluirCliente/${clienteCpf}`)
      .then((response) => {
        console.log(response.data)
        setModalAberto(false);

        Swal.fire({ title: "Cliente excluído com sucesso.", confirmButtonColor: "#00ced1", icon: "success" }).then(() => window.location.reload())
      }).catch((error) => {
        console.log(error);
        // Lida com o erro, se necessário
      });
  }

  const enviarDados1 = (clienteID: any) => {
    localStorage.setItem('key_para_pet', clienteID)
    navigate('/lista-pets')
  }

  const enviarDados2 = (clienteID: any) => {
    localStorage.setItem('key_para_telefone', clienteID)
    navigate('/lista-telefones')
  }

  const enviarDados3 = (clienteID: any) => {
    localStorage.setItem('key_para_rg', clienteID)
    navigate('/lista-rgs')
  }

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


          <div className="btn-group mr-3" role="group">
            <button className="btn btn-success" onClick={() => enviarDados1(clienteSelecionado?.clienteid)}>Ver / Editar Pets</button>
            <button className="btn btn-info" onClick={() => enviarDados2(clienteSelecionado?.clienteid)}>Ver / Editar Telefones</button>
            <button className="btn btn-warning" onClick={() => enviarDados3(clienteSelecionado?.clienteid)}>Ver / Editar RGs</button>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={() => excluirCliente(clienteSelecionado?.clientecpf)}>Excluir</button>
          <button className="btn btn-secondary" onClick={handleFecharModal}>Fechar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaCliente;