class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
  constructor(tipoItem, danoItem, resistenciaItem) {
    this.tipoItem = tipoItem
    this.danoItem = danoItem
    this.resistenciaItem = resistenciaItem
  }

  calcularDano() {
     if (this.tipoItem === "Arma") {
      return this.danoItem*2;
     } else{
        return this.danoItem;
     }
     }
  }

//this.dano * 2 e quando não for arma, é retornado no dano this.dano.
// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = "Espada"
const danoItem = 200
const resistenciaItem = 300

let itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

console.log("Tipo: " + itemPersonalizado.tipoItem);
console.log("Dano: " + itemPersonalizado.danoItem);
console.log("Resistencia: " + itemPersonalizado.resistenciaItem);
const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);