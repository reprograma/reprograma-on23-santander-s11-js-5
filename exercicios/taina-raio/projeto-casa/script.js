const container = document.getElementById('demo')
const input = document.getElementById("input")
const oneDigimon = document.getElementById("onedigimon")


function createDigimon(digimon) {
  return `
    <div class="digimons">
        
       <h2 class="titulo">${digimon.name}</h2>
      
    </div>
  `
} 

function newDigimon(digimon) {
    return `
      <div class="digimons">
          <img src = "${digimon.img}" class="imagem">
          <h2 class="title">${digimon.name}</h2>
        <h1 class="level">${digimon.level}</h1>
      </div>
    `
  } 

async function getDigimons() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon')
    const json = await response.json()
    return json
  }
  catch(erro) {
    console.error("Erro capturado: " + erro)
  }
}

async function getOnedigimon() {
 const pesquisa = input.value   
    try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${pesquisa}`)
      const digimon = await response.json()
      oneDigimon.innerHTML = newDigimon(digimon[0])
      return json
    }
    catch(erro) {
      console.error("Erro capturado: " + erro)
    }
  }

async function main() {
  const digimon = await getDigimons()
  digimon.map((digimon) => container.innerHTML += createDigimon(digimon))

}

main()

async function getOnedigimons() {
    try {
      const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
      const json = await response.json()
      return json
    }
    catch(erro) {
      console.error("Erro capturado: " + erro)


    }
}