// arrow function

// function somar() {
//   return
// }

// subtrair = async () => {

// }

// [1,2].map((element) => console.log(element))

// spread operator

// const alunas = ['manu', 'flaviana', 'maryanne', 'ayndiara']
// const alunasCompleta = ['lucia', 'Déborah', 'Daniela', ...alunas]
// // console.log(alunasCompleta)

// const linguagens = ['javascript', 'dart', 'go', 'php']
// const devs = {
//   backend: 6,
//   frontend: 7,
//   mobile: 3,
//   fullstack: 4
// }

// const dadosTecnicosEmpresa = {
//   ramo: 'e-commerce',
//   criacao: 2016,
//   engenheiras: {
//     seguranca: 6,
//     dados: 2,
//     ...devs
//   },
//   linguagens: ['clojure', 'c#', ...linguagens],
// }

// console.log(dadosTecnicosEmpresa)

// function somar(...argumentos) { // [9,6,2,1,0,7]
//   console.log(argumentos.reduce((acumulador, elementoAtual) => acumulador + elementoAtual))
// }

// somar(9,6,2,1,0,7) // 25
// somar(9,6)
// somar(9,6,2,1,0,7,8,99,1,3,4,6,8,3,2,67,8,4,2,5,63,6,5,4,4,23,5,4)


function subtrair(a, b, c) {
  console.log(a - b - c)
}

const array = [8, 2, 4]

// subtrair(...array)

// destruct

const devs = {
  backend: 6,
  frontend: 7,
  mobile: 3,
  fullstack: 4
}

const {frontend, mobile} = devs

console.log(frontend)
console.log(mobile)

const arr = [5, 3, 7, 1, 9]

const [ primeiro, segundo ] = arr

console.log(primeiro)
console.log(segundo)
