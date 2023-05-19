import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaCliente from "../componentes/listaClientes";
import FormularioCadastroCliente from "../componentes/formularioCadastroCliente";
import FormularioCadastroProduto from "../componentes/formularioCadastroProduto";
import ListaProdutos from "../componentes/listaProdutos";

export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/lista-clientes' element={<ListaCliente tema="#00ced1"/>} />
            <Route path='/lista-produtos' element={<ListaProdutos tema="#00ced1"/>} />
            <Route path='/cadastro-cliente' element={<FormularioCadastroCliente tema="#00ced1"/>} />
            <Route path='/cadastro-produto' element={<FormularioCadastroProduto tema="#00ced1"/>} />
            
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        </BrowserRouter>
    )
}