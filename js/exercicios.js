/* Exercício 01 */

function cumprimentar() {
    const name = document.getElementById('name-c1').value;
    document.getElementById('resultado-c1').innerHTML = `Olá, ${name}!`;
}

/* Exercício 02 */

function anoEmDias() {
    const age = document.getElementById('age-c2').value;
    document.getElementById('resultado-c2').innerHTML = `Idade em dias = ${age * 365}`
}

/* Exercício 03 */

function calcularSalario() {
    const qtdHoras = document.getElementById('qtdHoras-c3').value;
    const vlrHoras = document.getElementById('vlrHoras-c3').value;

    document.getElementById('resultado-c3').innerHTML = `Salário igual a R$ ${qtdHoras * vlrHoras}`
}

/* Exercício 04 */

function mesPorNumero() {
    const num = parseInt(document.getElementById('mes-c4').value);

    switch(num) {
        case 1: 
            document.getElementById('resultado-c4').innerHTML = 'Janeiro'
            break
        case 2: 
            document.getElementById('resultado-c4').innerHTML = 'Fevereiro'
            break
        case 3: 
            document.getElementById('resultado-c4').innerHTML = 'Março'
            break;
        case 4: 
            document.getElementById('resultado-c4').innerHTML = 'Abril'
            break
        case 5: 
            document.getElementById('resultado-c4').innerHTML = 'Maio'
            break
        case 6: 
            document.getElementById('resultado-c4').innerHTML = 'Junho'
            break
        case 7: 
            document.getElementById('resultado-c4').innerHTML = 'Julho'
            break
        case 8: 
            document.getElementById('resultado-c4').innerHTML = 'Agosto'
            break
        case 9: 
            document.getElementById('resultado-c4').innerHTML = 'Setembro'
            break
        case 10: 
            document.getElementById('resultado-c4').innerHTML = 'Outubro'
            break
        case 11: 
            document.getElementById('resultado-c4').innerHTML = 'Novembro'
            break
        case 12: 
            document.getElementById('resultado-c4').innerHTML = 'Dezembro'
            break
        default: 
            document.getElementById('resultado-c4').innerHTML = 'Mês inválido!'
            break
    }
}

/* Exercício 05 */

function trueOrFalse() {
    const num1 = parseInt(document.getElementById('PrimeiroNum-c5').value);
    const num2 = parseInt(document.getElementById('SegundoNum-c5').value);

    if(typeof num1 !== typeof num2) {
        document.getElementById('resultado-c5').innerHTML = false;
    } else {
        document.getElementById('resultado-c5').innerHTML = `${num1 >= num2}`;
    }
}