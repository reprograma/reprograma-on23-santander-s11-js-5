const container = document.getElementById('demo')
// const buscar = document.getElementById('buscar')


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
    <button id="digi" onclick="createCardDigimon('${digimon.name}')">${digimon.name}</button>
  `
}

async function main(){
    try {
        const digiName = await getDigimons( )
        digiName.map((digimon) => {container.innerHTML += input(digimon)})  
    } catch (erro) {
        console.error("Erro capturado: " + erro)
    }     
}

function createCardDigimon(digi){
    const img = document.getElementById('imgDigimon')
    img.src = digi[0].img

    const digimon = document.getElementById('digimonName')
    digimon.innerHTML = digi[0].name

    const level = document.getElementById('level')
    level.innerHTML = digi[0].level
}

async function getOneDigimon(digi){
    try {
        let digimon = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digi}`);
        let infos = await digimon.json();
        createCardDigimon(digi)
    } catch (erro) {
        console.error("Erro capturado: " + erro)  
    }
}

main() 



















