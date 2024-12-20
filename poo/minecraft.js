// Fundamento da POO

class Bloco {
    //atributos
    constructor (textura, resistencia) {
        this.textura = textura
        this.resistencia=resistencia
    }
    //ações
    criarBloco() {
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado `)
    }
    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}
//Aula 12 - Herança - Criar 3 enxadas reutilizando atributos da classe bloco

class Enxada extends Bloco {
    //atributos
    constructor (textura, resistencia, conquista) {
        super(textura, resistencia)
        this.conquista = conquista
    }
    //ações
    criarEnxada() {
            console.log("-------------------------------------------------------")
            console.log("-_")
            console.log(" /")
            console.log(`Enxada de ${this.textura}`)
            console.log(`Resistência: ${this.resistencia}`)
        
    }

    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
        
    }
    //poliorfismo
    minerar () {
        console.log("✞ Dano atribuído!")
    }

}


/*************************  MUNDO ***********************/
console.clear()
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")

console.log("")

//instanciando um objeto
const bloco1 = new Bloco("terra",1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)

bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()
/*PRINCÍPIO: Primeiro criamos modelos e depois criamos objetos que podem acessar todos os recursos da classe modelo*/

//---AULA 12 --- HERANÇA---- CRIANDO ENXADA
const enxada1 = new Enxada('madeira', 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada('ferro', 5, true)
enxada2.criarEnxada()
enxada2.arar()
const enxada3 = new Enxada('diamante', 10, false)
enxada3.criarEnxada()
//-----AULA 13 - POLIMORFISMO OU SOBRESCRITA -----------
enxada3.minerar()

//------- AULA 14 - Encapsulamento --------
