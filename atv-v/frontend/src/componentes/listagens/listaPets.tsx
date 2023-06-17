/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "../margin.css"
import Axios from 'axios'



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
  
  const clienteID = localStorage.getItem('key_para_pet')

  const listarPets = () => {
    Axios.get(`http://localhost:3001/listar-pets/${clienteID}`)
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <tr key={pet.petid} className="item-hover">

                  <td>{pet.petnome}</td>
                  <td>{pet.pettipo}</td>
                  <td>{pet.petraca}</td>
                  <td>{pet.petgenero}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}

export default ListaPets;