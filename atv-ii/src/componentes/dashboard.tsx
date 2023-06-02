import { Component } from "react";
import { ListagemTop5, ListagemTop10, ListagemMaisConsumidos } from "./tabelas";
import "./margin.css"

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="margin-lista">
                    <ListagemTop5 />
                    <div className="margin-lista">
                        <ListagemTop10 />
                    </div>
                    <div className="margin-lista">
                        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Top Produtos e Serviços mais consumidos</h2>
                        <ListagemMaisConsumidos />
                    </div>
                </div>
            </>
        )
    }
}