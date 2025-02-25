const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Desafio classificador de nível de Herói!!!");

    rl.question("Digite o nome do herói: ", (nome) => {
        rl.question("Digite o nível do herói: ", (nivelInput) => {
            let nivel = parseInt(nivelInput);
            let rank = "";

            if (nivel < 1000) {
                rank = "Ferro";
            } else if (nivel >= 1001 && nivel <= 2000) {
                rank = "Bronze";
            } else if (nivel >= 2001 && nivel <= 5000) {
                rank = "Prata";
            } else if (nivel >= 5001 && nivel <= 7000) {
                rank = "Ouro";
            } else if (nivel >= 7001 && nivel <= 8000) {
                rank = "Platina";
            } else if (nivel >= 8001 && nivel <= 9000) {
                rank = "Ascendente";
            } else if (nivel >= 9001 && nivel <= 10000) {
                rank = "Imortal";
            } else if (nivel >= 10001) {
                rank = "Radiante";
            }

            console.log(`O Herói de nome ${nome} está no nível de ${rank}`);
            rl.close(); 
        });
    });