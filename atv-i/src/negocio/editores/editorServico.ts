import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico";

export default class EditorServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(servico: Servico): void {
        console.log(`\nInício da edição do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `)

        servico.nome = nome
        servico.preco = preco
        
        console.log(`\nEdição concluída :)\n`);
    }
}