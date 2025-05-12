function calculoFaixaEtaria () {
    let conta = 1;
    let f1 = 0;
    let f2 = 0;
    let f3 = 0;
    let f4 = 0;
    let f5 = 0;

    while (conta <= 8) {
        idade = Number(prompt('Informe idade da pessoa ' + conta))
        if(idade >= 0 && idade <= 15) {
            f1++;
        }
        else if (idade >= 16 && idade <= 30) {
            f2++;
        }
        else if (idade >= 31 && idade <= 45) {
            f3++;
        }
        else if (idade >= 46 && idade <= 60) {
            f4++;
        }
        else if (idade >= 60 && idade <= 130){
            f5++
        }
        else {
            alert("A idade inserida é invpalida")
            continue
        }
        conta++

     }
     
     alert("Faixa 1: " + f1 + " Faixa 2: " + f2 + " Faixa 3: " + f3 + " Faixa 4: " + f4 + " Faixa 5: " + f5 +  (f1/8*100) +  (f1/8*100));
        
        
}

function leituraGrupos() {
    let a, b, c, d, aux; 
    let conta = 1;
    a = Number(prompt(`Informe o valor de A`))
    b = Number(prompt(`Infomre o valor de B`))
    c = Number(prompt(`Infomre o valor de C`))
    d = Number(prompt(`Infomre o valor de D`))
     
    while (conta <= 3) {
        if (a > b) {
            aux = a; a = b; b = aux
        }
        if (b > c) {
            aux = b; a = c; c = aux
        }
        if (c > d) {
            aux = c; c = d; d = aux
        }
        conta++;

        alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }
}