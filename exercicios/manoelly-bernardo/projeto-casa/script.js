const containerList = document.getElementById('container-list');
const digimonDetails = document.getElementById('digimon-details');

function createListDigimon(digimon) {
  return `
  <input type="button" class="digimon-input-name" value="${digimon.name}" onclick="getDigimonName('${digimon.name}')">
  `
}

async function getDigimons() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digimon = await response.json();
    return digimon;
  } catch (error) {
    console.error(error);
  }
}

async function populateInputs() {
  const digimons = await getDigimons();
  digimons.forEach(digimon => containerList.innerHTML += createListDigimon(digimon));
}

populateInputs();

async function getDigimonName(digimon) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
    const digimonGetName = await response.json();
    createCardDigimon(digimonGetName);
  } catch (error) {
    console.error(error);
  }
}

function createCardDigimon(digimonGetName) {
  digimonDetails.innerHTML =
  `
    <div>
      <img src="${digimonGetName[0].img}" alt="image-digimon">
      <h2>${digimonGetName[0].name}</h2>
      <p>Level: ${digimonGetName[0].level}</p>
    </div>
  `
}