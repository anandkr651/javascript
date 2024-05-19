 let randomNumber = (parseInt(Math.random()*100 +1));

const userinput = document.querySelector('#guessfield');
const submit = document.querySelector('#subt');
const startover = document.querySelector('.resultparas');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');


const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validteguess(guess);
    })
}

function validteguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    } else if (guess < 1){
        alert('please enter a correct number');
    }else if (guess > 100){
        alert('please enter a right number');
    } else{
        prevguess.push(guess)
        if(numguess === 11){
           displayguess(guess);
           displaymessage(`game over .random number was ${randomNumber}`);
           endgame();
        } else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber) {
        displaymessage(`you gassses is right`);
        endgame();
    }else if (guess < randomNumber) {
        displaymessage(`number is tooo low`);
   }else if (guess > randomNumber) {
    displaymessage(`number is tooo high`);
}
}
function displayguess(guess){
    userinput.value = '';
    guessslot.innerHTML += `${guess},`;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message){
    loworhi.innerHTML = ` <h3>${message}</h3> `;
}
function endgame (){
  userinput.value = '';
  userinput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame" > start a new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame(){
const newgamebutton = document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
   randomNumber = (parseInt(Math.random()*100 +1));
   prevguess = []
   numguess = 1 
   guessslot.innerHTML = ''
   remaining.innerHTML = `${11 - numguess}`;
   userinput.removeAttribute('disabled');
   startover.removeChild(p)

    playgame = true
})
}