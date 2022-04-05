
const modal = document.querySelector('.modal')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.closeButton')
const gameTemplate = document.getElementById('game-template');

//criando modal
function toggleModal(){
    modal.classList.toggle('show-modal')
}

function windowOnClick(event) {
    if(event.target === modal) {
        toggleModal()
    }
}
//evento
trigger.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowOnClick);

// criando botões do genius

for(let i=0; i < 9; i++) {
    const geniusButton = document.createElement('div');
    geniusButton.innerHTML = `<div order=${(i+1)}>${i}</div>`;
    geniusButton.classList.add('geniusButton');
    geniusButton.style.fontSize = '0';
    gameTemplate.appendChild(geniusButton);
}