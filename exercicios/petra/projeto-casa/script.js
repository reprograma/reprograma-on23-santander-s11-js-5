//Sobre o exercício: 
//1. criar a função para fetch ();
//2. percorer a API (lista dos digimons);
//3. inner HTML;
//4. segunda endpoint e response 

//const digimonList = document.getElementById('digimon-list')
//const digimonDescription ou Details = document.getElementById('digimon-description') ? 

//*versão final do exercício 

//função requisição API - fetch com trycatch 

const digimonList = document.getElementById('digimon-list');
const digimonDetails = document.getElementById('digimon-details');

function createList(digimon) {
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

//Inner HTML - lista de digimons 

async function dataInputs() {
    const digimons = await getDigimons();
    digimons.forEach(digimon => digimonList.innerHTML += createList(digimon));
  }
  
  dataInputs();

// Cards 

function createCards(digimonGetName) {
    digimonDetails.innerHTML =
    `
      <div>
        <img src="${digimonGetName[0].img}" alt="image-digimon">
        <h2>${digimonGetName[0].name}</h2>
        <p>Level: ${digimonGetName[0].level}</p>
      </div>
    `
  }

//endpoint d.names 
async function getDigimonName(digimon) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);
    const digimonGetName = await response.json();
    createCards(digimonGetName);
  } catch (error) {
    console.error(error);
  }
}

