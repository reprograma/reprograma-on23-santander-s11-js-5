async function getWelcome () {
try {
    const response = await fetch("https://https://hackear.herokuapp.com/")
    const data =  await response.json()
    return data
}
} catch (error) {
    console.error("captruei um erro" + error );
}    

async function getBeginers () {
    try {
        const response = await fetch("https://https://hackear.herokuapp.com/beginers")
        const data =  await response.json()
        return data
    } catch (error) {
        console.error("captruei um erro" + error );
    }
}