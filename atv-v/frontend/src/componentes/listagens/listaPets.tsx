/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";



function ListaPets() {
    interface Pets {
        petid: string,
        clienteid: string,
        petnome: string,
        pettipo: string,
        petraca: string,
        petgenero: string
    }

    const [pets, setPets] = useState<Pets[]>([] as any);
    const navigate = useNavigate()

    const clienteID = localStorage.getItem('key_para_pet')
    const PF = localStorage.getItem('CPF')

    const listarPets = () => {
        Axios.get(`http://localhost:3001/listar-pets/${clienteID}`)
            .then((response) => {
                setPets(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const enviarDadosPet = (pet: Pets) => {
        const id = pet.petid
        const IDcliente = pet.clienteid
        const nome = pet.petnome
        const tipo = pet.pettipo
        const raca = pet.petraca
        const genero = pet.petgenero


        const data = {
            id: id,
            IDcliente: IDcliente,
            nome: nome,
            tipo: tipo,
            raca: raca,
            genero: genero
        }

        localStorage.setItem('cliente_id', data.IDcliente)
        localStorage.setItem('pet_id', data.id)
        localStorage.setItem('dados_pet', JSON.stringify(data))
    }

    useEffect(() => {
        listarPets();
    }, []);
    console.log(pets);

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Lista de Pets</h2>
                    <h5 style={{ textAlign: "center" }}>(Clique em uma linha da tabela para editar um Pet)</h5>
                    <table className="table table-hover table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Raça</th>
                                <th scope="col">Gênero</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {pets.map((pet) => (
                                <tr key={pet.petid} className="item-hover" onClick={() => {
                                    enviarDadosPet(pet)
                                    navigate('/editar-pet')
                                }
                                }>

                                    <td>{pet.petnome}</td>
                                    <td>{pet.pettipo}</td>
                                    <td>{pet.petraca}</td>
                                    <td>{pet.petgenero}</td>

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

export default ListaPets;