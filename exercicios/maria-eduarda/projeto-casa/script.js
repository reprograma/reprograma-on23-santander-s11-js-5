const container = document.getElementById("demo");
const digimonsInfo = document.getElementById("digimonsInfo");

function createDigimonsName(digimon) {
  return `
  <input class="digimon-button" type="button" value="${digimon.name}" onclick="digimonClicked('${digimon.name}')">`;
}

async function getDigimons() {
  try {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    const json = await response.json();
    return json;
  } catch (erro) {
    console.error("Erro capturado: " + erro);
  }
}

async function fillPage() {
  const digimons = await getDigimons();
  digimons.forEach(
    (digimon) => (container.innerHTML += createDigimonsName(digimon))
  );
}

fillPage();

async function digimonClicked(digimonInfo) {
  try {
    let digimon = await fetch(
      `https://digimon-api.vercel.app/api/digimon/name/${digimonInfo}`);
    console.log(digimonInfo)
    digimon = await digimon.json();

    digimonsInfo.innerHTML = `
     <div class="digimon-result">
     <img src="${digimon[0].img}" alt="${digimon[0].name} image">
     </div>
     <div class="text-digimon">
     <h2>Name: ${digimon[0].name}</h2>
     <p>Level: ${digimon[0].level}</p>
     </div>
     `;
  } 
  catch (erro) {
    console.error("Erro capturado: " + erro);
  }
}

