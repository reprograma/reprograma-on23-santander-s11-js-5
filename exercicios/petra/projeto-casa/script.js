//Sobre o exercício: 
//1. criar a função para fetch ();
//2. percorer a API (lista dos digimons);
//3. inner HTML;
//4. segunda endpoint e response 

const listContainer = document.getElementById('digimon-list')
const digimonDescription = document.getElementById('digimon-description')

//função requisição API - fetch com trycatch 

async function getDigimonList(){
    try {
        let digimon = await fetch("https://digimon-api.vercel.app/api/digimon")
        digimon = await digimons.json()
        return digimon

    } catch (error) {
        console.log("error: " + error)
    }
}

async function fillList() {
    
    try {
        const digimon = await getDigimonList()
        digimon.forEach((digimon) => listContainer.innerHTML += convertListToHtml(digimon))

    } catch (error) {
        console.log("error captured: " + error)
    }
}

function convertListToHtml(digimon) {
    return `<input class="digimon-list__button" type="button" value="${digimon.name}" onclick="getDigimonWhenClicked('${digimon.name}')">`
}

fillDigimonList()

//async function second endpoint 

async function getDigimonAfterClick(digimonName){
    
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
    } 
    
    catch (error) {
        console.log("error captured: " + error)
    }

}