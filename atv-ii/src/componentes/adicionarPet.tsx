import { Component } from "react";

type props = {
    tema: string
}

export default class AdicionarPet extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo do Pet" aria-label="Tipo do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero do Pet" aria-label="Gênero do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}