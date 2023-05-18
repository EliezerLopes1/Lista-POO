import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"

export default class EditorPets {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(pet: Pet): void {
        console.log('O que deseja editar?')
        console.log('1 - Nome')
        console.log('2 - Tipo')
        console.log('3 - Raça')
        console.log('4 - Gênero')

        let escolha = this.entrada.receberNumero('\nDigite a opção de sua escolha: ')

        switch (escolha) {
            case 1:
                let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do Pet: `)
                pet.setNome(nome)
                break

            case 2:
                let tipo = this.entrada.receberTexto(`Por favor, informe o novo tipo do Pet: `)
                pet.setTipo(tipo)
                break

            case 3:
                let raca = this.entrada.receberTexto(`Por favor, informe a novo raça do Pet: `)
                pet.setRaca(raca)
                break

            case 4:
                let genero = this.entrada.receberTexto(`Por favor, informe o novo gênero do Pet: `)
                pet.setGenero(genero)
                break

            default:
                console.log('Não existe esta opção.')
        }
    }
}