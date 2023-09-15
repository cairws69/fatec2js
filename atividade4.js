const prompt = require('prompt-sync')();

function obterHobbies() {
    const hobbies = [];

    while (true) {
        const hobby = prompt('Digite um hobby (ou pressione Enter para encerrar): ');

        if (hobby === '') {
            break;
        }

        hobbies.push(hobby);
    }

    return hobbies;
}

function main() {
    const nome = prompt('Digite o nome do cliente: ');

    if (nome === '') {
        console.log('Nome não pode ser vazio.');
        return;
    }

    const hobbies = obterHobbies();

    if (hobbies.length === 0) {
        console.log('Lista de hobbies não pode ser vazia.');
        return;
    }

    const hobbiesFormatados = hobbies.join(', ');

    console.log(`Nome: ${nome} | Hobbies: ${hobbiesFormatados}`);
}

main();
