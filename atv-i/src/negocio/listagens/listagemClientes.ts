import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            
            let listaPets = []
            let listaRgs = []
            let listaTelefones = []
            let listaProdutoConsumidos = []
            let listaServicosAtribuidos = []
            let totalGastoProduto = 0
            let totalGastoServico = 0
            
            for (let x = 0; x < cliente.getPets.length; x++) {
                listaPets.push(cliente.getPets[x].getNome)
            }

            for (let y = 0; y < cliente.getRgs.length; y++) {
                listaRgs.push(cliente.getRgs[y].getValor)
            }

            for (let z = 0; z < cliente.getTelefones.length; z++) {
                let telefoneFormatado = `(${cliente.getTelefones[z].getDdd}) ${cliente.getTelefones[z].getNumero}`
                listaTelefones.push(telefoneFormatado)
            }
            
            for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
                listaProdutoConsumidos.push(cliente.getProdutosConsumidos[x].nome)
                totalGastoProduto += cliente.getProdutosConsumidos[x].preco
            }

            for (let y = 0; y < cliente.getServicosConsumidos.length; y++) {
                listaServicosAtribuidos.push(cliente.getServicosConsumidos[y].nome)
                totalGastoServico += cliente.getServicosConsumidos[y].preco
            }

            let totalGasto = totalGastoProduto + totalGastoServico

            console.log(`RGs: ${listaRgs}`)
            console.log(`Telefones: ${listaTelefones}`)
            console.log(`Pets: ${listaPets}`)
            console.log(cliente.getPets[0].getProdutosConsumidos)
            console.log(cliente.getPets[0].getServicosConsumidos)
            console.log(`Produtos consumidos: ${listaProdutoConsumidos}`)
            console.log(`Serviços atribuídos: ${listaServicosAtribuidos}`)
            console.log(`Valor gasto: ${totalGasto.toFixed(2)}`)
            console.log(`\n--------------------------------------`);
        });
        // console.log(`\n`);
    }
}