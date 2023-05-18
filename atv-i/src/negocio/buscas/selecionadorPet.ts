import Pet from "../../modelo/pet"

export default class SelecionadorPet {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>){
        this.pets = pets
    }

    public selecionar(nome: string) {
        let petAlvo = new Pet(nome, '','','')

        this.pets.forEach(pet => {
            if (nome === pet.getNome){
                petAlvo = pet
            }
        })

        return petAlvo
    }
}