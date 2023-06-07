//TODO Função para pegar os elementos da api
//TODO Função  jogar os elementos na tela
//TODO criar os botões que vão receber os nomes dos digimons
//TODO função para o clique funcionar e trazer as informações do elemento escolhido



const listContainer = document.getElementById('digimon-list')
const result = document.getElementById('result')



async function getDigimonList() {
    try {
        const dataList = await fetch("https://digimon-api.vercel.app/api/digimon")
        const digimonList = await dataList.json()
        return digimonList

    } catch (error) {
        console.error("erro encontrado: " + error)
    }

} 

async function fillDigimonList() {
    try {
        const digimonList = await getDigimonList()
    digimonList.forEach((digimon) =>
        listContainer.innerHTML += createList(digimon));
    } catch (error) {
        console.error("erro encontrado: " + error)
    }
}

function createList(digimon) {
    return `
    <input class="digimon-button" type="button" value="${digimon.name}" onclick="resultClick('${digimon.name}')">`
    
}

fillDigimonList()



async function resultClick(getDigimon) {
    try {
        const digimons = (await fetch(`https://digimon-api.vercel.app/api/digimon/name/${getDigimon}`))
        const digimon = await digimons.json()

        result.innerHTML = `
        <div class="result-img">
        <img src="${digimon[0].img}" alt="${digimon.img} image">
        </div>
        <div class= "result-text">
        <h2>Name: ${digimon[0].name}</h2>
        <p>Level: ${digimon[0].level}</p>
        </div>
        `


    } catch (error) {
        console.error("erro encontrado: " + error)
    }
}


