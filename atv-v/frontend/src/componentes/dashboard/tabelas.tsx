import Table from 'react-bootstrap/Table';

export function ListagemTop5() {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nome</th>
                                        <th>Valor gasto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>R$ 800,00</td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>R$ 300,00</td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry the Bird</td>
                                        <td>R$ 215,00</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Thomas</td>
                                        <td>R$ 200,00</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Jonas</td>
                                        <td>R$ 150,00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ListagemTop10() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-6">
                    <div className="card">
                        <h4 style={{ textAlign: "center", marginBottom: "-15px", marginTop: "10px" }}>Top 10 Clientes que mais consumiram em Quantidade</h4>
                        <div className="card-body"></div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Quantidade consumida de produtos / serviços</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>100</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>80</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Thomas</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Jonas</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Junior</td>
                                    <td>35</td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Mário</td>
                                    <td>30</td>

                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Luan the Bird</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Tomas</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Joãozinho</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <h4 style={{ textAlign: "center", marginBottom: "-15px", marginTop: "10px" }}>Lista por tipo e raça de Pets</h4>
                        <div className="card-body"></div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Tipo e Raça</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Gato - Mestiço</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Cachorro - Pug</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>Coelho - Golias</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Thomas</td>
                                    <td>Cachorro - Rottweiler</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Jonas</td>
                                    <td>Gato - Vira-Lata</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Junior</td>
                                    <td>Gato - Siamês</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Mário</td>
                                    <td>Cachorro</td>

                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Luan the Bird</td>
                                    <td>Cachorro - Vira-Lata</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Tomas</td>
                                    <td>Cachorro - Pinscher</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Joãozinho</td>
                                    <td>Cachorro - Poodle</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
}


export function ListagemMaisConsumidos() {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body"></div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Produto</th>
                                    <th>Quantidade consumida</th>
                                    {/* <th>Serviço</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Escova</td>
                                    <td>50</td>
                                    {/* <td>R$ 800,00</td> */}
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Galinha de borracha</td>
                                    <td>45</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bolinha</td>
                                    <td>30</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ração</td>
                                    <td>25</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Shampoo</td>
                                    <td>10</td>
                                    {/* <td>Tosa</td> */}
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-body"></div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serviço</th>
                                    <th>Quantidade consumida</th>
                                    {/* <th>Serviço</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Escova</td>
                                    <td>50</td>
                                    {/* <td>R$ 800,00</td> */}
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Galinha de borracha</td>
                                    <td>45</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bolinha</td>
                                    <td>30</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ração</td>
                                    <td>25</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Shampoo</td>
                                    <td>10</td>
                                    {/* <td>Tosa</td> */}
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
}