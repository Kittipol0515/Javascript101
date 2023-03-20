let favGame = {
    'Good game': 'elden ring',
    playPlace: 'steam',
    numPlay: 1,
    color: 'black',
    'destop': 'pc',
    ingame ()  {
        console.log(`Playing ${'elden ring'}`);
    }
};




let numPlay = favGame.numPlay;
console.log(numPlay);

let returnPlayer = favGame['Good game'];
console.log(favGame['Good game']);

favGame.ingame();

// for in object , for or array of
function Person(first,last,nick,age,school,eye) {
    this.fisrtName = first;
    this.lastname = last;
    this.nick = nick;
    this.age = age;
    this.school = school;
    this.eye = eye;
}

const person =new Person('Kittipol','Nomian','Kitti','24' , 'IIS-RU' , 'Red' );

console.log(person);