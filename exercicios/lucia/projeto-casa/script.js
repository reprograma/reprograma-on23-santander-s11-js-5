
const container = document.getElementById('todo')

function createCard(digimon) {
  return `
  <div class="card" onclick="showDetails('${digimon.img}')">
      <h2 class="title">${digimon.name}</h2>
      <p class="type">${digimon.level}</p>
    </div>
  `
} 

async function GetDigimon() {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/`)
    const data = await response.json()
    return data
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

async function main() {
  try {
    const personagens = await GetDigimon()
    personagens.map((digimon) => container.innerHTML += createCard(digimon))
  } catch (error) {
    console.log('Erro:', error.message)
  }
}

main()

async function showDetails(img) {
  try {

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = img;
    detailsContainer.appendChild(image);

    document.body.appendChild(detailsContainer);
  } catch (error) {
    console.log('Erro:', error.message);
  }
}

async function searchDigimon() {
  try {
    const digimonName = document.getElementById('digimonInput').value;
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
    const digimon = await response.json();
    if (digimon ) {
      showDetails(digimon.img);
    } else {
      console.log('Digimon não encontrado');
    }
  } catch (error) {
    console.log('Erro:', error.message);
  }
}



  

