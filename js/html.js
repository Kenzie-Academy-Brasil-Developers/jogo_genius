/* <header>
        <section id="titleSection">
            <h1>Genius</h1>
            <h2>o clássico dos anos 80 está de volta !</h2>
        </section>
    </header>
*/

const databaseHeader = [
    {
        title: 'Genius',
        subtitle: 'o clássico dos anos 80 está de volta !',
    }
]
//pegando o header como referencia 
let headerWrapper = document.querySelector('header')

//funcao que cria a estrutura html
function createHeaderElements (title, subtitle){
    let titleSection = document.createElement('section')
    titleSection.setAttribute('id', 'titleSection')

    titleSection.innerHTML = ` <h1>${title}</h1>
    <h2>${subtitle}</h2>`

    headerWrapper.appendChild(titleSection)
}

//funcao que atualiza a tela com os elementos do header
function headerElements() {
    databaseHeader.forEach((titleTag) =>
    createHeaderElements(titleTag.title, titleTag.subtitle))
}

//CRIAÇÃO TEMPLATE DO JOGO

const playButtonWrapper = document.querySelector('.playButtonWrapper');

const playButton = document.createElement('button');
playButton.id = 'playButton';
playButton.classList.add('btn');
playButton.innerText = 'play';
playButtonWrapper.appendChild(playButton);

// criando leds de feedback
const gameLedPainelTemplate = document.querySelector('.gameLedPainel-template');
for(let i=0; i <= 4; i++) {
    const led = document.createElement('div');
    led.classList.add('led');
    gameLedPainelTemplate.appendChild(led);
}

// criando botões do genius
const gameTemplate = document.getElementById('game-template')
for(let i=0; i < 9; i++) {
    const geniusButton = document.createElement('div');
    geniusButton.innerHTML = `<div order=${(i+1)}>${i}</div>`;
    geniusButton.classList.add('geniusButton');
    geniusButton.style.fontSize = '0';
    gameTemplate.appendChild(geniusButton);
}

