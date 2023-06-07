const lista = document.getElementById('lista');
const descricao = document.getElementById('descricao');

function criarLista(digimon) {
    return `<input type="button" class="name" value="${digimon.name}" onclick="getName('${digimon.name}')">`
}

async function criarBotoes() {
    const digimons = await getDigimons();
    digimons.map(digimon => lista.innerHTML += criarLista(digimon));
}


criarBotoes();


async function getName(digimon) {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
        const name = await response.json();
        exibirDigimon(name);
    }

    catch (error) {
        console.error(error);
    }
}


async function getDigimons() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const digimon = await response.json();
        return digimon;
    }

    catch (error) {
        console.error(error);
    }
}


function exibirDigimon(getName) {
    descricao.innerHTML = `<div><img src="${getName[0].img}" alt="image-digimon">${getName[0].name}<p>Level: ${getName[0].level}</p></div>`
}
