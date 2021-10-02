/* El nombre de la clase debe ir con la primera leetra en mayúscula */

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

const Charmander = new Pokemon("Charmander", "Fire",["Charmeleon"]);

const Squirtle = new Pokemon("Squirtle", "Water",["Wartortle", "Blastoise"]);



console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve());
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log("-----------------------------------------");

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve());
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));