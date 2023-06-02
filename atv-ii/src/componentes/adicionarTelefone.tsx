import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

export default class AdicionarTelefone extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="margin-lista">
                        <h2 style={{ textAlign: "center" }}>Adicionar um telefone</h2>
                    </div>
                    <div className="margin-lista">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>DDD</span>
                            <input type="text" className="form-control" placeholder="" aria-label="Telefone" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
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