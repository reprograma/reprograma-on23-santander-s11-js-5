// TODO: FUNCAO PARA FAZER O FETCH, 
// FUNCAO PARA PERCORRER TODOS OS DIGIMONS
// FUNCAO PARA TRANSFORMAR EM HTML 
// FUNCAO PARA COLOCAR TUDO NO CONTANER
// FUNCAO PARS WUANDO APERTAR NO BOTAO, FAZER O FECTH NO ENDPOINT NAME E COLOCAR  NO RESULT


const listContainer = document.getElementById('digimon-list__container')
const resultContainer = document.getElementById('digimon-result__container')

async function getDigimonList(){
    try {
        let digimons = await fetch("https://digimon-api.vercel.app/api/digimon")
        digimons = await digimons.json()
        return digimons

    } catch (error) {
        console.log("error captured: " + error)
    }
}

async function fillDigimonList() {
    try {
        const digimons = await getDigimonList()
        digimons.forEach((digimon) => listContainer.innerHTML += convertDigimonListToHtml(digimon))

    } catch (error) {
        console.log("error captured: " + error)
    }
  
}

function convertDigimonListToHtml(digimon) {
    return `<input class="digimon-list__button" type="button" value="${digimon.name}" onclick="getDigimonWhenClicked('${digimon.name}')">`
}

fillDigimonList()

async function getDigimonWhenClicked(digimonName){
    try {
        let digimon = (await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`))
        digimon = await digimon.json()
        
        resultContainer.innerHTML = ` <div class="digimon-result__img">
        <img src="${digimon[0].img}" alt="${digimon[0].name} image">
    </div>
    <div class="digimon-result__text">
        <h2>Name: ${digimon[0].name}</h2>
        <p>Level: ${digimon[0].level}</p>
    </div>`
    } catch (error) {
        console.log("error captured: " + error)
    }
 
}
