var pincel = tela.getContext('2d');
var operadorForca = 1;
var palavra = "";
var localizacaoXLetras = 25;
var countLetrasErradas = 1;
var letrasJaDigitadas = [];

document.querySelector('canvas').style.background = "url(imgs/fundoTela.png) 150%";

function DesenhaUnderlineDasLetrasCertas() {

    palavra = sortearNumero();
    var tamPalavra = palavra.length;
    var localizacaoX = 50;

    for (count = 0; count < tamPalavra; count++) {


        pincel.fillStyle = 'black';
        pincel.fillRect(localizacaoX, 125, 25, 2);

        localizacaoX += 30;

        console.log(palavra);
    }

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.moveTo(15, 132);
    pincel.lineTo(11, 135)
    pincel.lineTo(30, 149)
    pincel.lineTo(34, 147)
    pincel.fill();
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.moveTo(25, 132);
    pincel.lineTo(30, 135)
    pincel.lineTo(15, 149)
    pincel.lineTo(11, 147)
    pincel.fill();

}

function desenhaLetrasCertas(tecla){

    for (indice = 0; indice < palavra.length; indice++) {
        if (tecla == palavra[indice]) {
            pincel.font = '20px arial bold';
            pincel.fillStyle = "black";
            pincel.fillText(palavra[indice], localizacaoXLetras + 30 * (indice + 1), 124);
            pincel.strokeStyle = "white";
            pincel.strokeText(palavra[indice], localizacaoXLetras + 30 * (indice + 1), 124);
        }
    }
}

function desenhaLetrasErradas(tecla){

            if(verificaQuantidadeErros()){
            pincel.font = '20px arial bold';
            pincel.fillStyle = "red";
            pincel.fillText(tecla, localizacaoXLetras + 30 * countLetrasErradas , 148);
            countLetrasErradas++;
            }
}


function desenharForca() {


    if (verificaQuantidadeErros()) {

        switch (operadorForca) {
            case 1:

                /*DESENHA A FORCA*/

                pincel.fillStyle = "#75300B";
                pincel.fillRect(4, 127, 15, -120);

                pincel.fillStyle = '#75300B';
                pincel.beginPath();
                pincel.moveTo(19, 40);
                pincel.lineTo(19, 30)
                pincel.lineTo(80, 7)
                pincel.lineTo(100, 7)
                pincel.fill();

                pincel.fillStyle = "#75300B";
                pincel.fillRect(4, 10, 100, 8);

                pincel.fillStyle = "black";
                pincel.fillRect(90, 18, 3, 10);

                operadorForca++;
                break;
            case 2:
                /*DESENHA A CABEÇA */
                pincel.fillStyle = 'black';
                pincel.beginPath();
                pincel.arc(91, 30, 8, 0, 2 * Math.PI);
                pincel.fill();
                operadorForca++;
                break;
            case 3:
                /*DESENHA DESENHA CORPO*/
                pincel.fillStyle = "black";
                pincel.fillRect(87, 38, 8, 22);
                operadorForca++;
                break;
            case 4:
                /*DESENHA DESENHA BRAÇO ESQUERDO*/
                pincel.fillStyle = 'black';
                pincel.beginPath();
                pincel.moveTo(87, 38);
                pincel.lineTo(87, 44)
                pincel.lineTo(80, 58)
                pincel.lineTo(77, 54)
                pincel.fill();
                operadorForca++;
                break;
            case 5:
                /*DESENHA DESENHA BRAÇO DIREITO */
                pincel.fillStyle = 'black';
                pincel.beginPath();
                pincel.moveTo(95, 38);
                pincel.lineTo(95, 44)
                pincel.lineTo(102, 58)
                pincel.lineTo(105, 54)
                pincel.fill();
                operadorForca++;
                break;
            case 6:
                /*DESENHA DESENHA PERNA ESQUERDA */
                pincel.fillStyle = 'black';
                pincel.beginPath();
                pincel.moveTo(87, 55);
                pincel.lineTo(89, 60)
                pincel.lineTo(80, 80)
                pincel.lineTo(77, 77)
                pincel.fill();
                operadorForca++;
                break;
            case 7:
                /*DESENHA DESENHA PERNA DIREITA */
                pincel.fillStyle = 'black';
                pincel.beginPath();
                pincel.moveTo(95, 55);
                pincel.lineTo(92, 60)
                pincel.lineTo(102, 80)
                pincel.lineTo(105, 77)
                pincel.fill();
                desistir();
                operadorForca++;
                break;
        }
    }


}




