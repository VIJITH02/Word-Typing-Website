window.addEventListener('load', init);
//globals

//Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1,
}

// To change level
var currentLevel = levels.easy

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'bite',
    'black',
    'blade',
    'blame',
    'blanket',
    'blind',
    'block',
    'blood',
    'blow',
    'blue',
    'board',
    'assist',
    'assistance',
    'assistant',
    'associate',
    'association',
    'assume',
    'assumption',
    'car',
    'carbon',
    'card',
    'care',
    'career',
    'careful',
    'carefully',
    'deer',
    'defeat',
    'defend',
    'defendant',
    'defense',
    'defensive',
    'employment',
    'empty',
    'enable',
    'film',
    'final',
    'grass',
    'grave',
    'idea',
    'ideal',
    'honor',
    'hope',
    'joint',
    'lake',
    'jury',
    'letter',
    'lose',
    'management',
    'mechanism',
    'minority',
    'nice',
    'notion',
    'ongoing',
    'painter',
    'performance',
    'poet',
    'prepare',
    'punishment',
    'rare',
    'religious',
    'route',
    'scientific',
    'self',
    'sight',
    'some',
    'substance',
    'test',
    'tissue',
    'traffic',
    'version',
    'wish',
    'write',
    'yellow',
    'yet',
    'workshop',
    'zone',
    'zebra',

];
function init() {
    //Show numbers of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input',startMatch)
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50)
}
//Start matching
function startMatch() {
    if (matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // If score is -1, display 0
    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}
    
//Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }

}

//pick and show random word 
function showWord(words) {

    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length)
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    //make sure time is not run out
    if(time > 0){
        //Decrement
        time--;
    }else if(time === 0){
        //game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Time Out!!!';
        document.getElementById("message").style.color = 'red'
        score = -1;
    }else{
        message.innerHTML = 'Keep Going...'
        document.getElementById("message").style.color = 'green';
    }
}





//levels
function level(hard){
    timeDisplay.innerHTML = levels.hard
    seconds.innerHTML = '1'
    
    
}