//alert('Cada respuesta correcta son 10 puntos, al final del juego vas a saber cuantos puntos sumaste. Suerte!');

var arrRes = document.getElementsByClassName('option');
var puntos = 0;
var pregunta = 0;


function respuestaCorrecta(num){
    arrRes[num-1].addEventListener('click', siguientePregunta);
    arrRes[num-1].addEventListener('click', sumaPuntos);
}

function respuestaIncorrecta(num1, num2, num3){
    arrRes[num1-1].addEventListener('click', siguientePregunta);
    arrRes[num2-1].addEventListener('click', siguientePregunta);
    arrRes[num3-1].addEventListener('click', siguientePregunta);
}


function preguntar(preg, op1, op2, op3, op4){
    document.getElementById("pregunta").innerHTML = preg;
    document.getElementById("res1").innerHTML = op1;
    document.getElementById("res2").innerHTML = op2;
    document.getElementById("res3").innerHTML = op3;
    document.getElementById("res4").innerHTML = op4;
}

function sumaPuntos(){
    puntos += 10;
}

function diceResCorrecta(num){
    alert("La respuesta correcta es la " + num);
}

function totalPuntos(){
    alert('En total sumaste ' + puntos + '.');
}

function decimePuntosYEliminaBotones(){
    for(let i=0; i<arrRes.length; i++){
        //arrRes[i].addEventListener('click', totalPuntos);
        arrRes[i].addEventListener('click', eliminaBotones);
        }
}

function eliminaBotones(){

    var caja = document.getElementById("caja");
    caja.parentNode.removeChild(caja);
}



switch(pregunta){
    case 0:
        respuestaCorrecta(3);
        respuestaIncorrecta(1,2,4);
        pregunta +=1;        
        break;        
}

function siguientePregunta(){
    switch(pregunta){
        case 1: 
            diceResCorrecta(3);
            preguntar("¿Cuál de los siguientes animales vive mas años?", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            respuestaCorrecta(2);
            respuestaIncorrecta(1,3,4);
            pregunta +=1;
            break;
        case 2:
            diceResCorrecta(2);
            preguntar("¿En qué año se produjo la batalla de San Lorenzo?", "1. 1811", "2. 1801", "3. 1815", "4. 1813");
            respuestaCorrecta(4);
            respuestaIncorrecta(1,2,3);
            pregunta +=1;
            break;
        case 3:
            diceResCorrecta(4);
            preguntar("¿Cuál es la capital de China?", "1. Shanghai ", "2. Hong Kong ", "3. Pekin", "4. Macao");
            respuestaCorrecta(3);
            respuestaIncorrecta(1,2,4);
            pregunta +=1;
            break;
        case 4:
            diceResCorrecta(3);
            preguntar("¿En qué año se estreno la primer pelicula de la saga de Harry Potter?", "1. 2000", "2. 2001", "3. 2003", "4. 2005");
            respuestaCorrecta(2);
            respuestaIncorrecta(1,3,4);
            pregunta +=1;
        break;
        case 5:
            diceResCorrecta(2);
            preguntar("¿Quién es el actual presidente de Mexico ", "1. Andrez Obrador", "2. Enrique Peña Nieto", "3. Vicente Quesada", "4. Ivan Duque Marquez");
            respuestaCorrecta(1);
            respuestaIncorrecta(2,3,4);
            pregunta +=1;
        break;
        case 6:
            diceResCorrecta(1);
            preguntar("¿Cual de estos paises NO pertenece al continente asiatico?", "1. Indonesia", "2. Arabia Saudita", "3. Turquia", "4. Marruecos");
            respuestaCorrecta(4);
            respuestaIncorrecta(1,2,3);
            pregunta +=1;
        break;
        case 7:
            diceResCorrecta(4);
            preguntar("¿Cuál de los siguientes paises es mas grande en superficie?", "1. Iran", "2. Colombia", "3. India", "4. Egipto");
            respuestaCorrecta(3);
            respuestaIncorrecta(1,2,4);
            pregunta +=1;
        break;
        case 8:
            diceResCorrecta(3);
            preguntar("¿Cuál es el gentilicio de Marruecos?", "1. Marroco", "2. Marroqui", "3. Marroquense", "4. Marruese");
            respuestaCorrecta(2);
            respuestaIncorrecta(1,3,4);
            pregunta +=1;
        break;
        case 9:
            diceResCorrecta(2);
            preguntar("¿En qué año comenzo la Segunda Guerra Mundial?", "1. 1935", "2. 1939", "3. 1936", "4. 1951");
            respuestaCorrecta(3);
            respuestaIncorrecta(1,2,4);
            decimePuntosYEliminaBotones();
        break;
    }
}



