import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaCliente from "../componentes/listaClientes";
import FormularioCadastroCliente from "../componentes/formularioCadastroCliente";
import FormularioCadastroProduto from "../componentes/formularioCadastroProduto";
import ListaProdutos from "../componentes/listaProdutos";
import FormularioCadastroServico from "../componentes/formularioCadastroServico";
import ListaServicos from "../componentes/listaServicos";
import AdicionarRG from "../componentes/adicionarRG";
import AdicionarTelefone from "../componentes/adicionarTelefone";
import AdicionarPet from "../componentes/adicionarPet";
import Inicio from "../componentes/paginaInicial";
import Dashboard from "../componentes/dashboard";

export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Inicio />} />
            <Route path='/lista-clientes' element={<ListaCliente tema="#00ced1"/>} />
            <Route path='/lista-produtos' element={<ListaProdutos tema="#00ced1"/>} />
            <Route path='/lista-servicos' element={<ListaServicos tema="#00ced1"/>} />
            <Route path='/cadastro-cliente' element={<FormularioCadastroCliente tema="#00ced1"/>} />
            <Route path='/cadastro-produto' element={<FormularioCadastroProduto tema="#00ced1"/>} />
            <Route path='/cadastro-servico' element={<FormularioCadastroServico tema="#00ced1"/>} />

            <Route path='/adicionar-rg' element={<AdicionarRG tema="#00ced1"/>} />
            <Route path='/adicionar-telefone' element={<AdicionarTelefone tema="#00ced1"/>} />
            <Route path='/adicionar-pet' element={<AdicionarPet tema="#00ced1"/>} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
        </Routes>
        </BrowserRouter>
    )
}