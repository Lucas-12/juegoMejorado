const bien = document.getElementsByName('correcto');
const mal = document.getElementsByName('incorrecto');
var arrRes = document.getElementsByClassName('option');
var puntos = 0;
var pregunta = 0;

siResMal();
siResBien();



function siResMal(){
    for(let i=0; i<mal.length; i++){
    mal[i].addEventListener('click', respondioMal);
    mal[i].addEventListener('click', siguientePregunta);

    }
}

function siResBien(){
    for(let i=0; i<bien.length; i++){
        bien[i].addEventListener('click', respondioBien);
        bien[i].addEventListener('click', siguientePregunta);

    }
}

 function respondioBien(){
    puntos += 10;
    pregunta +=1;
}

function respondioMal(){
    pregunta +=1;
}


function preguntar(preg, op1, op2, op3, op4){

    document.getElementById("pregunta").innerHTML = preg;
    document.getElementById("res1").innerHTML = op1;
    document.getElementById("res2").innerHTML = op2;
    document.getElementById("res3").innerHTML = op3;
    document.getElementById("res4").innerHTML = op4;

}

function resCorrecta(num){
    alert("La respuesta correcta es la " + num);
}


function totalPuntos(){
    alert('En total sumaste ' + puntos + '.');
}

function decimePuntosYEliminaBotones(){
    for(let i=0; i<mal.length; i++){
        mal[i].addEventListener('click', totalPuntos);
        mal[i].addEventListener('click', eliminaBotones);
        }
    for(let i=0; i<mal.length; i++){
        bien[i].addEventListener('click', totalPuntos);
        bien[i].addEventListener('click', eliminaBotones);
    }
}



function eliminaBotones(){

    var parrafo = document.getElementById("caja");
    parrafo.parentNode.removeChild(parrafo);



}



function siguientePregunta(){
    switch(pregunta){
        case 1: 
            resCorrecta(3);
            preguntar("¿Cuál de los siguientes animales vive mas años?", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[1].setAttribute('name', 'correcto');
            arrRes[2].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            break;
        case 2:
            resCorrecta(2);
            preguntar("¿En qué año se produjo la batalla de San Lorenzo?", "1. 1811", "2. 1801", "3. 1815", "4. 1813");
            arrRes[3].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            break;
        case 4:
            resCorrecta(4);
            preguntar("¿Cuál es la capital de China?", "1. Shanghai ", "2. Hong Kong ", "3. Pekin", "4. Macao");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[3].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            break;
        case 6:
            resCorrecta(3);
            preguntar("¿En qué año se estreno la primer pelicula de la saga de Harry Potter?", "1. 2000", "2. 2001", "3. 2003", "4. 20005");
            arrRes[1].setAttribute('name', 'correcto');
            arrRes[2].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
        break;
        case 8:
            preguntar("¿Quién es el actual presidente de Mexico ", "1. Andrez Obrador", "2. Enrique Peña Nieto", "3. Vicente Quesada", "4. Ivan Duque Marquez");
            arrRes[0].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(2);
        break;
        case 10:
            preguntar("¿Cual de estos paises NO pertenece al continente asiatico?", "1. Indonesia", "2. Arabia Saudita", "3. Turquia", "4. Marruecos");
            arrRes[3].setAttribute('name', 'correcto');
            arrRes[0].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(1);
        break;
        case 12:
            preguntar("¿Cuál de los siguientes paises es mas grande", "1. Iran", "2. Colombia", "3. India", "4. Egipto");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[3].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(4);
        break;
        case 14:
            preguntar("¿Cuál es el gentilicio de Marruecos?", "1. Marroco", "2. Marroqui", "3. Marroquense", "4. Marrueses");
            arrRes[1].setAttribute('name', 'correcto');
            arrRes[2].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 16:
            preguntar("¿En qué año comenzo la Segunda Guerra Mundial?", "1. 1935", "2. 1936", "3. 1939", "4. 1951");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(2);
            decimePuntosYEliminaBotones();
        break;
    }
}



