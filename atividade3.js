import PromptSync from "prompt-sync";
const prompt = PromptSync()
function lista(){
   var numeros = []
do{
    var lis = Number (prompt('Numeros: '))
    numeros.push(lis)
} while (lis != 0) 
console.log(`Lista: \n `)
for(var i=0;i<=numeros.length;i++){

    console.log(` ${numeros[i]}`)

}
}

console.log('Digite aqui numeros até digitar 0 para sair')
lista()

