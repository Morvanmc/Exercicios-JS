/* Mostrar e esconder a lista de exercícios */
function dropDown() {
    const list = document.querySelector('.list-itens');
    list.classList.toggle('hidden');
}

/*Esconde o conteúdo da div apresentação na Section*/
function hiddenApresentacao() {
    const home = document.querySelector('.apresentacao');
    home.classList.add('hidden');
}

/* Esconde o Código */
function hiddenCode() {
    const code = document.querySelector('.code-box');
    code.classList.toggle('hidden');
}
