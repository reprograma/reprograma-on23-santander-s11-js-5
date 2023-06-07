const input = document.getElementById('input_search')
const imgDigimon = document.querySelector('.card__img')
const digiTitle = document.querySelector('.card__name')
const digiText = document.querySelector('.card__text')

const getDigimon = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon/')
        const digimonData = await response.json()
        return digimonData
    }
    catch (err) {
        console.error("Capturei um erro:", err)
    }
}

function digimonApi() {
    input.addEventListener('change', async ({ target }) => {
        const digiList = await getDigimon()
        const findDigimonName = digiList.find(({ name }) => name.toLowerCase() === target.value.toLowerCase())
        const { name, level, img } = findDigimonName
        digiText.innerText = `é do level ${level}`
        digiTitle.innerHTML = name
        imgDigimon.src = img
    })
}

digimonApi()
 

