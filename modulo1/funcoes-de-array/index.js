/*
nome: Amanda Rangel, apelido: Mandi 0 
nome: Laís Petra, apelido: Laura 1
nome: Letícia Chijo, apelido: Chijo 2 
*/

// [Amanda Rangel, Laís Petra, Letícia Chijo]
/*
[
    { nome: 'Amanda Rangel', apelido: 'Mandi' },
    { nome: 'Laís Petra', apelido: 'Laura' }
]
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayA = pets.map((item, index, array) => {
    return item.nome
 })
 console.log(novoArrayA)
 
 const novoArrayB = pets.filter((item, index, array) => {
    return item.raca !== "Salsicha"
 })
 console.log(novoArrayB)

 



