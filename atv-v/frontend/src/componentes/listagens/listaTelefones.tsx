/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";



function ListaTelefones() {
    interface Telefones {
        telefoneid: string,
        clienteid: string,
        telefoneddd: string,
        telefonenumero: number
    }

    const [telefones, setTelefones] = useState<Telefones[]>([] as any);
    const navigate = useNavigate()

    const clienteID = localStorage.getItem('key_para_telefone')

    const listarTelefones = () => {
        Axios.get(`http://localhost:3001/listar-telefones/${clienteID}`)
            .then((response) => {
                setTelefones(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const enviarDadosTelefone = (telefone: Telefones) => {
        const id = telefone.telefoneid
        const IDcliente = telefone.clienteid
        const ddd = telefone.telefoneddd
        const numero = telefone.telefonenumero

        const data = {
            id: id,
            IDcliente: IDcliente,
            ddd: ddd,
            numero: numero
        }

        localStorage.setItem('dados_telefone', JSON.stringify(data))
    }

    useEffect(() => {
        listarTelefones();
    }, []);

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Lista de Telefones</h2>
                    <h5 style={{ textAlign: "center" }}>(Clique em uma linha da tabela para editar um Telefone)</h5>
                    <table className="table table-hover table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Número</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {telefones.map((telefone) => (

                                <tr key={telefone.telefoneid} className="item-hover" onClick={() => {
                                    enviarDadosTelefone(telefone)
                                    navigate('/editar-telefone')
                                }}>

                                    <td>({telefone.telefoneddd})  {telefone.telefonenumero}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default ListaTelefones;