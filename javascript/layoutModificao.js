// Variáveis à serem usadas //

var tela = document.querySelector("canvas");
var sectionBottoes = document.querySelector(".bottoes");
var buttonAdicionar = document.querySelector("#adicionar")
var buttonIniciar = document.querySelector('#iniciar');
var buttonNovoJogo = document.querySelector("#novoJogo");
var buttonDesistir = document.querySelector("#desistir");
var buttonVoltar = document.querySelector("#voltar");
var buttonInserirNoArray = document.querySelector("#inserirArray")
var form = document.querySelector('#coletarPalavra');
var InputNovaPalavra = document.querySelector("#inputComPalavra");
var telaResultado = document.querySelector('#telaResultado');
var paragrafoResultado = document.querySelector('#paragrafoResultado');

var palavras = ["DESAFIO", "DESENHO", "SONHO","BARCO","ELEVADOR","SUSPIRO"];

// Fim//


// tornar form e canvas invisiveis antes da inicialização //


tela.classList.add("invisivel");
form.classList.add("invisivel");

// Fim//




// Métodos utilizados para transicionar telas e outras funções //



function comecarJogo() {

    sectionBottoes.style.margin = "0";

    buttonAdicionar.classList.add('invisivel');
    buttonIniciar.classList.add('invisivel');

    buttonVoltar.classList.remove("invisivel");
    tela.classList.remove('invisivel');
    buttonNovoJogo.classList.remove('invisivel');
    buttonDesistir.classList.remove('invisivel');

    ligarDesligar = 1;

    resetarObjetos();

    DesenhaUnderlineDasLetrasCertas();

    document.querySelector("main").style.height = "auto"

}









function desistir() {

    buttonDesistir.classList.add('invisivel');

    sectionBottoes.style.margin = "500px 0 0";

    tela.classList.add("invisivel");

    mostraTelaDerrota();
}








function adicionarPalavra() {

    sectionBottoes.style.margin = "300px 0 0";

    tela.classList.add("invisivel");
    buttonAdicionar.classList.add('invisivel');
    buttonIniciar.classList.add('invisivel');
    buttonNovoJogo.classList.add('invisivel');
    buttonDesistir.classList.add('invisivel');

    form.classList.remove('invisivel');
    buttonInserirNoArray.classList.remove('invisivel');
    buttonVoltar.classList.remove("invisivel");
}








function voltar() {

    tela.classList.add("invisivel");
    buttonInserirNoArray.classList.add('invisivel');
    form.classList.add('invisivel');
    buttonNovoJogo.classList.add('invisivel');
    buttonDesistir.classList.add('invisivel');
    buttonInserirNoArray.classList.add('invisivel');
    buttonVoltar.classList.add("invisivel");
    telaResultado.classList.add('invisivel');

    sectionBottoes.style.margin = "400px 0 0";

    buttonAdicionar.classList.remove('invisivel');
    buttonIniciar.classList.remove('invisivel');

    document.querySelector("main").style.height = "72vh"


    ligarDesligar = 0;
}









function adicionarPalavrasForca() {



    if(verificaPalavra())
    {

        palavras.push(InputNovaPalavra.value.toUpperCase());

        alert(InputNovaPalavra.value.toUpperCase() + " foi adicionada a lista de palavras!");

        InputNovaPalavra.value = "";

    }
    else {
        alert("caracteres insuficientes ou inválidos!");
    }
}

function mostraTelaDerrota(){
    telaResultado.classList.remove('invisivel');
    paragrafoResultado.style.color = "red";
    paragrafoResultado.innerHTML = "Você Perdeu!!<br><br>Tente Novamente!!";
}

function mostraTelaCorreto(){
    telaResultado.classList.remove('invisivel');
    paragrafoResultado.style.color = "green";
    paragrafoResultado.innerHTML = "Você Ganhouu!!<br><br>Parabbééénnss!!";
}

// Fim //