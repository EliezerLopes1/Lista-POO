import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesTop10 extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
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

    public listarPorTipoRaca() : void {
        console.log('\nTop 10 produtos / serviços mais consumidos por tipo e raça de Pets:\n')

        let input = this.entrada.receberTexto('Listar por tipo ou por raça? Escolha uma opção: ')
        this.clientes.forEach(cliente => {
            let pets = cliente.getPets
            
            pets.forEach(pet => {
                let quantidadeProdutosConsumidosPet     = pet.getProdutosConsumidos.length
                let quantidadeServicoConsumidosPet      = pet.getServicosConsumidos.length
                let quantidadeTotalConsumidaPet         = quantidadeProdutosConsumidosPet + quantidadeServicoConsumidosPet

                pet.quantidadeTotalConsumida = quantidadeTotalConsumidaPet
            })
        })
    }
}