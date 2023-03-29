// const prompt = require('prompt-sync')({sigint: true});

// const hat = '^';
// const hole = 'O';
// const fieldCharacter = '░';
// const pathCharacter = '*';
// const obj = {
//   field : value
// }


//Exmapla 1
// class Game {
//   constructor(name,surname,) {
//     this._name = name;
//     this._surname = surname;
//     this._age = 25

//   }

// }
// const myGame = new Game('kittipol', 'surapinchai')
// const myGame2 = new Game('Nomain', 'nominaka')


// console.log(myGame)
// console.log(myGame2)


class Game {
  constructor(map) {
    this.map = map;
  }
  printMap() {
    console.log(this.map.join(' | '));
  }
}

const map = [[1,2,3],[4,5,6],[7,8,9]]

const myGame = new Game(map)

console.log(myGame)