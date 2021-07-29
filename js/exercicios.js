/* Exercício 01 */

function cumprimentar() {
    const name = document.getElementById('name-c1').value;
    document.getElementById('resultado').innerHTML = `Olá, ${name}!`;
}

/* Exercício 02 */

function anoEmDias() {
    const age = document.getElementById('age-c2').value;
    document.getElementById('resultado').innerHTML = `Idade em dias = ${age * 365}`
}

/* Exercício 03 */

function calcularSalario() {
    const qtdHoras = document.getElementById('qtdHoras-c3').value;
    const vlrHoras = document.getElementById('vlrHoras-c3').value;

    document.getElementById('resultado').innerHTML = `Salário igual a R$ ${qtdHoras * vlrHoras}`
}

/* Exercício 04 */

function mesPorNumero() {
    const num = parseInt(document.getElementById('mes-c4').value);

    switch(num) {
        case 1: 
            document.getElementById('resultado').innerHTML = 'Janeiro'
            break
        case 2: 
            document.getElementById('resultado').innerHTML = 'Fevereiro'
            break
        case 3: 
            document.getElementById('resultado').innerHTML = 'Março'
            break;
        case 4: 
            document.getElementById('resultado').innerHTML = 'Abril'
            break
        case 5: 
            document.getElementById('resultado').innerHTML = 'Maio'
            break
        case 6: 
            document.getElementById('resultado').innerHTML = 'Junho'
            break
        case 7: 
            document.getElementById('resultado').innerHTML = 'Julho'
            break
        case 8: 
            document.getElementById('resultado').innerHTML = 'Agosto'
            break
        case 9: 
            document.getElementById('resultado').innerHTML = 'Setembro'
            break
        case 10: 
            document.getElementById('resultado').innerHTML = 'Outubro'
            break
        case 11: 
            document.getElementById('resultado').innerHTML = 'Novembro'
            break
        case 12: 
            document.getElementById('resultado').innerHTML = 'Dezembro'
            break
        default: 
            document.getElementById('resultado').innerHTML = 'Mês inválido!'
            break
    }
}

/* Exercício 05 */

function trueOrFalse() {
    const num1 = parseInt(document.getElementById('PrimeiroNum-c5').value);
    const num2 = parseInt(document.getElementById('SegundoNum-c5').value);

    if(typeof num1 !== typeof num2) {
        document.getElementById('resultado').innerHTML = false;
    } else {
        document.getElementById('resultado').innerHTML = `${num1 >= num2}`;
    }
}

/* Exercício 06 */

function inverso() {
    const valor = document.getElementById('valor-c6').value
    if(valor == 'true' || valor == 'false') {
        switch(valor) {
            case 'true':
                document.getElementById('resultado').innerHTML = false
                break
            case 'false':
                document.getElementById('resultado').innerHTML = true
                break
        }
    } else {
        const valorN = parseFloat(valor)
        typeof valorN === 'number' && !isNaN(valorN) ? 
        document.getElementById('resultado').innerHTML = `${-valorN}` : 
        document.getElementById('resultado').innerHTML = `Valor Boolean ou Number esperado!`
    }  
}

/* Exercício 07 */

function estaEntre() {
    const num = parseFloat(document.getElementById('num-c7').value);
    const min = parseFloat(document.getElementById('min-c7').value);
    const max = parseFloat(document.getElementById('max-c7').value);
    const inclusivo = document.getElementById('inclusivo-c7').value;

    inclusivo == 'false' ? document.getElementById('resultado').innerHTML = `${num > min && num < max}` : 
    document.getElementById('resultado').innerHTML = `${num >= min && num <= max}`
}

/* Exercício 08 */

function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1-c8').value);
    const num2 = parseFloat(document.getElementById('num2-c8').value);

    if(Math.sign(num1) == -1 || Math.sign(num2) == -1) {
        document.getElementById('resultado').innerHTML = 'Não são aceito números negativos!'
    } else if( num1 == 0 || num2 == 0) {
        document.getElementById('resultado').innerHTML = 0
    } else {
        let resultado = 0
        for(let i = 0; i < num1; i++) {
            resultado += num2;
        }
        document.getElementById('resultado').innerHTML = `${resultado}`
    }
}

/* Exercício 09 */

function repetir() {
    const param = document.getElementById('param-c9').value;
    const num = parseInt(document.getElementById('num-c9').value);
    result = []
    for(let i = 0; i < num; i++) {
        result.push(param)
    }
    document.getElementById('resultado').innerHTML = `${result}`
}

/* Exercício 10 */

function repetirPlus() {
    const num = parseInt(document.getElementById('num-c10').value);
    result = ''
    for(let i = 0; i < num; i++) {
        result += '+'
    }
    document.getElementById('resultado').innerHTML = `${result}`
}

/* Exercício 11 */

function firstAndLast() {
    let array = document.getElementById('array-c11').value;
    result = array.split(',')
    document.getElementById('resultado').innerHTML = 
    `Primeiro valor: ${result.shift()} Último valor: ${result.pop()}`
}

/* Exercício 12 */

function removeProperty() {
    const obj = document.getElementById('obj-c12').value;
    let prop = document.getElementById('prt-c12').value;
    prop = prop.replace(/"/g,""); //regex para retirar aspas ""

    const objeto = JSON.parse(obj);
    let objCopia = Object.assign({}, objeto);
    delete objCopia[prop]

    objCopia = JSON.stringify(objCopia)

    document.getElementById('resultado').innerHTML = `Objeto: ${objCopia} : ${Object.is(objCopia)}`
}

/* Exercício 13 */

function filtrarNum() {
    let array = document.getElementById('array-c13').value;
    result = array.split(',')
    finalResult = []

    for(let i = 0; i < result.length; i++) {
        if(typeof parseFloat(result[i]) == 'number' && !isNaN(result[i])) {
            finalResult.push(result[i]);
        }
    }

    document.getElementById('resultado').innerHTML = `Number no array: ${finalResult}`
}

/* Exercício 14 */

function objToArray() {
    const obj = JSON.parse(document.getElementById('obj-c14').value);
    let result = []
    for(let key in obj ) {
        result.push([key, obj[key]])
    }
    result = JSON.stringify(result)

    document.getElementById('resultado').innerHTML = `${result}`
}

/* Exercício 15 */

function parIndicePar() {
    let array = document.getElementById('array-c15').value;
    result = array.split(',')
    finalResult = []

    for(let i = 0; i < result.length; i++) {
        if(typeof parseFloat(result[i]) == 'number' && !isNaN(result[i])) {
           if(i != 0 && i % 2 == 0 && result[i] % 2 == 0) {
            finalResult.push(result[i]);
           }
        }
    }

    document.getElementById('resultado').innerHTML = `Números pares de índice par: ${finalResult}`
}

/* Exercício 16 */

function bissexto() {
    const ano = parseInt(document.getElementById('ano-c16').value);

    (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0) ? 
    document.getElementById('resultado').innerHTML = true : 
    document.getElementById('resultado').innerHTML = false;
}

/* Exercício 17 */

function somarArray() {
    let array = document.getElementById('array-c17').value;
    result = array.split(',')
    finalResult = 0

    for(let i = 0; i < result.length; i++) {
        if(typeof parseFloat(result[i]) == 'number' && !isNaN(result[i])) {
            finalResult += parseFloat(result[i]);
        }
    }

    document.getElementById('resultado').innerHTML = `Total: ${finalResult}`
}

/* Exercício 18 */

function somarTotalProd() {
    const obj = JSON.parse(document.getElementById('array-c18').value);
    let soma = 0;

    for(let p of obj) {
        soma += p.preco;
    }

    document.getElementById('resultado').innerHTML = `${soma}`
}

/* Exercício 19 */

function calcularMediaSimples() {
    let array = document.getElementById('array-c19').value;
    result = array.split(',')
    let soma = 0;

    for(let i = 0; i < result.length; i++) {
        if(typeof parseFloat(result[i]) == 'number' && !isNaN(result[i])) {
           soma += parseFloat(result[i]);
        }
    }

    let media = soma/result.length;

    document.getElementById('resultado').innerHTML = `Média simples: ${media}`
}

/* Exercício 20 */

function calcularArea() {
    const b = parseFloat(document.getElementById('base-c20').value);
    const h = parseFloat(document.getElementById('altura-c20').value);

    const area = (b * h) / 2;

    document.getElementById('resultado').innerHTML = `Área = ${area.toFixed(2)}`
}

/* Exercício 21 */

function menorNum() {
    let array = document.getElementById('array-c21').value;
    result = array.split(',')
    finalResult = []

    for(let i = 0; i < result.length; i++) {
        if(typeof parseFloat(result[i]) == 'number' && !isNaN(result[i])) {
            finalResult.push(parseFloat(result[i]));
        }
    }

    const menor = Math.min(...finalResult);

    //Outra solução
    
    /*Array.min = function(array) {
        return Math.min.apply(Math, array);
    }

    const menor = Array.min(finalResult);*/

    document.getElementById('resultado').innerHTML = `Menor número do Array é: ${menor}`
}

/* Exercício 22 */

function fourLeafClover() {
    const num = parseInt(document.getElementById('num-c22').value);
    const min = 1
    const max = 10
    const numSorteado = Math.floor(Math.random() * (max - min + 1) + min)

    num == numSorteado ? document.getElementById('resultado').innerHTML = `Parabéns! O número ${numSorteado} foi o sorteado!` : 
    document.getElementById('resultado').innerHTML = `Que pena! O número ${numSorteado} foi o sorteado!`
}

/* Exercício 23 */

function contarPalavras() {
    const str = document.getElementById('str-c23').value;
    const total = str.split(' ').length

    document.getElementById('resultado').innerHTML = `Total de palavras = ${total}`
}

/* Exercício 24 */

function contarCaracter() {
    let crt = document.getElementById('crt-c24').value;
    crt = crt.replace(/"/g,""); //regex para retirar aspas ""
    const str = document.getElementById('str-c24').value.split('');
    
    let cont = 0

    for(let i in str) {
        crt === str[i] ? cont++ : cont
    }

    document.getElementById('resultado').innerHTML = `Total de vezes que o caracter aparece é = ${cont}`
}

/* Exercício 25 */

function buscaPalavra() {
    let plvr = document.getElementById('plvr-c25').value;
    plvr = plvr.replace(/"/g,""); //regex para retirar aspas ""
    let array = JSON.parse(document.getElementById('array-c25').value);
    resultado = []

    for(let palavra of array) {
        if(palavra.includes(plvr)) {
            resultado.push(palavra)
        }
    }
    resultado = JSON.stringify(resultado)

    document.getElementById('resultado').innerHTML = `${resultado}`
}

/* Exercício 26 */

function removerVogais() {
    let plvr = document.getElementById('plvr-c26').value;
    plvr = plvr.replace(/"/g,""); //regex para retirar aspas ""

    palavra = plvr.replace(/[aeiou]/ig, '') //regex para ignorar aeiou

    document.getElementById('resultado').innerHTML = `${palavra}`
}

/* Exercício 27 */

function inverterObj() {
    const obj = JSON.parse(document.getElementById('obj-c27').value);
    let result = []
    for(let key in obj ) {
        result.push(obj[key], key)
    }

    result = JSON.stringify(result)

    document.getElementById('resultado').innerHTML = `${result}`
}

/* Exercício 28 */

function filtrarNumPorDigito() {
    const array = document.getElementById('array-c28').value;
    separaNum = array.split(',')
    const dgt = document.getElementById('dgt-c28').value;

    result = []
    for(let i = 0; i < separaNum.length; i++) {
        if(typeof parseFloat(separaNum[i]) == 'number' && !isNaN(separaNum[i])) {
            result.push(parseFloat(separaNum[i]));
        }
    }

    resultado = []
    for(numero of result){
        qtdDigitos = String(numero).length;
        if(qtdDigitos == dgt) {
            resultado.push(numero)
        }
        
    }
    
    document.getElementById('resultado').innerHTML = `${resultado}`
}

/* Exercício 29 */

function segundoMaior() {
    const array = document.getElementById('array-c29').value;
    separaNum = array.split(',')

    result = []
    for(let i = 0; i < separaNum.length; i++) {
        if(typeof parseFloat(separaNum[i]) == 'number' && !isNaN(separaNum[i])) {
            result.push(parseFloat(separaNum[i]));
        }
    }

    segMaior = result.sort((a, b) => a > b ? 1 : -1)[1]

    document.getElementById('resultado').innerHTML = `${segMaior}`
}

/* Exercício 30 */

function maiorMedia() {
    let obj = JSON.parse(document.getElementById('obj-c30').value);

    const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
    const media = array => soma(array) / array.length;

    function melhor(estudantes) {
        const estudantesComMedias = Object.entries(estudantes).map( estudante => {
            const chave = 0,
                  valor = 1

            return { nome: estudante[chave], media: media(estudante[valor])}
        })
        const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
        const melhorEstudante = estudantesOrdenados[0]

        return melhorEstudante
    }
    
    resultado = JSON.stringify(melhor(obj))

    document.getElementById('resultado').innerHTML = `${resultado}`
}

/* Desafio Bônus */

function palindromo() {
    const palavra = document.getElementById('palin-cb').value;

    let plvr = palavra.split('').reverse().join('')

    palavra == plvr ? document.getElementById('resultado').innerHTML = 'É Palíndromo' : 
                      document.getElementById('resultado').innerHTML = 'Não é Palíndromo'
}