let numerosSorteados = [];

let numeroAleatorio = geraNumeroAleatorio();
let numeroTentativas = 1;

function alteraTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    alteraTexto('h1', 'Jogo do número secreto');
    alteraTexto('p', 'Escolha um número entre 1 e 10');
}

function geraNumeroAleatorio() {
    let numeroDeElementosNaLista = numerosSorteados.length;

    if (numeroDeElementosNaLista == 10) {
        numerosSorteados = [];
    }

    let numeroGerado = parseInt(Math.random() * 10 + 1);
    if (numerosSorteados.includes(numeroGerado)) {
        return geraNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroGerado);
        console.log(numerosSorteados);
        return numeroGerado;
    }
}

function verificarChute() {
    let numeroChutado = document.querySelector('input').value;
    
    if (numeroChutado == numeroAleatorio) {
        numerosSorteados.includes(numeroAleatorio);
        alteraTexto('h1', 'ACERTOU');

        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`;

        alteraTexto('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroChutado > numeroAleatorio) {
            alteraTexto('p', 'O número secreto é menor que o seu chute!')
        } else {
            alteraTexto('p', 'O número secreto é maior que o seu chute!')
        }
        numeroTentativas++;
        limparCampo();
    }
}

function limparCampo() {
    numeroChutado = document.querySelector('input');
    numeroChutado.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = geraNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
}