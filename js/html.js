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