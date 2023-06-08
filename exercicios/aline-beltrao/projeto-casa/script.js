//Utilize o método fetch ou a biblioteca axios para consumir o endpoint da [Digimon API](https://digimon-api.vercel.app/) que retorna um digimon pelo seu nome, deixando a usuária entrar com o nome de um digimon e ao clicar num botão, as informações do digimon serão carregadas! Dica: mostre uma lista com os nomes dos digimons para a usuária, isso pode ser feito através do endpoint que retorna todos os digimons.

const digimonList = document.getElementById('digimon-list')
const digimonInfo = document.getElementById('digimon-info')

async function buscarDigimon(){
    try{
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const data= await response.json()

        digimonList.innerHTML = ''

        //exibe o digimons
        data.forEach(digimon => {
            const digimonItem = document.createElement('li');
            digimonItem.textContent = digimon.name;
            
            digimonItem.addEventListener('click', () => exibirDetalhesDigimon(digimon))
            
            digimonList.appendChild(digimonItem); 
        })

    }catch (error) {
        console.error('ocorreu um erro ao buscar o Digimon: ', error)
    } 
}

const digimonContainer = document.getElementById('digimon-container')

function exibirDetalhesDigimon(digimon) {
    try {
        const digimonInfo = document.createElement('div')
        digimonInfo.classList.add('digimon-info')

        const digimonName = document.createElement('h2')
        digimonName.textContent = digimon.name

        const digimonImage = document.createElement('img')
        digimonImage.src = digimon.img

        const digimonLevel = document.createElement('p')
        digimonLevel.textContent = `Level: ${digimon.level}`

        digimonInfo.appendChild(digimonName)
        digimonInfo.appendChild(digimonImage)
        digimonInfo.appendChild(digimonLevel)

        digimonContainer.innerHTML = ''
        digimonContainer.appendChild(digimonInfo)

    } catch (error) {
        console.error("Ocorreu um erro ao buscar informações do Digimon: ", error)
    }
}

buscarDigimon()
/*ver aqui esses atributos, então incorretos*/