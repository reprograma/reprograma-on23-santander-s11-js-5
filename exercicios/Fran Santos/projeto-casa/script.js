function pesquisarDigi() {
    const digimom = document.getElementById('BuscarDigimon').value
    const url = ` https://digimon-api.vercel.app/api/digimon/name/${digimom}`;


    fetch(url).then(function (response) {

        response.json().then(mostarDigi)
    })
}

function mostarDigi(dados) {
    console.log("digimom:" + JSON.stringify(dados))
    const NomeDoDigimon = document.getElementById('NomeDoDigimon');
    NomeDoDigimon.innerHTML = dados[0].name
    const nivelDoDigimon = document.getElementById('nivelDoDigimon');
    nivelDoDigimon.innerHTML = dados[0].level
    const imgDigi = document.getElementById('imgDigi');
    imgDigi.src = dados[0].img

}

const ul = document.getElementById('renderizarListaDeDigimon')
async function getDigimons() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon')
        const json = await response.json()
        return json
    }
    catch (erro) {
        console.log("capturei um erro: " + erro)
    }
}

async function RenderizarDigimon() {
    try {
        const digimons = await getDigimons()
        digimons.forEach(digis => {
            ul.innerHTML += createHTML(digis)
        });
    }
    catch (erro) {
        console.log("capturei um erro: " + erro)
    }
}

function createHTML(digis) {
    return `
        <button onclick="detalharDigimon('${digis.name}')">${digis.name}</button> `
}

async function detalharDigimon(detalhe) {
    try {
        const url = `https://digimon-api.vercel.app/api/digimon/name/${detalhe}`;
        const response = await fetch(url)
        const digimon = await response.json()
        resultado(digimon)
    }
    catch (erro) {
        console.log("capturei um erro: " + erro)
    }
}

RenderizarDigimon()