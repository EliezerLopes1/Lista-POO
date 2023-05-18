import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesTop5 extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log('\nTop 5 clientes que mais consumiram em valor:\n')

        this.clientes.forEach(cliente => {
            let listaProdutoConsumidos = []
            let listaServicosAtribuidos = []
            let totalGastoProduto = 0
            let totalGastoServico = 0

            for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
                listaProdutoConsumidos.push(cliente.getProdutosConsumidos[x].nome)
                totalGastoProduto += cliente.getProdutosConsumidos[x].preco
            }

            for (let y = 0; y < cliente.getServicosConsumidos.length; y++) {
                listaServicosAtribuidos.push(cliente.getServicosConsumidos[y].nome)
                totalGastoServico += cliente.getServicosConsumidos[y].preco
            }

            let totalGasto = totalGastoProduto + totalGastoServico
            cliente.valorGasto = totalGasto
        })

        const clientesOrdenados = this.clientes.sort((a, b) => b.valorGasto - a.valorGasto)
        const top5 = clientesOrdenados.slice(0,5)
        
        top5.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: R$ ${cliente.valorGasto} gastos com produtos / serviços.\n`)
        })
    }
}