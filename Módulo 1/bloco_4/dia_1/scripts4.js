let semafaro = "azul";

switch (semafaro) {
    case "vermelho":
        console.log("PARE!");
        break;
    case "amarelo": 
        console.log("ATENÇÃO!");
        break;
    case "verde": 
        console.log("SIGA EM FRENTE!");
        break;
    default: 
        console.log("?");
}

//Exercicios part 5//

let estado = "aprovadissima";

switch (estado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista": 
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovada": 
        console.log("Você foi reprovada(o).");
        break;
    default: 
        console.log("Não se aplica.");
}
