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
            preguntar("¿Cual de los siguientes animales vive mas años?", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[1].setAttribute('name', 'correcto');
            arrRes[2].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
            break;
        case 2:
            preguntar("Cuantos aloskdsk", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[3].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(4);
            break;
        case 3:
            preguntar("aaaa", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
            break;
        case 4:
            preguntar("gggggggg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 5:
            preguntar("llllllll", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 6:
            preguntar("eeeeeee", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 7:
            preguntar("kkkkkkkk", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 8:
            preguntar("qAAAAqqqqqq", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
        break;
        case 9:
            preguntar("aaaaaaaaaaaaaaa", "1. Vacaaaaaaaaaa", "2. Eleaaaaaaafante", "3. Gato", "4. Paloma");
            arrRes[2].setAttribute('name', 'correcto');
            arrRes[1].setAttribute('name', 'incorrecto');
            siResMal();
            siResBien();
            resCorrecta(3);
            decimePuntosYEliminaBotones();
        break;
    }
}



