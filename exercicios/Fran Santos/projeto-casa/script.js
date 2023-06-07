function buscarDigi() {
    const digimom = document.getElementById('BuscarDigimon').value
    const url = ` https://digimon-api.vercel.app/api/digimon/name/${digimom}`;


    fetch(url).then(function(response){

        response.json().then(mostarDigi)
    })
    }

    function mostarDigi(dados) {
        console.log("digimom:"+JSON.stringify(dados))
    const NomeDoDigimon = document.getElementById('NomeDoDigimon');
    NomeDoDigimon.innerHTML = dados[0].name
    const nivelDoDigimon = document.getElementById('nivelDoDigimon');
    nivelDoDigimon.innerHTML = dados[0].level
    const imgDigi= document.getElementById('imgDigi');
    imgDigi.src = dados[0].img

    }


    const container = document.getElementById('listaDeDigimon');

function CriarCards(meusDigis) {
    return `
     <section class="cards">
    //   <img class="imagens" src=${meusDigis[0].img}>
      <h2 class="titles">${meusDigis[0].name}</h2>
     </section>
    `

}

async function getDigis() {
    try {
        const responde = await fetch('https://digimon-api.vercel.app/api/digimon');
        const filmesFavoritos = await responde.json()
        const meusFilmesFavoritos = filmesFavoritos.slice(0,30);
        return meusFilmesFavoritos
    }
    catch (erro) {
        console.error("Ops, algo deu errado: ", + erro);
    }
}

async function renderizarNaTela() {
    const filmesFavoritos = await getDigis()
    filmesFavoritos.map((meusDigis) => container.innerHTML += CriarCards(meusDigis))
}

renderizarNaTela()

