const containerLista = document.getElementById("lista");
const containerDigimon = document.getElementById("digimon");

async function buscarLista() {
    try {
        const resposta = await fetch("https://digimon-api.vercel.app/api/digimon");
        const listaDigimon = await resposta.json();
        preencherLista(listaDigimon)
    } catch (error) {
        console.error(error)

    }
}

buscarLista()

function preencherLista(lista) {
    lista.forEach(item => {
        const botao = document.createElement("input");
        botao.type = "submit";
        botao.value = item.name;
        botao.setAttribute("onclick", "buscarDigimon(event)");
        containerLista.appendChild(botao);
    });
}

async function buscarDigimon(event) {
    const nomeDigimon = event.target.value;
    try {
        const resultado = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`);
        const detalheDigimon = await resultado.json();
        console.log(detalheDigimon)
        preencherDigimon(detalheDigimon[0]);


    } catch (error) {
        console.error(error);
    }
}

function preencherDigimon(digimon) {
    console.log(digimon)
    containerDigimon.innerHTML = `<div class="digimon-card">
        <img src="${digimon.img}" alt="imagem do digimon ${digimon.name}" >
        <h4>Nome:${digimon.name}</h4>
        <h4> Nível: ${digimon.level}</h4>
    </div>`


}