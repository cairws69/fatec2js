import PromptSync from "prompt-sync"

function tabuada(num,lim){
    for(var i=0;i<=lim;i++){    
        var res = num*i;
        console.log(`${num}*${i} = ${res}`)
    }
}
const prompt = PromptSync()
console.log('Digite 2 numeros: ')
var num = Number(prompt('Numero:'))
var lim = Number(prompt('Limite:'))
tabuada(num,lim)
