//--- consultar o level do Digimon --- //

function consultaDigimon(){
    const digimon = document.getElementById("consulta").value;
    // console.log("nome do digimon:" + digimon)
    const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;

    fetch(url).then(function(response){
        response.json().then(mostrarLevel);
    });
}

    
  function mostrarLevel(dadosDigimon){
    (JSON.stringify(dadosDigimon))
    const digimon = document.getElementById('level')
    digimon.innerHTML = dadosDigimon[0].level
         
    }
    


//---- Lista de todos os Digimons ----//

const container = document.getElementById("demo")

function createDigimon(card){
    return `
    <div class="card">
    <img class="image" src=${card.img}>
    <p class="name">${card.name}</p>
    </div>
    `
}

async function getDigimon () {
    try {
        const response = await fetch("https://digimon-api.vercel.app/api/digimon")
        const json = await response.json()
        const ourCards = json.slice(0,1000)
        return ourCards

        
    }
    catch(erro) {
        console.error("Erro capturado:" + erro)
        
    }
}

async function main(){
    const cards = await getDigimon()
    cards.map((card)=> container.innerHTML += createDigimon(card))

}

main()
