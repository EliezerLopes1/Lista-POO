import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

interface Atributos {
    nome: string,
    quantidade: number
}

export default class ListagemProdutosServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log('\nLista de produtos e serviços mais consumidos:')

        let produtosMaisConsumidos: Atributos[] = []
        let servicosMaisConsumidos: Atributos[] = []

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                const indice = produtosMaisConsumidos.findIndex(item => item.nome === produto.nome)
                if (indice !== -1) {
                    produtosMaisConsumidos[indice].quantidade++
                } else {
                    produtosMaisConsumidos.push({ nome: produto.nome, quantidade: 1 })
                }
            })

            cliente.getServicosConsumidos.forEach(servico => {
                const indice = servicosMaisConsumidos.findIndex(item => item.nome === servico.nome)
                if (indice !== -1) {
                    servicosMaisConsumidos[indice].quantidade++
                } else {
                    servicosMaisConsumidos.push({ nome: servico.nome, quantidade: 1 })
                }
            })
        })

        //Ordena do maior para o menor
        produtosMaisConsumidos.sort((a, b) => b.quantidade - a.quantidade)
        servicosMaisConsumidos.sort((a, b) => b.quantidade - a.quantidade)

        console.log('\nProdutos mais consumidos:')
        for (let x = 0; x < Math.min(produtosMaisConsumidos.length, 5); x++) {
            if (produtosMaisConsumidos[x].quantidade === 1) {
                console.log(`${x + 1} - ${produtosMaisConsumidos[x].nome}: ${produtosMaisConsumidos[x].quantidade} vez.`)
            } else {
                console.log(`${x + 1} - ${produtosMaisConsumidos[x].nome}: ${produtosMaisConsumidos[x].quantidade} vezes.`)
            }
        }

        console.log('\nServiços mais consumidos:')
        for (let y = 0; y < Math.min(servicosMaisConsumidos.length, 5); y++) {
            if (servicosMaisConsumidos[y].quantidade === 1) {
                console.log(`${y + 1} - ${servicosMaisConsumidos[y].nome}: ${servicosMaisConsumidos[y].quantidade} vez.`)
            } else {
                console.log(`${y + 1} - ${servicosMaisConsumidos[y].nome}: ${servicosMaisConsumidos[y].quantidade} vezes.`)
            }
        }
    }
}