async function getWelcome() {
  try {
    const response = await fetch('https://hackear.herokuapp.com/')
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

// getWelcome()

async function getBeginers() {
  try {
    const response = await fetch("https://hackear.herokuapp.com/beginers", {
      method: 'GET',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    });
    console.log(response)
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

// getBeginers()

async function createBeginer() {
  try {
    const response = await fetch("https://hackear.herokuapp.com/beginers/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      },
      body: JSON.stringify({
        "name": "Losa",
        "phone": "83987234999",
        "email": "losafrontend@gmail.com",
        "linkedin": "https://linkedin.com/in/losa",
        "github": "https://github.com/losa",
        "city": "Patos",
        "state": "Paraíba",
        "studyTime": 2,
        "stacksOfInterest": "Back-end",
        "priorKnowledge": [
          "Node",
          "Typescript",
          "Mongodb"
        ],
        "englishLevel": 2,
        "othersPrograms": "{reprograma}",
        "hasComputer": true,
        "internetAccess": true,
        "message": "Ela é hacker",
        "findUs": "Amiges"
      })
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}


async function getBeginerById(id) {
  try {
    const response = await fetch(`https://hackear.herokuapp.com/beginers/${id}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const data = await response.json()  
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

// getBeginerById("647b54274c85b900028a53a9") //https://hackear.herokuapp.com/beginers/647b54274c85b900028a53a9
// getBeginerById("635426faf8e5920004b0060d") //https://hackear.herokuapp.com/beginers/635426faf8e5920004b0060d

async function updateBeginer(id) {
  try {
    const response = await fetch(`https://hackear.herokuapp.com/beginers/update/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      },
      body: JSON.stringify({
        "name": "luna travesti",
        "state": "pe"
      })
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

async function deleteBeginer(id) {
  try {
    const response = await fetch(`https://hackear.herokuapp.com/beginers/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

const button = document.getElementById('button')
button.addEventListener('click', (event) => {
  event.preventDefault()
  return deleteBeginer('635426faf8e5920004b0060d')
})

async function getBeginerByFilter(campo, valor) {
  try {
    const response = await fetch(`https://hackear.herokuapp.com/beginers/filter?${campo}=${valor}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
      }
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("capturei um erro: " + erro)
  }
}

getBeginerByFilter('name', 'liniker')

//  https://hackear.herokuapp.com/beginers/filter?city=patos
