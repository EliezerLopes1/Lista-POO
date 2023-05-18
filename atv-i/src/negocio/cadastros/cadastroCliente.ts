import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let valorRG = this.entrada.receberTexto(`Por favor informe o número de seu RG: `)
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD de seu telefone: `);
        let numeroTelefone = this.entrada.receberTexto(`Por favor informe o número de seu telefone: `);

        let nomePet = this.entrada.receberTexto('Por favor, informe o nome de seu pet: ')
        let tipoPet = this.entrada.receberTexto('Por favor, informe o tipo de seu pet: ')
        let racaPet = this.entrada.receberTexto('Por favor, informe o raça de seu pet: ')
        let generoPet = this.entrada.receberTexto('Por favor, informe o gênero de seu pet: ')

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)


        let cpf = new CPF(valor, dataEmissao);
        let rg = new RG(valorRG, dataEmissaoRG)
        let telefone = new Telefone(ddd, numeroTelefone)
        let pet = new Pet(nomePet, racaPet, generoPet, tipoPet)
        let cliente = new Cliente(nome, nomeSocial, cpf);

        cliente.adicionarPet(pet)
        cliente.adicionarRG(rg)
        cliente.adicionarTelefone(telefone)
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}