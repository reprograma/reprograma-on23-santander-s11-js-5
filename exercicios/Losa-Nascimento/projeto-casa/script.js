async function getReturn() {
    try {
      const response = await fetch('/api/digimon')
      const data = await response.json()
      console.log(data)
    }
    catch(erro) {
      console.log("capturei um erro: " + erro)
    }
  }
  
  
  async function getName () {
    try {
        const response = await fetch('/api/digimon/name/:name')
        const data = await response.json()
        console.log(data)
      }
      catch(erro) {
        console.log("capturei um erro: " + erro)
      }
  }

  //desisti, desculpa por não tentar mais professora, espero que revisando esse conteúdo inavada a minha mente. 
  