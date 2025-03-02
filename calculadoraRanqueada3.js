function calcularNivelArray(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    let limites = [10, 20, 50, 80, 90, 100, Infinity];
    let nivel = niveis[limites.findIndex(limite => vitorias <= limite)];

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso:
calcularNivelArray(150, 7);