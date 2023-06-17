/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './barraNavegacao.css'
import logo from '../Imagens/pets-logo.svg'

type props = {
    tema: string
}

function BarraNavegacao(props: { tema: any; }) {
    const tema = props.tema;
  
    return (
      <>
        <Navbar className="navbar-color" style={{ background: tema }} expand="lg">
          <Container>
            <div>
              <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="logo-nome">
              <Navbar.Brand href="/home">PetLovers</Navbar.Brand>
            </div>
  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Início</Nav.Link>
                <NavDropdown title="Clientes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/cadastro-cliente">Cadastro de clientes</NavDropdown.Item>
                  <NavDropdown.Item href="/lista-clientes">Listar todos os clientes</NavDropdown.Item>
                </NavDropdown>
  
                <NavDropdown title="Produtos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/cadastro-produto">Cadastro de produtos</NavDropdown.Item>
                  <NavDropdown.Item href="/lista-produtos">Listar todos os produtos</NavDropdown.Item>
                </NavDropdown>
  
                <NavDropdown title="Serviços" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/cadastro-servico">Cadastro de serviços</NavDropdown.Item>
                  <NavDropdown.Item href="/lista-servicos">Listar todos os serviços</NavDropdown.Item>
                </NavDropdown>
  
                <NavDropdown title="Cadastros adicionais" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/adicionar-rg">Adicionar um RG</NavDropdown.Item>
                  <NavDropdown.Item href="/adicionar-telefone">Adicionar um telefone</NavDropdown.Item>
                  <NavDropdown.Item href="/adicionar-pet">Adicionar um Pet</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Consumir" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/consumir-produto">Consumir produtos</NavDropdown.Item>
                  <NavDropdown.Item href="/consumir-servico">Consumir serviços</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
export default BarraNavegacao;