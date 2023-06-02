import { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class ListagemTop5 extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-6">
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

}

export class ListagemTop10 extends Component {
    render() {
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
                </div>
            </div>
        );
    }
}

export class ListagemMaisConsumidos extends Component {
    render() {
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
                                        {/*<td>R$ 800,00</td>*/}
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bolinha</td>
                                        <td>30</td>
                                        {/*<td>R$ 800,00</td>*/}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Ração</td>
                                        <td>25</td>
                                        {/*<td>R$ 800,00</td>*/}
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
                                        {/*<td>R$ 800,00</td>*/}
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bolinha</td>
                                        <td>30</td>
                                        {/*<td>R$ 800,00</td>*/}
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Ração</td>
                                        <td>25</td>
                                        {/*<td>R$ 800,00</td>*/}
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
}