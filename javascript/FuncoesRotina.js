
var rex = /[a-z]+/;

function sortearNumero() {

    var NumeroAletorio = Math.floor(Math.random() * palavras.length);

    return palavras[NumeroAletorio];


}

function palavraEstaCorreta(tecla){
    let verificadorPalavra = 0;
    for(indice = 0; indice < palavra.length; indice++){
        for(index = 0; index < letrasJaDigitadas.length; index++){
            if(palavra[indice]==letrasJaDigitadas[index])
            {
                verificadorPalavra++;
            }
        }
    }

    if(verificadorPalavra == palavra.length)
    {   
        buttonDesistir.classList.add('invisivel');
        mostraTelaCorreto();
    }

}

function verificarLetrasJaDigitadas(tecla){
    let verificador = false;
    for(indice=0; indice < letrasJaDigitadas.length; indice++)
    {
        if(tecla == letrasJaDigitadas[indice])
        {
            verificador = true;
            break;
        }
    }
    if(verificador){
        return verificador;
    }
    else{
        letrasJaDigitadas.push(tecla);
        return verificador;
    }
}

function verificarLetraCerOuErra(letra) {
    
    for(indice=0; indice < palavra.length; indice++)
    {
        if(palavra[indice]==letra){
            return true;
        }
    }
    return false;

}



function PreencheLetra(event) {

    var tecla = String.fromCharCode(event.keyCode);
    if (verificaLetra(tecla) && !verificarLetrasJaDigitadas(tecla)) {

        if (verificaQuantidadeErros() && verificarLetraCerOuErra(tecla)) {
           
            desenhaLetrasCertas(tecla);
            palavraEstaCorreta(tecla);
        }
        else {
            desenhaLetrasErradas(tecla);
            desenharForca();
        }
        
    }
}





function verificaLetra(letra) {
    letra = letra.toLowerCase();
    novo = letra.match(rex);
    if (novo) {
        return true;
    }
    else {
        return false;
    }
}




function verificaPalavra() {

    let Palavra = InputNovaPalavra.value.toLowerCase();
    if ((InputNovaPalavra.value != "") && (InputNovaPalavra.value.length > 2)) {
        for (indice = 0; indice < Palavra.length; indice++) {
            let novo = Palavra[indice].match(rex);
            if ((novo != Palavra[indice])) {
                return false;

            }
        }
        return true;
    }
    else {
        return false;
    }

}


function resetarObjetos() {

    pincel.clearRect(0, 0, tela.width, tela.height);
    operadorForca = 1;
    countLetrasErradas = 1;
    letrasJaDigitadas = [];
    telaResultado.classList.add('invisivel');
}

function verificaQuantidadeErros() {
    if (operadorForca < 8) {
        return true;
    }
    return false;
}

document.onkeydown = PreencheLetra;