const digimonsList = document.getElementById("lista-digimons");
const card = document.getElementById("card");

// const buscar = document.getElementById('buscar')

// buscar.addEventListener('click', (event)=> {
//     event.preventDefault()
//     findDigimon(digimon)
// })

async function getDigimons() {
  try {
    const digimons = await fetch("https://digimon-api.vercel.app/api/digimon/");
    const digimonNames = await digimons.json();
    renderDigimons(digimonNames);
  } catch (erro) {
    console.error("Erro capturado: " + erro);
  }
}

function renderDigimons(digimons) {
  digimons.forEach(
    (digimon) =>
      digimonsList.innerHTML += 
      `<input id="digi" type="submit" value="${digimon.name}" 
      onclick="getOneDigimon(this.value)">`
  )
}

async function getOneDigimon(nome) {
  try {
    const response = await fetch(
      `https://digimon-api.vercel.app/api/digimon/name/${nome}`
    );
    const digimon = await response.json();
    createCardDigimon(digimon[0]);
  } catch (erro) {
    console.error("Erro capturado: " + erro);
  }
}

function createCardDigimon(digimon) {
  card.innerHTML = `
    <img src= ${digimon.img}>
    <h3> ${digimon.name} </h3>
    <p> Level: ${digimon.level} </p>
    `;
}

getDigimons();
