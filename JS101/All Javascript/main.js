let x = 0;
let y = 0;

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field) {
        this.field = field;
    }
    // printMap() {
    //     const newMap = []
    //     this._map.forEach((row) => {
    //         newMap.push(row.join(''))
    //     })
    //     console.log(newMap.join('\n'))
    // }
}
const newGame = new Field([
    ['*','░','░'],
    ['░','0','░'],
    ['░','░','0'],
    ['░','░','░'],
    ['░','0','^']
])
console.log(newGame.field);





// ทำการ generate map ด้วย row,column
// ทำ Condition ในการขยับตัว pathCharectors เช่น x +- , y +- แล้วทำการBreakเมื่อออกจาก loop
// ทำการ random spawned ด้วยการ .random 
// method move down up left right 



// // class fieldMap {
// //     constructor() {
// //       this.myArray = [1, 2, 3]; // Initialize with values
// //     }
  
// //     addElement(element) {
// //       this.myArray.push(element); // Add an element to the end of the array
// //     }
// //   }
  
// //   const fieldMapInstance = new fieldMap();
// //   fieldMapInstance.addElement(4); // Add an element to the array
// //   console.log(fieldMapInstance.myArray); // Output: [1, 2, 3, 4]

// let star = [{x:15, y:15}];

// const head = {...star[0]}
// head.y += 5;

// console.log(head);

// const direction = {
//     LEFT: 'ArrowLeft',
//     Right: 'ArrowRight',
//     UP: 'ArrowUp',
//     DOWN: 'ArrowDown',
// };





// class Character {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.symbol = "*";
//       this.symbol2 = '^';
//       this.symbol3 = '░';
//       this.symbol4 = "*";
//     }
  
//     moveLeft() {
//       this.x -= 1;
//     }
  
//     moveRight() {
//       this.x += 1;
//     }
  
//     moveUp() {
//       this.y -= 1;
//     }
  
//     moveDown() {
//       this.y += 1;
//     } 
//   }

//   console.log(Character.moveDown());




// class Game {         //map
//     constructor(map) {
//         this._map = map
//     }
//     printMap() {
//         const newMap = []
//         this._map.forEach((row) => {
//             newMap.push(row.join(''))
//         })
//         console.log(newMap.join('\n'))
//     }
// }
// const map = [['*', 'o', 'o'], ['░', '░', '^'], ['░', 'o', '░']]

// const myGame = new Game(map)

// myGame.printMap()