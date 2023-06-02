import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="margin-lista">
                        <h2 style={{ textAlign: "center" }}>Cadastro de serviços</h2>
                    </div>
                    <div className="margin-lista">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                            <input type="number" className="form-control" placeholder="Preço" aria-label="E-mail" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}