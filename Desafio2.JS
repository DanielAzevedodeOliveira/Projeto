//Desafio da dio:Escrevendo as Classes de Um Jogo. 
 
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = this.definirAtaque();
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

    definirAtaque() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque indefinido";
        }
    }
}

let caracteristicaDoHeroi = new Heroi("Draven Encantus", 54, "mago");
caracteristicaDoHeroi.atacar();
