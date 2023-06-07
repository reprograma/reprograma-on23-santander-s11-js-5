function buscarDigimon() {
    const input = document.getElementById("digimonName");
    const digimonName = input.value;

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
      .then(response => response.json())
      .then(data => exibirDigimon(data[0]))
      .catch(error => console.error(error));
  }

  function exibirDigimon(digimon) {
    const digimonInfo = document.getElementById("digimonInfo");
    digimonInfo.innerHTML = "";

    if (digimon) {
      const name = document.createElement("h2");
      name.textContent = digimon.name;

      const img = document.createElement("img");
      img.src = digimon.img;

      const level = document.createElement("p");
      level.textContent = "Level: " + digimon.level;

      digimonInfo.appendChild(name);
      digimonInfo.appendChild(img);
      digimonInfo.appendChild(level);
    } else {
      const notFound = document.createElement("p");
      notFound.textContent = "Digimon não encontrado.";

      digimonInfo.appendChild(notFound);
    }
  }