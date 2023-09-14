import PromptSync from "prompt-sync";
const prompt = PromptSync()

function lista(){
   var numeros = []
   var maiorNum = Number.NEGATIVE_INFINITY
   var menorNum = Number.POSITIVE_INFINITY
do{
    var lis = Number (prompt('Numeros: '))
    numeros.push(lis)
} while (lis != 0) 

console.log(`Lista: \n`)
for(var i=0;i<=numeros.length;i++){
    console.log(` ${numeros[i]}`)
}
for(var i=0;i<numeros.length;i++){
    if(numeros[i]>maiorNum){
        maiorNum = numeros[i]
    } 
}
for(var i=0;i<numeros.length;i++){
    if(numeros[i]<menorNum){
        menorNum = numeros[i]
    } 
}
console.log(`Maior numero: ${maiorNum}`)
console.log(`Menor numero: ${menorNum}`)
}

console.log('Digite aqui numeros até digitar 0 para sair')
lista()


