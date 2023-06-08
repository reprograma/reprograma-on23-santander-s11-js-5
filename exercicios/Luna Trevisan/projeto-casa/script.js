const ul = document.getElementById('digimonList')

function buscarDigimon() {
	const nameDigimon = document.getElementById('Buscar').value
	const url = `https://digimon-api.vercel.app/api/digimon/name/${nameDigimon}`;
	fetch(url).then(function (response) {
		response.json().then(resultado)
	})
}

function resultado(dadosDigimon) {
	const name = document.getElementById('nameDigimon')
	name.innerHTML = dadosDigimon[0].name
	const lvl = document.getElementById('lvlDigimon')
	lvl.innerHTML = dadosDigimon[0].level
	const pic = document.getElementById('imagemDigimon')
	pic.src = dadosDigimon[0].img
}


async function getDigimons() {
	try {
		const response = await fetch('https://digimon-api.vercel.app/api/digimon')
		const json = await response.json()
		console.log(json)
		return json
	}
	catch (erro) {
		console.log("capturei um erro: " + erro)
	}
}

async function fillPage() {
	try {
		const digimons = await getDigimons()
		digimons.forEach(digimon => {
			ul.innerHTML += createHTML(digimon)

		});


	}
	catch (erro) {
		console.log("capturei um erro: " + erro)
	}
}

function createHTML(digimon) {
	return `
    <button onclick="showDigimonWhenClicked('${digimon.name}')">${digimon.name}</button>
    `
}

async function showDigimonWhenClicked(name) {
	try {
		const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
		const response = await fetch(url)
		const digimon = await response.json()
		resultado(digimon)
		

	}
	catch (erro) {
		console.log("capturei um erro: " + erro)
	}
}


fillPage()