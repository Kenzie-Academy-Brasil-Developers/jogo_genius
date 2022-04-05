headerElements()
let order = [];
let clickedOrder = [];
let score = 0;
let timeLimit;

const currentScore = document.querySelector('.scoreCurrent');
currentScore.innerHTML = 0;
const highestScore = document.querySelector('.scoreHighest')
highestScore.innerHTML = 0;

const buttonsGameTemplate = document.querySelectorAll('.geniusButton');
const buttonPlay = document.getElementById('playButton');
const led = document.querySelectorAll('.led')

const divMsgGameOver = document.querySelector('.msgGameOver');
const msgFeedback = document.createElement('p');
msgFeedback.classList.add('btn');
msgFeedback.style.visibility = 'hidden';
divMsgGameOver.appendChild(msgFeedback);

buttonPlay.addEventListener("click", playGame);

function playGame() {
    buttonPlay.style.visibility = 'hidden';
    msgFeedback.style.visibility = 'visible'
    score = 0;
    currentScore.innerText = score;
    
    buttonsGameTemplate.forEach(elem => elem.classList.add('geniusButtonActive'));
    nextLevel();
}

function nextLevel (){
    msgFeedback.innerText = `Observe`;
    shuffleOrder();

    currentScore.innerHTML = score;

    timeLimit = setTimeout(() => {
        let msgGameOver = "Limite de tempo estourado! "
        gameOver(msgGameOver);
    }, 7000);
    
    for(let i=0; i < buttonsGameTemplate.length; i++) {
        buttonsGameTemplate[i].onclick = () => click(i);
    }
}

function shuffleOrder(){
    let colorOrderRandom = Math.floor(Math.random() * 9);
    order.push(colorOrderRandom);
    clickedOrder = [];
    
    buttonsGameTemplate.forEach(elem => elem.classList.remove('geniusButtonActive'));
    for (let i=0; i < order.length; i++) {
        lightColor(order[i], Number(i) + 1)
    }
    const tamanhoSequencia = order.length;
    setTimeout(() => {
        buttonsGameTemplate.forEach(elem => elem.classList.add('geniusButtonActive'));
        msgFeedback.innerText = `Reproduza`;
    }, 600 * tamanhoSequencia);
}

function lightColor(element, number) {
    number = number * 500;
    
    for (let i=0; i < buttonsGameTemplate.length; i++) {
        
        if (buttonsGameTemplate[i].innerText == element) {
            setTimeout(() => {
                buttonsGameTemplate[i].classList.add('selected')
            }, (number - 250));
            setTimeout(() => {
                buttonsGameTemplate[i].classList.remove('selected')
            }, (number + 150))
            break;
        }
    }   
    
}

function click (order){
    clickedOrder.push(order);
    let index = 0;
    
    for (let i=0; i < buttonsGameTemplate.length; i++) {
            if (buttonsGameTemplate[i].innerText == order) {
                index = i;
                buttonsGameTemplate[index].classList.add('selected')
                break;
            }
        }  

        setTimeout(() => {
            buttonsGameTemplate[index].classList.remove('selected');
            checkOrder();
        }, 150)
}

function checkOrder () {
    let correctSequence = true;
    for (let i = 0; i < clickedOrder.length; i++) {
        if((clickedOrder[i]) != order[i]) {
            correctSequence = false;
            setTimeout(() => {
                led.forEach(elem => elem.classList.add('ledIncorrect'))
            }, 50);
            setTimeout(() => {
                led.forEach(elem => elem.classList.remove('ledIncorrect'))
            }, 450)

            gameOver("Sequência incorreta! ");
        }
    }

    if(clickedOrder.length == order.length && correctSequence) {
        clearTimeout(timeLimit)
        score++;

        setTimeout(() => {
            led.forEach(elem => elem.classList.add('ledCorrect'))
        }, 50);
        setTimeout(() => {
            led.forEach(elem => elem.classList.remove('ledCorrect'))
        }, 450)
        nextLevel();
    }
}

function gameOver(msg) {

    buttonPlay.style.visibility = 'visible';
    msgFeedback.style.visibility = 'visible';
    buttonPlay.innerText = 'Jogar novamente'
    buttonsGameTemplate.forEach(elem => elem.classList.remove('geniusButtonActive'));

    let maxScore = highestScore.innerHTML;
    if(score > maxScore) {
        maxScore = score;
        highestScore.innerHTML = score;
    }

    clearTimeout(timeLimit);

    msgFeedback.innerHTML = `${msg}<br>Game Over!`;
    msgFeedback.style.marginLeft = '10px';

    score = 0;
    currentScore.innerText = `${0}`;
   
    order = [];
    clickedOrder = [];
}