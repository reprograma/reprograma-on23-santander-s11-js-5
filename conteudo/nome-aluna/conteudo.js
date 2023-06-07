async function getWelcome() {
    try{
        const response = await fetch ('https://hackear.herokuapp.com/')
        const data = await response.json()
        console.log(data)
    }
    catch(erro){
        console.log("capturei um erro:" + erro)
    }
}

//getWelcome()

async function getBeginers() {
    try{
        const response = await fetch ("https://hackear.herokuapp.com/beginers")
        const data = await response.json()
        comsole.log(data)

    }

 catch(erro)  {
    console.log("capturei um erro:" + erro)
   }
}

getBeginers()