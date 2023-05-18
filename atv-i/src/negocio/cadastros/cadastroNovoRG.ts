import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import RG from "../../modelo/rg"

export default function cadastrarRG(cliente: Cliente) {
    let entrada = new Entrada()

    let valorRG = entrada.receberTexto(`Por favor informe o número de seu RG: `)
    let dataRG = entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);

    let partesDataRG = dataRG.split('/')
    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()

    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
    let rg = new RG(valorRG, dataEmissaoRG)
    cliente.adicionarRG(rg)
}