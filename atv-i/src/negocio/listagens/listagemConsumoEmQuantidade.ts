import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesTop10 extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log('\nTop 10 clientes que mais consumiram em quantidade:\n')

        this.clientes.forEach(cliente => {
            let quantidadeProdutosConsumidos    = cliente.getProdutosConsumidos.length
            let quantidadeServicoConsumidos     = cliente.getServicosConsumidos.length
            let quantidadeTotalConsumida        = quantidadeProdutosConsumidos + quantidadeServicoConsumidos

            cliente.quantidadeTotalConsumida = quantidadeTotalConsumida
        })

        const clientesOrdenados = this.clientes.sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida)
        const top10 = clientesOrdenados.slice(0,10)
        
        top10.forEach((cliente, indice) => {
            console.log(`${indice + 1} - ${cliente.nome}: ${cliente.quantidadeTotalConsumida} produtos / serviços consumidos.\n`)
        })
    }
}