function consultaDigimon (){
    const digimon = document.getElementById('Procurar').value
    const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;
    
    fetch(url).then(function(response){
        response.json().then(mostrarResultado)
    
    })
    } 
    
    function mostrarResultado(dadosdodigimon){
        console.log("digimon:"+JSON.stringify(dadosdodigimon))
        const nomedodigimon = document.getElementById('nomedodigimon')
        nomedodigimon.innerHTML = dadosdodigimon[0].name
        const leveldodigimon = document.getElementById('leveldodigimon')
        leveldodigimon.innerHTML = dadosdodigimon[0].level
        const imagemdodigimon = document.getElementById('imagemdodigimon')
        imagemdodigimon.src = dadosdodigimon[0].img 
    }