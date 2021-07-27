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