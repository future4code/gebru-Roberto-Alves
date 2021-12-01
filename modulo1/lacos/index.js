/*

1 - 
10

2 -

19
21
23
25
27
30
*/

/*
3 -
 ****
*/
let quantidadePets = Number(prompt("Quantos bichinhos de estimação você possui: "))
let petUser = quantidadePets
let meusPets = []

if (petUser === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if (petUser > 0) {
    for (let i = 0; i < quantidadePets; i++){
       let nomes = prompt('Digite o nome dos seus pets?'); nomes = petUser; nomes++;{
        meusPets.push(Array [nomes]);
       }
       
    }
}
console.log(meusPets)
