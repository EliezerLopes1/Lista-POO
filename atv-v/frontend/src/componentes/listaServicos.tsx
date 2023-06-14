/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

function ListaServicos(props: { tema: any; }) {
    let tema = props.tema;
  
    return (
      <div className="container-fluid">
        <div className="list-group">
          <div className="margin-lista">
            <a href="#" className="list-group-item list-group-item-action">Serviço 1</a>
            <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
            <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
            <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Serviço 4</a>
            <a href="#" className="list-group-item list-group-item-action">Serviço 5</a>
            <a href="#" className="list-group-item list-group-item-action">Serviço 6</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ListaServicos;