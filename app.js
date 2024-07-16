function alteraTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

alteraTexto('h1', 'Jogo do número secreto');
alteraTexto('p', 'Escolha um número entre 1 e 10');

function geraNumeroAleatorio(range) {
    let numeroAleatorio = parseInt(Math.random() * range + 1);
    return numeroAleatorio;
}
