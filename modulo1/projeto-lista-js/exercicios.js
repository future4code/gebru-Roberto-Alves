// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let areaRetangulo = 3 * 5
  return areaRetangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 const anoAtual = 2020
 const nascimento = 1990
 let idade = (anoAtual - nascimento)
 return idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt('qual é seu nome?')
let idade = prompt('quale sua idade')
let email = prompt('digite seu email')
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt('Digite a primeira cor')
let cor2 = prompt('Digite a segunda cor')
let cor3 = prompt('Digite a terceira cor')
const cores = [cor1 , cor2 , cor3 ]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let text = 'oi'
console.log(text.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let valorEspetaculo = num1
let valorIngresso = num2
const total = num1 / num2
console.log(total)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1 === string2
  console.log(igualdade)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let cores = [1, 2, 3]
  const primeiroElemento = cores.shift()
  console.log(primeiroElemento)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let array = [1, 2, 3, 4, 5];
  let ultimo = array[array.length - 1];
  console.log(ultimo);
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array = [1,2,3,4]
const troca = array => [array[3], array[0]]
console.log(troca)
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const igualdade = string1 == string2
console.log(igualdade)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt('qual o ano atual?'))
const anoNascimento = Number(prompt('Em que ano você nasceu?'))
const anoEmissaoRg = Number(prompt('Em que ano emitil seu RG'))
let idade = anoAtual - anoNascimento
let validade = anoAtual - anoEmissaoRg
if (((idade <= 20 && validade >= 5) || (idade > 20 && idade <= 50 && validade >= 10) || (idade > 50 && validade >= 15))){
  console.log(true)
} else {
  console.log(false)
}

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const ano = Number(prompt('Em que ano estamos?'))
if ((ano / 4) == 0){
console.log('true')
}else {
  console.log('false')
}

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt('Você tem mais de 18 anos?')
const ensino = prompt('Você possui ensino médio completo?')
const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
if (idade == sim){
  console.log('true')
}else {
  console.log('false')
}
if (ensino == sim){
  console.log('true')
}else {
  console.log('false')
}
if (disponibilidade == sim){
  console.log('true')
}else {
  console.log('false')
}
}