



    function buscarDigimon() {
        const nameDigimon = document.getElementById('Buscar').value
        const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;
        fetch(url).then(function(response){
            response.json().then(mostrarResultado)
        })

    }
    
    function resultado(dadosDigimon){
        (JSON.stringify(dadosdodigimon))
        const name = document.getElementById('nameDigimon')
        name.innerHTML = dadosDigimon[0].name
        const lvl = document.getElementById('lvlDigimon')
        lvl.innerHTML = dadosDigimon[0].level
        const pic = document.getElementById('imagemDigimon')
        pic.src = dadosDigimon[0].img 
    }
