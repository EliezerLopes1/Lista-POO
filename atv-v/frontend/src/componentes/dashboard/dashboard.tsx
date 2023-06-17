import { Component } from "react";
import { ListagemTop5, ListagemTop10, ListagemMaisConsumidos } from "./tabelas";
import "../margin.css"
import "./dashboard.css"

function Dashboard() {
    return (
      <>
        <div className="margin-lista">
          <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Top 5 Clientes que mais consumiram em valor</h2>
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
    );
  }

export default Dashboard;