/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./listaCliente.css"

type props = {
    tema: string
}

export default class ListaProdutos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <div className="margin-lista">
                        {/* <i className="bi bi-trash-fill"></i> */}

                        <a href="#" className="list-group-item list-group-item-action">
                            Produto 1
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Produto 4</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 5</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 6</a>
                    </div>
                </div>
            </div>
        )
    }
}