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