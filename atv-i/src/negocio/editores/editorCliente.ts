import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
//import CPF from "../../modelo/cpf"

export default class EditorCliente {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(cliente: Cliente): void {
        console.log(`\nInício da edição do cliente`);
        console.log(`O que deseja editar?`)
        console.log(`1 - Nome`)
        console.log(`2 - Nome social`)
        console.log(`3- Pets`)

        let escolha = this.entrada.receberNumero(`Digite o número de sua escolha: `)
        
        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
                cliente.nome = nome

                console.log(`\nEdição concluída :)\n`);
                break
            
            case 2:
                let nomeSocial = this.entrada.receberTexto(`Por favor, informe o novo nome social do cliente: `)
                cliente.nomeSocial = nomeSocial

                console.log(`\nEdição concluída :)\n`);
                break
        }
    }
}