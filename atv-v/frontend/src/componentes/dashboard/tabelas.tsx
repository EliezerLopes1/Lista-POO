import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

export function ListagemTop5() {

    interface ClienteMaisConsumiramProdutosValor {
        clienteID: String;
        clientenomesocial: string;
        total_valor_produtos_consumidos: string;
    }

    interface ClienteMaisConsumiramServicoValor {
        clienteID: String;
        clientenomesocial: string;
        total_valor_servicos_consumidos: string;
    }

    const [ClienteMaisConsumiramProdutosValor, setClienteMaisConsumiuProdutos] = useState<ClienteMaisConsumiramProdutosValor[]>([]);

    useEffect(() => {
        listarProdutosMaisConsumidos();
    }, []);

    const listarProdutosMaisConsumidos = () => {
        axios.get("http://localhost:3001/clientesMaisConsumiramProdutosValor")
            .then((response) => {
                setClienteMaisConsumiuProdutos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [ClienteMaisConsumiramServicoValor, setClienteMaisConsumiuServicosValor] = useState<ClienteMaisConsumiramServicoValor[]>([]);

    useEffect(() => {
        listarServicosMaisConsumidos();
    }, []);

    const listarServicosMaisConsumidos = () => {
        axios.get("http://localhost:3001/clientesMaisConsumiramServicosValor")
            .then((response) => {
                setClienteMaisConsumiuServicosValor(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Valor gasto (R$)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ClienteMaisConsumiramProdutosValor.map((ClienteMaisConsumiramProdutosValor) => (
                                        <tr>
                                            <td>{ClienteMaisConsumiramProdutosValor.clientenomesocial}</td>
                                            <td>{ClienteMaisConsumiramProdutosValor.total_valor_produtos_consumidos}</td>
                                        </tr>
                                    ))}

                                    {ClienteMaisConsumiramServicoValor.map((ClienteMaisConsumiramServicoValor) => (
                                        <tr>
                                            <td>{ClienteMaisConsumiramServicoValor.clientenomesocial}</td>
                                            <td>{ClienteMaisConsumiramServicoValor.total_valor_servicos_consumidos}</td>
                                        </tr>
                                    ))}
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

    interface ClienteMaisConsumiramProdutos {
        clienteID: String;
        clientenomesocial: string;
        total_produtos_consumidos: string;
    }

    interface ClienteMaisConsumiramServico {
        clienteID: String;
        clientenomesocial: string;
        total_servicos_consumidos: string;
    }

    const [ClienteMaisConsumiramProdutos, setClienteMaisConsumiuProdutos] = useState<ClienteMaisConsumiramProdutos[]>([]);

    useEffect(() => {
        listarProdutosMaisConsumidos();
    }, []);

    const listarProdutosMaisConsumidos = () => {
        axios.get("http://localhost:3001/clientesMaisConsumiramProdutosQTD")
            .then((response) => {
                setClienteMaisConsumiuProdutos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [ClienteMaisConsumiramServico, setClienteMaisConsumiuServicos] = useState<ClienteMaisConsumiramServico[]>([]);

    useEffect(() => {
        listarServicosMaisConsumidos();
    }, []);

    const listarServicosMaisConsumidos = () => {
        axios.get("http://localhost:3001/clientesMaisConsumiramServicosQTD")
            .then((response) => {
                setClienteMaisConsumiuServicos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                                    <th>Nome</th>
                                    <th>Quantidade consumida de produtos / serviços</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ClienteMaisConsumiramProdutos.map((ClienteMaisConsumiramProdutos) => (
                                    <tr>
                                        <td>{ClienteMaisConsumiramProdutos.clientenomesocial}</td>
                                        <td>{ClienteMaisConsumiramProdutos.total_produtos_consumidos}</td>
                                    </tr>
                                ))}
                                {ClienteMaisConsumiramServico.map((ClienteMaisConsumiramServico) => (
                                    <tr>
                                        <td>{ClienteMaisConsumiramServico.clientenomesocial}</td>
                                        <td>{ClienteMaisConsumiramServico.total_servicos_consumidos}</td>
                                    </tr>
                                ))}
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

    interface ProdutoMaisConsumido {
        produtonome: string;
        quantidade: string;
    }

    interface ServicoMaisConsumido {
        serviconome: string;
        quantidade: string;
    }
    const [ProdutosMaisConsumidos, setProdutoMC] = useState<ProdutoMaisConsumido[]>([]);
    const [ServicoMaisConsumido, setServicoMC] = useState<ServicoMaisConsumido[]>([]);

    useEffect(() => {
        listarProdutosMaisConsumidos();
    }, []);

    const listarProdutosMaisConsumidos = () => {
        axios
            .get("http://localhost:3001/produtosMaisConsumidos")
            .then((response) => {
                setProdutoMC(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        listarServicosMaisConsumidos();
    }, []);

    const listarServicosMaisConsumidos = () => {
        axios.get("http://localhost:3001/listarServicosMaisConsumidos")
            .then((response) => {
                setServicoMC(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body"></div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Quantidade consumida</th>
                                    {/* <th>Serviço</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {ProdutosMaisConsumidos.map((ProdutoMaisConsumido) => (
                                    <tr>
                                        <td>{ProdutoMaisConsumido.produtonome}</td>
                                        <td>{ProdutoMaisConsumido.quantidade}</td>
                                    </tr>
                                ))}

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
                                    <th>Serviço</th>
                                    <th>Quantidade consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ServicoMaisConsumido.map((ServicoMaisConsumido) => (
                                    <tr>
                                        <td>{ServicoMaisConsumido.serviconome}</td>
                                        <td>{ServicoMaisConsumido.quantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
}