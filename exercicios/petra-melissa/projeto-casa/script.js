// EXERCICIO: FETCH ();
// RETURN LISTA DE TODOS DIGIMONS 
// INNER HTML
//CONTAINER (APARECER TODOS OS DIGIMONS)
//BUTTON - SEGUNDO ENDPOINT 

//Constante para lista e detalhes dos digimons 

const containerList = document.getElementById('container-list');
const digimonContent = document.getElementById('digimon-Content');

// Função da lista 

async function createDigimonList(digimon) {
  try {
    let digimons = await fetch("https://digimon-api.vercel.app/api/digimon")
    digimons = await digimons.json()
    return digimons
  }

  catch (error) {
    console.log("error capturado: " + error)
  }

}

//Função assíncrona input lista 

async function populateInputs() {
  const digimons = await getDigimon();
  digimons.forEach(digimon => containerList.innerHTML += createListDigimon(digimon));
}

populateInputs();

async function getDigimonNome(digimon) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app//api/digimon/name/${digimon}`);
    const digimonGetNome = await response.json();
    createCardDigimon(digimonGetNome);
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
 
getDigimon