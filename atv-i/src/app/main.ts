import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import CadastroServico from "../negocio/cadastros/cadastroServicos";
import EditorCliente from "../negocio/editores/editorCliente";
import EditorProduto from "../negocio/editores/editorProduto";
import ListagemClientes from "../negocio/listagens/listagemClientes";
import ListagemProdutos from "../negocio/listagens/listagemProdutos";
import ListagemServicos from "../negocio/listagens/listagemServicos";
import Selecionador from "../negocio/buscas/selecionador";
import SelecionadorProduto from "../negocio/buscas/selecionadorProduto";
import SelecionadorServico from "../negocio/buscas/selecionadorServico";
import EditorServico from "../negocio/editores/editorServico";
import cadastrarRG from "../negocio/cadastros/cadastroNovoRG";
import cadastrarPet from "../negocio/cadastros/cadastroNovoPet";
import cadastrarTelefone from "../negocio/cadastros/cadastroNovoTelefone";
import listarProdutosConsumidos from "../negocio/listagens/listagemConsumoProduto";
import listarServicosAtribuidos from "../negocio/listagens/listagemServicosAtribuidos";
import ListagemClientesTop5 from "../negocio/listagens/listagemConsumoEmValor";
import ListagemClientesTop10 from "../negocio/listagens/listagemConsumoEmQuantidade";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagens/listagemProdutosServicosMaisConsumidos";
import SelecionadorPet from "../negocio/buscas/selecionadorPet";
import EditorPets from "../negocio/editores/editarPets";

console.log(`\nBem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`\n1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar um cliente`);

    console.log(`4 - Excluir um cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar um produto`);
    console.log(`8 - Excluir um produto`);
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Editar um serviço`);
    console.log(`12 - Excluir um serviço`);

    console.log('13 - Adicionar pet')
    console.log(`14 - Editar pet`);
    console.log('15 - Adicionar RG')
    console.log('16 - Adicionar telefone')

    console.log('17 - Consumir produto')
    console.log('18 - Atribuir serviço')
    console.log('19 - Lista dos produtos / serviços mais consumidos')
    console.log('20 - Listar Top 5 clientes que mais consumiram produtos / serviços em valor')
    console.log('21 - Listar Top 10 clientes que mais consumiram produto / serviços em quantidade')
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch (opcao) {
        // CRUD - Cliente
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let cpfEditar = entrada.receberTexto('Digite um CPF para edição: ')
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)

            let editor = new EditorCliente()
            editor.editar(clienteEditar)

            console.log('\nCliente editado com sucesso :)')
            break

        case 4:
            let cpf = entrada.receberTexto('Digite um CPF para exclusão: ')
            let selecionadorCliente = new Selecionador(empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)
            // console.log(cliente)

            console.log(`Nome do cliente selecionado: ${cliente.nome}`);

            let indice = empresa.getClientes.indexOf(cliente)
            delete empresa.getClientes[indice]

            console.log('\nCliente exluído com sucesso. :)');

            break

        // CRUD - Produto
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break

        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break

        case 7:
            let produtoNome = entrada.receberTexto('Digite o nome do produto que deseja editar: ')
            let selecionadorProdutoEditar = new SelecionadorProduto(empresa.getProdutos)
            let produtoEditar = selecionadorProdutoEditar.selecionar(produtoNome)

            let editorProduto = new EditorProduto()
            editorProduto.editar(produtoEditar)
            console.log('\nProduto editado com sucesso :)')
            break

        case 8:
            let nomeProduto = entrada.receberTexto('Digite o nome do produto que deseja excluir: ')
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let produto = selecionadorProduto.selecionar(nomeProduto)

            console.log(`Nome do produto selecionado: ${produto.nome}`);

            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]

            console.log('\nProduto excluído com sucesso. :)');
            break

        //CRUD - Serviço
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break

        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break

        case 11:
            let nomeServico = entrada.receberTexto('Digite o nome do serviço que deseja editar: ')
            let selecionadorServicoEditar = new SelecionadorServico(empresa.getServicos)
            let novoServico = selecionadorServicoEditar.selecionar(nomeServico)

            let editarServico = new EditorServico()
            editarServico.editar(novoServico)
            console.log('\nServiço editado com sucesso :)')
            break

        case 12:
            let servicoNome = entrada.receberTexto('Digite o nome do serviço que deseja excluir: ')
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let servico = selecionadorServico.selecionar(servicoNome)

            console.log(`Serviço selecionado: ${servico.nome}`)

            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            console.log('\nServiço excluído com sucesso :)')
            break


        case 13:
            let cpfCliente = entrada.receberTexto('Digite o CPF do cliente que deseja adicionar um pet: ')
            let selecionarCliente = new Selecionador(empresa.getClientes)
            let clienteSelecionado = selecionarCliente.selecionar(cpfCliente)

            console.log(`Nome do cliente selecionado: ${clienteSelecionado.nome}`);

            cadastrarPet(clienteSelecionado)

            console.log(`\nPet adicionado com sucesso ao cliente ${clienteSelecionado.nome}.`)
            console.log(clienteSelecionado.getPets)
            break

        case 14:
            let cpfEditarPet = entrada.receberTexto('Digite o CPF do cliente que deseja editar um Pet: ')
            let selecionaCliente = new Selecionador(empresa.getClientes)
            let cliente_buscado = selecionaCliente.selecionar(cpfEditarPet)

            console.log('Nome do cliente: ' + cliente_buscado.nome)

            let pet = entrada.receberTexto('Digite o nome do Pet que deseja editar: ')
            let selecionaPet = new SelecionadorPet(cliente_buscado.getPets)
            let petEncontrado = selecionaPet.selecionar(pet)

            console.log(`Pet selecionado: ${petEncontrado.getNome}`)

            let editorPet = new EditorPets()
            editorPet.editar(petEncontrado)
            break

        case 15:
            let rgCliente = entrada.receberTexto('Digite o CPF do cliente que deseja adicionar um RG: ')
            let selecionarClienteRG = new Selecionador(empresa.getClientes)
            let clienteSelecionadoRG = selecionarClienteRG.selecionar(rgCliente)

            console.log(`\nNome do cliente selecionado: ${clienteSelecionadoRG.nome}`);

            cadastrarRG(clienteSelecionadoRG)

            console.log(`\nRG adicionado com sucesso ao cliente ${clienteSelecionadoRG.nome}.`)
            console.log(clienteSelecionadoRG.getRgs)
            break

        case 16:
            let clienteCpf = entrada.receberTexto('Digite o CPF do cliente que deseja adicionar um telefone: ')
            let selecionarClienteTelefone = new Selecionador(empresa.getClientes)
            let clienteSelecionadoTelefone = selecionarClienteTelefone.selecionar(clienteCpf)

            console.log(`Nome do cliente selecionado: ${clienteSelecionadoTelefone.nome}`);

            cadastrarTelefone(clienteSelecionadoTelefone)

            console.log(`\nTelefone adicionado com sucesso ao cliente ${clienteSelecionadoTelefone.nome}.`)
            console.log(clienteSelecionadoTelefone.getTelefones)
            break

        case 17:
            let input = entrada.receberTexto('Digite o CPF do cliente que deseja consumir um produto: ')
            let encontraCliente = new Selecionador(empresa.getClientes)
            let clienteEncontrado = encontraCliente.selecionar(input)

            console.log(`\nNome do cliente selecionado: ${clienteEncontrado.nome}`);

            let inputProduto = entrada.receberTexto('Digite o nome do produto que deseja consumir: ')
            let buscaProduto = new SelecionadorProduto(empresa.getProdutos)
            let produtoEncontrado = buscaProduto.selecionar(inputProduto)

            clienteEncontrado.consumirProduto(produtoEncontrado)
            listarProdutosConsumidos(clienteEncontrado)
            break

        case 18:
            let input_cpf = entrada.receberTexto('Digite o CPF do cliente que deseja atribuir um serviço: ')
            let encontrarCliente = new Selecionador(empresa.getClientes)
            let cliente_encontrado = encontrarCliente.selecionar(input_cpf)

            console.log(`\nNome do cliente selecionado: ${cliente_encontrado.nome}`);

            let inputServico = entrada.receberTexto('Digite o nome do serviço que deseja atribuir: ')
            let buscaServico = new SelecionadorServico(empresa.getServicos)
            let servicoEncontrado = buscaServico.selecionar(inputServico)

            cliente_encontrado.atribuirServico(servicoEncontrado)
            listarServicosAtribuidos(cliente_encontrado)
            break


        case 19:
            let listagemProdutoServicos = new ListagemProdutosServicosMaisConsumidos(empresa.getClientes)
            listagemProdutoServicos.listar()
            break

        case 20:
            let listagemTop5 = new ListagemClientesTop5(empresa.getClientes)
            listagemTop5.listar()
            break

        case 21:
            let listagemTop10 = new ListagemClientesTop10(empresa.getClientes)
            listagemTop10.listar()
            break

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
            
        default:
            console.log(`Operação não entendida :(`)
    }
}