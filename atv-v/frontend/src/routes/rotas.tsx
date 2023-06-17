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
import EditarPet from "../componentes/editores/editarPet";
import EditarRG from "../componentes/editores/editarRG";
import EditarTelefone from "../componentes/editores/editarTelefone";
import ConsumirProdutos from "../componentes/consumos/consumirProdutos";
import ConsumirServicos from "../componentes/consumos/consumirServicos";
import Dashboard from "../componentes/dashboard/dashboard";
import ListaPets from "../componentes/listagens/listaPets";
import ListaTelefones from "../componentes/listagens/listaTelefones";
import ListaRGs from "../componentes/listagens/listaRGs";
import EditarProduto from "../componentes/editores/editarProduto";
import EditarServico from "../componentes/editores/editarServico";
import EditarCliente from "../componentes/editores/editarCliente";

export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Inicio />} />
            
            <Route path='/lista-clientes' element={<ListaCliente />} />
            <Route path='/lista-produtos' element={<ListaProdutos />} />
            <Route path='/lista-servicos' element={<ListaServicos />} />
            <Route path='/lista-pets' element={<ListaPets />} />
            <Route path='/lista-telefones' element={<ListaTelefones />} />
            <Route path='/lista-rgs' element={<ListaRGs />} />

            <Route path='/cadastro-cliente' element={<FormularioCadastroCliente tema="#00ced1"/>} />
            <Route path='/cadastro-produto' element={<FormularioCadastroProduto tema="#00ced1"/>} />
            <Route path='/cadastro-servico' element={<FormularioCadastroServico tema="#00ced1"/>} />

            <Route path='/adicionar-rg' element={<AdicionarRG tema="#00ced1"/>} />
            <Route path='/adicionar-telefone' element={<AdicionarTelefone tema="#00ced1"/>} />
            <Route path='/adicionar-pet' element={<AdicionarPet tema="#00ced1"/>} />

            <Route path='/editar-cliente' element={<EditarCliente tema="#00ced1"/>} />
            <Route path='/editar-produto' element={<EditarProduto tema="#00ced1"/>} />
            <Route path='/editar-servico' element={<EditarServico tema="#00ced1"/>} />
            <Route path='/editar-rg' element={<EditarRG tema="#00ced1"/>} />
            <Route path='/editar-telefone' element={<EditarTelefone tema="#00ced1"/>} />
            <Route path='/editar-pet' element={<EditarPet tema="#00ced1"/>} />

            <Route path="/consumir-produto" element={<ConsumirProdutos tema="#00ced1" />} />
            <Route path="/consumir-servico" element={<ConsumirServicos tema="#00ced1" />} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
        </Routes>
        </BrowserRouter>
    )
}