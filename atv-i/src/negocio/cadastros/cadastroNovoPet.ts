import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"

export default function cadastrarPet(cliente: Cliente) {
    let entrada = new Entrada()
    let nomePet = entrada.receberTexto('Por favor informe o nome de seu pet: ')
    let tipoPet = entrada.receberTexto('Por favor informe o tipo de seu pet: ')
    let racaPet = entrada.receberTexto('Por favor informe o raça de seu pet: ')
    let generoPet = entrada.receberTexto('Por favor informe o gênero de seu pet: ')

    let novoPet = new Pet(nomePet, racaPet, generoPet, tipoPet)
    cliente.adicionarPet(novoPet)
}