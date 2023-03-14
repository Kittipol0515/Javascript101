// section 1

console.log('Hello world')

let myName ='Nomain';
let lastName = 'Kitti';

let fullName = myName + ' ' + lastName;
console.log(fullName);

console.log(`My code name is ${myName} and my name is ${fullName}`);

let email = 'kittipol.surapinchai@gmail.com';
// let findLetter = email.includes(z);
// console.log(findLetter);

let bidMas = 5 * (10-3)**2;
console.log(bidMas);

let radius = 10;
const pi = 3.14;

console.log(radius,pi);

// section2
let selectedFruits = ['Apple','Banana','Orange','Dragon Fruit']
selectedFruits[4] = 'Valorant';
selectedFruits[5] = 5;
selectedFruits[1] = 'soda';
console.log(selectedFruits[1]);
console.log(selectedFruits[4]);
console.log(selectedFruits.length);

let user = {
    firstName :'Kitti',
    lastName :'Nomain',
    myCity : 'Tokyo',
    myAge :'25',
    location : 'Japan',
    readingList:['HTML','CSS','JavaScript'],
}

console.log(user);
console.log(user.myCity);
user.myAge = 26;
console.log(user.myAge)
console.log(user.readingList[0]);


// coding Pratice
let x = 'Blue';
x = 8;
console.log(x);
console.log(typeof x);

x+= 4;
console.log(x);

// section 3

let age = 221
if(age<18) {
console.log('bring your parent here to buy for you') }
else if (age>18){
    console.log("live alone you nerd") }
else {
console.log('here you go')
}

// ternary operation
const password = "12313213214565465";

password.length >= 12 ? console.log("Strong") : password.length >= 8 ? console.log("Weak") : console.log('Not correct');

// function
function info(name) {
    console.log('Hello,' + name);
}
info("Ashely")

// Space separated
 const myinfo = function(name){
    console.log('Hello' + name);
}
info("Jill");

// const myinfo = name => console.log('Hello' + name);


function game(name) {
    console.log("Dog game," + name);
}
game("Valorant");
game("League of legends");
game("Dota2");
// Number

function add(a, b) {
    return a + b;
  }
// console.log (add(5,3));
let result = add(5,3);  
console.log (result);

function subtract(a,b) {
    return a - b;
}
console.log (subtract(10,5));

function multiply(a,b) {
    return a * b;
}
console.log (multiply(10,5));

function divide(a,b) {
    return a / b ;
}
let answer = divide(100,10);
console.log (answer);

function aboutme(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);
  }
aboutme("Kitti", "Bangkok", "playing games"); 

// function
function calWithReturn (num1,num2){
    return num1 + num2; //allow to install somewhere
  }
  const total = calWithReturn(5,9);
  console.log(total);
  //then total can use later
  function calUseReturn(total){
      console.log (total*5);
  }
  calUseReturn(total);
  function cal(a){
      console.log (a+1);
  }
  cal(total);
// scope


