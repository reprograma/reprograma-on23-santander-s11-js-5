const card = document.getElementById('card');
const renderDigimon = (digimon) => {
    card.innerHTML = `
      <img class="" src=${digimon.img}>
      <h3 class="">Name: ${digimon.name}</h3>
      <p class="">Level: ${digimon.level}</p>
    `;
  };

async function getDigimonByName() {
  const digimonNameInput = document.getElementById('digimonNameInput');
  const digimonName = digimonNameInput.value.trim();

  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
    console.log(response);
    const digimonData = await response.json();
    console.log(digimonData);
    
    
    if (digimonData.length > 0) { // decisões condicionais
        renderDigimon(digimonData[0]);
      } else {
        card.innerHTML = 'Nenhum Digimon encontrado com esse nome.';
      }

  } catch (error) {
    console.log("Capturei um erro: " + error);
    card.innerHTML = 'Ocorreu um erro ao buscar o Digimon.';
  }
}
