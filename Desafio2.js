function playerRanking(wins, losses) {
    let rankCalc = wins - losses
    return rankCalc
}

let playerRank = playerRanking(150, 80)
let rank = "null"

if (playerRank <= 10) {
    rank = "Ferro"
} else if (playerRank >=11 && playerRank <= 20) {
    rank = "Bronze"
}else if (playerRank >= 21 && playerRank <= 50){
    rank = "Prata"
}else if (playerRank >= 51 && playerRank <= 80){
    rank = "Ouro"
}else if (playerRank >= 81 && playerRank <= 90){
    rank = "Diamante"
} else if (playerRank >= 91 && playerRank <= 100){
    rank = "Lendário"
} else {
    rank = "Imortal"
}

console.log(`O Herói tem saldo de ${playerRank} e está no nível de ${rank}`)