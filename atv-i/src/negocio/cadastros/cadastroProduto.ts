import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
// import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        
        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do produto: ')
        let precoProduto = this.entrada.receberNumero('Por favor, informe o preço do produto: ')
        let produto = new Produto()

        produto.nome = nomeProduto
        produto.preco = precoProduto
        
        this.produtos.push(produto)
        
        console.log(`\nCadastro concluído :)\n`);
    }
}