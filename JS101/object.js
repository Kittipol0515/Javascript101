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