let order = [];
let clickedOrder = [];
let score = 0;
let timeLimit;

const buttonsGameTemplate = document.getElementById('game-template').children;

function playGame() {
    score = 0;
    nextLevel();
}

function nextLevel (){
    shuffleOrder();

    timeLimit = setTimeout(() => {
        let msgGameOver = "Limite de tempo estourado! "
        gameOver(msgGameOver);
    }, 5000);

    for(let i=0; i < buttonsGameTemplate.length; i++) {
        console.log("ButtonTemplate " + buttonsGameTemplate[i].innerHTML)
        console.log('I ' + i)
        buttonsGameTemplate[i].onclick = () => click(i);
    }

}

function shuffleOrder(){
    let colorOrderRandom = Math.floor(Math.random() * 9);
    order.push(colorOrderRandom);
    clickedOrder = [];

    for (let i=0; i < order.length; i++) {
       lightColor(order[i], Number(i) + 1)
    }
}

function lightColor(element, number) {
    number = number * 500;
    
    for (let i=0; i < buttonsGameTemplate.length; i++) {
        
        if (buttonsGameTemplate[i].innerHTML == element) {
            setTimeout(() => {
                buttonsGameTemplate[i].classList.add('selected')
            }, number -250);
            setTimeout(() => {
                buttonsGameTemplate[i].classList.remove('selected')
            }, number + 150)
            break;
        }
    }   
}

function click (order){
    clickedOrder.push(order);
    let index = 0;

    for (let i=0; i < buttonsGameTemplate.length; i++) {
            if (buttonsGameTemplate[i].innerHTML == order) {
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
    for (let i = 0; i < clickedOrder.length; i++) {
        if((clickedOrder[i]) != order[i]) {
            gameOver("");
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        clearTimeout(timeLimit)
        score++;
        nextLevel();
    }
}

function gameOver(msg) {
    confirm(`${msg}Game Over!\nPontuação: ${score}`);
    
    order = [];
    clickedOrder = [];
}

playGame()