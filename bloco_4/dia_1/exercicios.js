//1)

let a = 4;
let b = 2;

let adicao = a+b;
let subtracao = a-b;
let multi = a*b;
let div = a/b;
let resto = a%b;

console.log(adicao);
console.log(subtracao);
console.log(multi);
console.log(div);
console.log(resto);

//2)

let c = 2;
let d = 4;

if (c > d) {
    console.log(c);
} else {
    console.log(d);
};

//3)

let e = 4;
let f = 9;
let g = 3;

if (e > f && e > g) {
    console.log(e);
} else if (f > g) {
    console.log(f);
} else {
    console.log(g);
};

//4

let h = 0;

if (h > 0) {
    console.log("Positive");
} else if (h < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
};

//5

let ang1 = 40;
let ang2 = 50;
let ang3 = 90;
let soma = ang1+ang2+ang3;
let valid = true;
let notValid = false;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Ângulo inválido");
} else if (soma == 180) {
    console.log(valid);
} else {
    console.log(notValid);
}

//6

let peça = "CAVALEIRO";
let lowerCase = peça.toLowerCase();

switch (lowerCase) {
    case "peao":
        console.log("peao: uma casa pra frente");
        break;

    case "torre":
        console.log("torre: quantas casas quiser na vertical e horizontal");
        break;

    case "cavalo":
        console.log("cavalo: anda em L");
        break;
    
    case "bispo": 
        console.log("bispo: quantas casas quiser nas diagonais");
        break;
    
    case "dama": 
        console.log("dama: quantas casas quiser em todas as direcoes");
        break;

    case "rei":
        console.log("rei: uma casa em todas as direcoes");
        break;
    
    default:
        console.log("Erro, peça inexistente!");
}

//7 

let nota = 15;

if (nota >= 90 && nota <=100) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >=70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >=50 && nota < 60) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else {
    console.log("Erro!")
}

//8

let num1 = 3;
let num2 = 2;
let num3 = 2;
let par = true;
let impar = false; 

if (num1%2 == 0 || num2%2 == 0 || num3%2 == 0) {
    console.log(par);
} else {
    console.log(impar);
}

//9


let num1 = 3;
let num2 = 2;
let num3 = 2;
let par = false;
let impar = true;

if (num1%2 !== 0 || num2%2 !== 0 || num3%2 !== 0) {
    console.log(impar);
} else {
    console.log(par);
}

//10

let custo = 20;
let imposto = 1.20;
let custoTotal = custo*imposto;
let venda = 40;
let lucro = venda-custoTotal;
let qtd = 1000;

console.log("O valor do lucro da venda de 1000 produtos é:")
console.log(qtd*lucro);

//11

let salarioBruto = 3000.0;
let inss = 0;
let ir = 0;
let salarioFinal = 0;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto*0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto*0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto*0.11;
} else if (salarioBruto > 5189.82) {
    inss = 570.88;
}

let salarioINSS = salarioBruto - inss;

if (salarioINSS <= 1903.98) {
    ir = 0;
} else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioFinal = salarioINSS - ((salarioINSS*0.075) - 142.80)
} else if (salarioINSS >= 2826.55 && salarioINSS <= 3751.05) {
    salarioFinal = salarioINSS - ((salarioINSS*0.15) - 354.80)
} else if (salarioINSS >= 3751.05 && salarioINSS <= 4664.68) {
    salarioFinal = salarioINSS - ((salarioINSS*0.225) - 636.13)
} else if (salarioINSS >= 4664.68 && salarioINSS <= 2826.65) {
    salarioFinal = salarioINSS - ((salarioINSS*0.275) - 869.36)
}

console.log(salarioFinal)

//fim!