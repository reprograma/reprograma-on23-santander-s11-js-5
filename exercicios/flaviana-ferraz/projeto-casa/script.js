const container = document.getElementById('demo')
const digimon = document.getElementById('digimonName')
const card = document.getElementById('card')
const buscar = document.getElementById('buscar')


// buscar.addEventListener('click', (event)=> {
//     event.preventDefault()
//     findDigimon(digimon)
// })


// digimon.addEventListener('click', (event)=>{
//     event.preventDefault();
//     createCardDigimon('${digi.name}');
// });


async function getDigimons(){
    try {
        const digimons = await fetch(`https://digimon-api.vercel.app/api/digimon/`) 
        const digimonNames = await digimons.json()
        return digimonNames
    } catch (erro) {
        console.error("Erro capturado: " + erro)
    }
}

function input(digimon){
    return `
    <input id="digi" type="button" value="${digimon.name}" onclick="createCardDigimon('${digimon.name}')">
  `
}

async function main(){
        const digiName = await getDigimons( )
        digiName.map((digimon) => {container.innerHTML += input(digimon)})
}

main()   

async function findDigimon(digi){
    try {
        let digimon = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digi}`);
        let infos = await digimon.json();
        createCardDigimon(digi)
    } catch (erro) {
        console.error("Erro capturado: " + erro)  
    }
}

function createCardDigimon(digi){
    card.innerHTML += `
        <img src="${digi.img}">
        <h3>${digi.name}</h3>
        <h4 id="level">Level: ${digi.level}</h4>
    `
}




















