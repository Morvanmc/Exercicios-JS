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