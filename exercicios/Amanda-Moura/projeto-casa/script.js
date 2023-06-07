const container = document.getElementById('cards');
const searchInput = document.getElementById('input');
const searchButton = document.getElementById('button');
let digimons = [];

//função para buscar o digimon//
async function fetchDigimonByName(name) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

//função para criar o card na tela com o digimon//
function createCard(digimon) {
  return `
    <div class="card">
      <h2 class="name">${digimon.name}</h2>
      <img class="img" src="${digimon.img}" alt="${digimon.name}">
      <p class="level">Level: ${digimon.level}</p>
    </div>
  `;
}

//conforme a tela for acessada, devem ser exibidos 10 digimons de forma randomica//
async function fetchRandomDigimons() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
//yugioh
function getRandomDigimons() {
  const randomDigimons = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digimons.length);
    randomDigimons.push(digimons[randomIndex]);
  }
  return randomDigimons;
}

function displayDigimons(digimons) {
  container.innerHTML = ''; //limpar o conteudo do conteiner pra poder recever novo digimon isso aqui deu raiva//
  digimons.forEach((digimon) => {
    const card = createCard(digimon);
    container.innerHTML += card; // 
  });
}

function displayDigimon(digimon) {
  container.innerHTML = '';
  const card = createCard(digimon);
  container.innerHTML = card;
}

async function searchDigimon() {
  const searchTerm = searchInput.value.toLowerCase();
  const digimon = await fetchDigimonByName(searchTerm);
  displayDigimon(digimon[0]);
}

async function main() {
  digimons = await fetchRandomDigimons();
  const randomDigimons = getRandomDigimons();
  displayDigimons(randomDigimons);

  searchButton.addEventListener('click', searchDigimon);
}

main();