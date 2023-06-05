const container = document.getElementById('demo')

function createCards(card){
    return `
    <div class="cardInicial">
        <img src="${card.img}"/>
        <h2 class="digiName"> ${card.name} </h2>
        <h3 class="level"> ${card.level} </h3>
    </div>
    `
}

async function getDigimons(){
    try {
        const digimons = await fetch("https://digimon-api.vercel.app/api/digimon") 
        const response = await digimons.json()
        return response
    } catch (erro) {
        console.error("Erro capturado: " + erro)
    }
}

async function main(){
    const cardsDigimons = await getDigimons()
    cardsDigimons.map((card) => {container.innerHTML += createCards(card)})
}

main()

function clickDigimon(){
    // ao clicar na img do digimon aparece um card maior na tela com mais informações daquele digimon clicado
}

function clickBuscar(){
//  ao clicar em buscar, busca os digimons com os termos digitados no input
}