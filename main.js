/* NICKNAMES */
// List of nicknames
const nicknames = {
    nickname1: '{ sammySeal }',
    nickname2: '{ smokinSammySeal }',
    nickname3: '{ originalSamSeal }',
    nickname4: '{ samuelSealwell }',
};

const nicknamesArray = Object.values(nicknames);
        // CONSOLE TESTING
    console.log('Names to choose from: ' + nicknamesArray)

// Nickname randomizer
let n = Math.floor(Math.random() * nicknamesArray.length);
const randomNickname = nicknamesArray[n];
        // CONSOLE TESTING
    console.log('Nickname index: ' + n);
    console.log('Random nickname: ' + randomNickname);

// DOM - Nickname manipulator
let nicknameDisplay = document.getElementById('nickname');
nicknameDisplay.innerHTML = randomNickname;
        // CONSOLE TESTING
    console.log('Name currently displayed: ' + nicknameDisplay.innerHTML);
/* END NICKNAMES */

/* PORTRAITS */
// List of portraits
const portraits = {
    portrait1: 'assets/test1.jpg',
    portrait2: 'assets/test2.jpg',
    portrait3: 'assets/test3.jpg',
    portrait4: 'assets/test4.png'
}

const portraitsArray = Object.values(portraits);
        // CONSOLE TESTING
    console.log('Portrait options: ' + portraitsArray);

// Portrait randomizer
let p = Math.floor(Math.random() * portraitsArray.length);
const randomPortrait = portraitsArray[p];
        // CONSOLE TESTING
    console.log('Portrait index: ' + p);
    console.log('Random portrait: ' + randomPortrait);

let portraitDisplay = document.getElementById('sammy-portrait')
portraitDisplay.src = randomPortrait;
        // CONSOLE TESTING
    console.log('Portrait currently displayed: ' + portraitDisplay.src);
