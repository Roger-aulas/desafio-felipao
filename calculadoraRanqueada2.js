// Forma 1: Usando switch
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case vitorias <= 10:
            nivel = "Ferro";
            break;
        case vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso
calcularNivel(150, 5); 