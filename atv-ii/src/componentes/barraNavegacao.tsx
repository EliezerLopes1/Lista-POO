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

export default class BarraNavegacao extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <Navbar className="navbar-color" style={{ background: tema }} expand="lg">
                    <Container>
                        <div>
                            <img className="logo-img" src={logo}/>
                        </div>
                        <div className="logo-nome">
                            <Navbar.Brand href="#home">
                                PetLovers
                            </Navbar.Brand> 
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

                                <NavDropdown title="Cadastros adicionais" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">Adicionar um RG</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Adicionar um telefone</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Adicionar um Pet</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="/home">Dashboard</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}