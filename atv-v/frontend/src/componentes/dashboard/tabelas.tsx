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

    interface ProdutoMaisConsumidoPorRaca {
        petraca: String;
        produtonome: string;
        quantidade: string;
    }

    interface ServicoMaisConsumidoPorRaca {
        petraca: String;
        serviconome: string;
        quantidade: string;
    }

    interface ProdutoMaisConsumidoPorTipo {
        pettipo: String;
        produtonome: string;
        quantidade: string;
    }

    interface ServicoMaisConsumidoPorTipo {
        pettipo: String;
        serviconome: string;
        quantidade: string;
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

    const [ProdutoMaisConsumidoPorRaca, setProdutoMaisConsumidoPorRaca] = useState<ProdutoMaisConsumidoPorRaca[]>([]);

    useEffect(() => {
        listarProdutosMaisConsumidosRaca();
    }, []);

    const listarProdutosMaisConsumidosRaca = () => {
        axios.get("http://localhost:3001/produtosMaisConsumidosPorRacaPet")
            .then((response) => {
                setProdutoMaisConsumidoPorRaca(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [ServicoMaisConsumidoPorRaca, setServicoMaisConsumidoPorRaca] = useState<ServicoMaisConsumidoPorRaca[]>([]);

    useEffect(() => {
        listarServicosMaisConsumidosRaca();
    }, []);

    const listarServicosMaisConsumidosRaca = () => {
        axios.get("http://localhost:3001/servicosMaisConsumidosPorRacaPet")
            .then((response) => {
                setServicoMaisConsumidoPorRaca(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [ProdutoMaisConsumidoPorTipo, setProdutoMaisConsumidoPorTipo] = useState<ProdutoMaisConsumidoPorTipo[]>([]);

    useEffect(() => {
        listarProdutosMaisConsumidosTipo();
    }, []);

    const listarProdutosMaisConsumidosTipo = () => {
        axios.get("http://localhost:3001/produtosMaisConsumidosPorTipoPet")
            .then((response) => {
                setProdutoMaisConsumidoPorRaca(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [ServicoMaisConsumidoPorTipo, setServicoMaisConsumidoPorTipo] = useState<ServicoMaisConsumidoPorTipo[]>([]);

    useEffect(() => {
        listarServicosMaisConsumidosTipo();
    }, []);

    const listarServicosMaisConsumidosTipo = () => {
        axios.get("http://localhost:3001/servicosMaisConsumidosPorTipoPet")
            .then((response) => {
                setServicoMaisConsumidoPorTipo(response.data);
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
                                    <th scope="col">Tipo / Raça do pet</th>
                                    <th scope="col">Produto / Serviço</th>
                                    <th scope="col">Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProdutoMaisConsumidoPorRaca.map((ProdutoMaisConsumidoPorRaca) => (
                                    <tr>
                                        <td>{ProdutoMaisConsumidoPorRaca.petraca}</td>
                                        <td>{ProdutoMaisConsumidoPorRaca.produtonome}</td>
                                        <td>{ProdutoMaisConsumidoPorRaca.quantidade}</td>
                                    </tr>
                                ))}

                                {ServicoMaisConsumidoPorRaca.map((ServicoMaisConsumidoPorRaca) => (
                                    <tr>
                                        <td>{ServicoMaisConsumidoPorRaca.petraca}</td>
                                        <td>{ServicoMaisConsumidoPorRaca.serviconome}</td>
                                        <td>{ServicoMaisConsumidoPorRaca.quantidade}</td>
                                    </tr>
                                ))}

                                {ProdutoMaisConsumidoPorTipo.map((ProdutoMaisConsumidoPorTipo) => (
                                    <tr>
                                        <td>{ProdutoMaisConsumidoPorTipo.pettipo}</td>
                                        <td>{ProdutoMaisConsumidoPorTipo.produtonome}</td>
                                        <td>{ProdutoMaisConsumidoPorTipo.quantidade}</td>
                                    </tr>
                                ))}

                                {ServicoMaisConsumidoPorTipo.map((ServicoMaisConsumidoPorTipo) => (
                                    <tr>
                                        <td>{ServicoMaisConsumidoPorTipo.pettipo}</td>
                                        <td>{ServicoMaisConsumidoPorTipo.serviconome}</td>
                                        <td>{ServicoMaisConsumidoPorTipo.quantidade}</td>
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