const list = document.getElementById('list')
const card = document.getElementById('card')

async function getList() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon')
    const digimons = await response.json()
    renderList(digimons)
  }
  catch(erro) {
    console.error("Capturei um erro: ", erro)
  }
}


function renderList(items) {
  items.forEach((item) => list.innerHTML +=
  `<input class="buttons" type="submit" value=${item.name} onclick="getDigimon(this.value)">`)
}

async function getDigimon(nome) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nome}`)
    const digimon = await response.json()
    renderDigimon(digimon[0])
  }
  catch(erro) {
    console.error("Capturei um erro: ", erro)
  }
}

function renderDigimon(digimon) {
  card.innerHTML = `
    <img src=${digimon.img}>
    <h3>Name: ${digimon.name}</h3>
    <p>Level: ${digimon.level}</p>
  `
}

getList()