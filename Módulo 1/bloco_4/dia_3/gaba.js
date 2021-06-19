
let n = 3;
let line = "";
let simbolo = "*";
let posicao = n;

for (let linha = 1; linha <= n; linha +=1) {
    for (let coluna = 1; coluna < n+1; coluna +=1) {
        if (coluna < posicao) {
            line = line + " ";
        } else {
            line = line + "*";
        }
    }
    console.log(line);
    line = "";
    posicao -= 1;
}