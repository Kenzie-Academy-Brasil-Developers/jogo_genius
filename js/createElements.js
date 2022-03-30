let order = [];
let clickedOrder = [];
let score = 0;

const buttonsGameTemplate = document.getElementById('game-template').children;

function playGame() {
    score = 0;
    nextLevel();
}

function nextLevel (){
    shuffleOrder();

}

function shuffleOrder(){
    
}

function teste (order){
    for (let i=0; i < buttonsGameTemplate.length; i++) {
        const orderAtual = buttonsGameTemplate[i].innerHTML;
        if (order == orderAtual) {
            buttonsGameTemplate[i].style.backgroundColor = 'red'
        }
    }
}