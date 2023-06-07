const container = document.getElementById('demo')

function createDigimon(digimon) {
  return `
    <div class="digimons">
       <img src = "${digimon.img}" class="imagem">
      <h2 class="title">${digimon.name}</h2>
      
    </div>
  `
} 

<button><a target="_blank" href='file:///C:/Users/raio/Desktop/Reprograma/Semana%2011/reprograma-on23-santander-s11-js-5/exercicios/taina-raio/projeto-casa/outra.html'>${digimon.name}</a> </button>

async function main() {
    const digimon = await getDigimons()
    digimon.map((digimon) => container.innerHTML =+ createDigimon(digimon))
  
  }
  
  main()

async function getDigimons(digimon) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    const json = await response.json()
    return json
  }
  catch(erro) {
    console.error("Erro capturado: " + erro)
  }
}


