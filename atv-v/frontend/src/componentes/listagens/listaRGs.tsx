/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function ListaRGs() {
    interface RG {
        rg_id: string,
        clienteid: string,
        rgnumero: string,
        rgdataemissao: string
    }

    const [rgs, setRG] = useState<RG[]>([] as any);
    const navigate = useNavigate()

    const clienteID = localStorage.getItem('key_para_rg')
    const clienteCPF = localStorage.getItem('CPF')

    const listarRG = () => {
        Axios.get(`http://localhost:3001/listar-rgs/${clienteID}`)
            .then((response) => {
                setRG(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const enviarDadosRG = (rg: RG) => {
        const id = rg.rg_id
        const IDcliente = rg.clienteid
        const numero = rg.rgnumero
        const dataemissao = rg.rgdataemissao


        const data = {
            id: id,
            IDcliente: IDcliente,
            numero: numero,
            dataemissao: dataemissao
        }

        localStorage.setItem('id_cliente', data.IDcliente)
        // localStorage.setItem('CPF', clienteCPF)
        localStorage.setItem('dados_rg', JSON.stringify(data))
    }

    useEffect(() => {
        listarRG();
    }, []);
    console.log(rgs);

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Lista de RGs</h2>
                    <h5 style={{ textAlign: "center" }}>(Clique em uma linha da tabela para editar um RG)</h5>
                    <table className="table table-hover table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Número</th>
                                <th scope="col">Data de emissão (R$)</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {rgs.map((rg) => (
                                <tr key={rg.rg_id} className="item-hover" onClick={() => {
                                    enviarDadosRG(rg)
                                    navigate('/editar-rg')
                                }}>

                                    <td>{rg.rgnumero}</td>
                                    <td>{rg.rgdataemissao}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center input-group mb-3">
                        <button className="btn btn-secondary" onClick={() => navigate('/lista-clientes')}>Voltar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListaRGs;