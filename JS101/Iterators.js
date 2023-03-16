// Iterators
const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
let count = {}; //create empty object to keep track the count
letters.forEach(item =>{
    if (count[item]){ //check if we have an letter in
        count[item]++;
    }else{
        count[item] = 1;
    }
    console.log(count);
});
// console.log(count);

const storeJP = [5,6,8,9];
const storeUSD = storeJP.map(value => value*=0.85);

console.log(storeJP);
console.log(storeUSD);

let storeUAD = [1,2,3,4]
function toEuros(value) {
    value *= 2;
    return value;
}
let storeAr = storeUAD.map(toEuros);
console.log(storeAr);


// const numbers = [1,-1,2,3];
// const filterd = numbers.filter(n => n >= 0);
// console.log(filterd);

// let math = [3,5,6,7,8,9,5,1,2,3,-20];
// let filter = math.filter(n => n <=1);
// console.log(filter);


const food = ['apple' , 'banana', 'Grape' , 'mango']

const filter = food.filter(n => n !== 'banana');
console.log(filter);

//like sum -- can because for sum in your shopping basket
// const numbers = [1, 2, 3, 4, 5];
// //a=1, c=2 => 3
// //a=3, c=3 => 6
// //a=6, c=4 => 10
// //a=10, c=5 => 15 
// const sum = numbers.reduce((accumulator,currentValue) => accumulator+currentValue);
// console.log(sum);


let Car = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(name){
        console.log(`${name} is driving car `);
    };
    
};

let myCar = new Car('Nisan', 'A123', 2003);

console.log(myCar);
console.log(myCar.drive('Jack'));

let myCar1 = new Car('Honda', 'H435', 2010);
    console.log(myCar1);
    console.log(myCar1.drive('Jill'));


    


