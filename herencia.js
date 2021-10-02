class Pokemon {
    // Atributos
    #name = "";
    #type = "";
    #evolutions = [];

    constructor(name, type, evolutions){
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;   

    }

    set name (name){
       this.#name = name;
    }

    set type (type){
        this.#type = type;
    }

    set evolution (evolutions){
        this.#evolutions= evolutions;
    }

    get name() {
        return this.#name;
    }
    
    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.evolutions;
    }

    attack(){
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0){
        // Valida que la opción exista
        const EVOLVE = this.#evolutions[evolution] || "" ;
        let message = "No puedo evolucionar";
        if(EVOLVE){
            message = `${this.name} Esta evolucionando a ${EVOLVE}`
            this.#name = EVOLVE;
        }
        return message;
    }

}

//Herencia

class typeFire extends Pokemon {
    constructor(name, evolution) {
        super(name, "fire", evolution);
    }
    message(){
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const Charmander = new typeFire ("Charmander", ["Charmaleon", "Charizard"]);

console.log(Charmander.message());
Charmander.name = "Gato"
console.log(Charmander.message());
