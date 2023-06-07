function searchDigimon() {
    let input = document.getElementById("searchInput").value;
    if (input) {
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${input}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    displayDigimon(data[0]);
                } else {
                    displayError("Digimon não encontrado.");
                }
            })
            .catch(error => {
                displayError("Ocorreu um erro ao buscar o Digimon.");
            });
    } else {
        displayError("Por favor, digite o nome de um Digimon.");
    }
}

function displayDigimon(digimon) {
    let digimonInfo = document.getElementById("digimonInfo");
    digimonInfo.innerHTML = `
        <h2>${digimon.name}</h2>
        <p><strong>Nível:</strong> ${digimon.level}</p>
        <img src="${digimon.img}" alt="Imagem do Digimon ${digimon.name}">
    `;
}

function displayError(message) {
    let digimonInfo = document.getElementById("digimonInfo");
    digimonInfo.innerHTML = `<p>${message}</p>`;
}