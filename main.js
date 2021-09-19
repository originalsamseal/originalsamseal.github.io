/* NICKNAMES */
// List of nicknames
const nicknames = {
    nickname1: '{ sammySeal }',
    nickname2: '{ smokinSammySeal }',
    nickname3: '{ originalSamSeal }',
    nickname4: '{ samuelSealwall }',
};

const nicknamesArray = Object.values(nicknames);
        // CONSOLE TESTING
    console.log('Names to choose from: ' + nicknamesArray);

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

/* TITLE FONTS */
// List of title fonts
const fonts = {
    font1: "'Capriola', sans-serif",
    font2: "arial, sans-serif",
    font3: "'Carattere', sans-serif",
    font4: "'Caveat', sans-serif",
    font5: "'Gluten', sans-serif",
    font6: "'Lato', sans-serif",
    font7: "'Pacifico', sans-serif",
    font8: "'Courier-New', monospace",
    font9: "'Trebuchet', sans-serif",
    font10: "'Lucida Console', monospace"
};

const fontsArray = Object.values(fonts);
        // CONSOLE TESTING
    console.log('Available fonts: ' + fontsArray);

// Font randomizer
let f = Math.floor(Math.random() * fontsArray.length);
const randomFont = fontsArray[f];
        // CONSOLE TESTING
    console.log('Fonts index: ' + f);
    console.log('Random font: ' + randomFont);

// DOM - Title Font manipulator
nicknameDisplay.style.fontFamily = randomFont;

/* END TITLE FONTS */


/* PORTRAITS */
// List of portraits
const portraits = {
    portrait1: 'assets/sammy1.png',
    portrait2: 'assets/sammy2.png',
    portrait3: 'assets/sammy3.png',
    portrait4: 'assets/sammy4.png'
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
/* END PORTRAITS */
