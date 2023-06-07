const formulario = document.getElementById('formulario');
const inputPesquisa = document.getElementById('botao');
const lista = document.getElementById('lista');

function listarDigimon () {
    try {
        const resposta = fetch ("https://digimon-api.vercel.app/api/digimon");
        const dados = resposta.json();
        console.log(dados)
    }
    catch (erro) {
        console.log("capturei um erro: " + erro);
    }
}

listarDigimon()

async function pesquisarDigimon () {
    try {
        const resposta = await fetch (`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
        const dados = await resposta.json();
        console.log(dados);
    }
    catch (erro) {
        console.log("capturei um erro: " + erro);
    }
}

pesquisarDigimon()

