import PromptSync from "prompt-sync";
function maiorNum(valor1,valor2,valor3){
    if(valor1 > valor2 && valor1>valor3){
        console.log('o maior valor é \n'+ valor1)
    } else if(valor2 > valor1 && valor2>valor3){
        console.log('o maior valor é \n'+ valor2)
    } else if(valor3 > valor1 && valor3>valor2){
        console.log('o maior valor é \n' + valor3)
    }
}
const prompt = PromptSync()
console.log('Insira três valores: ')

var val1 = Number (prompt( "Valor 1:"))
var val2 = Number (prompt("Valor 2: "))
var val3 = Number (prompt("Valor 3: "))
 maiorNum(val1,val2,val3)