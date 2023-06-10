const digimonContainer = document.getElementById('digimonContainer');


function exibirInformacoes(digimon) {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'digimon';
    infoDiv.innerHTML = 
    `
    <div>
        <h2>${digimon.name}</h2>
        <p>Tipo: ${digimon.level}</p>
        <p>Atributo: ${digimon.attribute}</p>
        <p>Técnicas:</p>
    </div>
        
    `;
    digimonContainer.appendChild(infoDiv);
}


async function carregarDigimons() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();

        data.forEach(digimon => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `
                <img src="${digimon.img}" alt="${digimon.name}">
            `;

            cardDiv.addEventListener('click', () => {
            
                digimonContainer.innerHTML = '';
                exibirInformacoes(digimon);
            });

            digimonContainer.appendChild(cardDiv);
        });
    } catch (error) {
        console.log('Ocorreu um erro:', error);
    }
}

carregarDigimons();