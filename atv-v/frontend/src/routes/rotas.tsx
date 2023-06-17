import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../componentes/paginaInicial";
import ListaCliente from "../componentes/listagens/listaClientes";
import FormularioCadastroCliente from "../componentes/cadastros/formularioCadastroCliente";
import FormularioCadastroProduto from "../componentes/cadastros/formularioCadastroProduto";
import ListaProdutos from "../componentes/listagens/listaProdutos";
import FormularioCadastroServico from "../componentes/cadastros/formularioCadastroServico";
import ListaServicos from "../componentes/listagens/listaServicos";
import AdicionarRG from "../componentes/cadastros-adicionais/adicionarRG";
import AdicionarTelefone from "../componentes/cadastros-adicionais/adicionarTelefone";
import AdicionarPet from "../componentes/cadastros-adicionais/adicionarPet";
import ConsumirProdutos from "../componentes/consumos/consumirProdutos";
import ConsumirServicos from "../componentes/consumos/consumirServicos";
import Dashboard from "../componentes/dashboard/dashboard";

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


            <Route path="/consumir-produto" element={<ConsumirProdutos tema="#00ced1" />} />
            <Route path="/consumir-servico" element={<ConsumirServicos tema="#00ced1" />} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
        </Routes>
        </BrowserRouter>
    )
}