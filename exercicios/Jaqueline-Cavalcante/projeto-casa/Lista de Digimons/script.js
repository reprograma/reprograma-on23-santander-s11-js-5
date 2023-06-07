// Função para buscar informações de um Digimon pelo nome
async function fetchDigimonByName(digimonName) {
  const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
  const data = await response.json();
  return data[0]; // Retorna apenas o primeiro Digimon encontrado
}

// Função para exibir as informações do Digimon na página
function showDigimonInfo(digimon) {
  const digimonInfo = document.getElementById("digimonInfo");

  if (digimon) {
    const html = `
      <p><strong>Nome:</strong> ${digimon.name}</p>
      <p><strong>Level:</strong> ${digimon.level}</p>
      <img src="${digimon.img}" alt="${digimon.name}">
    `;
    digimonInfo.innerHTML = html;
  } else {
    digimonInfo.innerHTML = "<p>Digimon não encontrado.</p>";
  }
}

// Função para buscar todos os Digimons e exibir a lista
async function fetchAllDigimons() {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await response.json();
  showDigimonList(data);
}

// Função para exibir as informações do Digimon na página
function showDigimonInfo(digimon) {
  const digimonInfo = document.getElementById("digimonInfo");

  if (digimon) {
    const html = `
      <p><strong>Nome:</strong> ${digimon.name}</p>
      <p><strong>Level:</strong> ${digimon.level}</p>
      <img src="${digimon.img}" alt="${digimon.name}">
    `;
    digimonInfo.innerHTML = html;
  } else {
    digimonInfo.innerHTML = "<p>Digimon não encontrado.</p>";
  }
}

// Função para exibir a lista de Digimons
function showDigimonList(digimons) {
  const digimonList = document.getElementById("digimonList");

  digimons.forEach(digimon => {
    const listItem = document.createElement("li");
    listItem.classList.add("digimon-list-item");
    const digimonButton = document.createElement("button");
    const digimonImage = document.createElement("img");
    digimonImage.src = digimon.img;
    digimonImage.alt = digimon.name;
    digimonButton.textContent = digimon.name;
    digimonButton.classList.add("button");
    digimonButton.addEventListener("click", async () => {
      const selectedDigimon = await fetchDigimonByName(digimon.name);
      showDigimonInfo(selectedDigimon);
    });
    listItem.appendChild(digimonImage);
    listItem.appendChild(digimonButton);
    digimonList.appendChild(listItem);
  });
}




// Evento para carregar a lista de Digimons quando a página carregar
window.addEventListener("load", fetchAllDigimons);
