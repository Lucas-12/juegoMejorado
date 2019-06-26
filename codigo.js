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
    alert('Respondiste BIEN! Tenes ' + puntos + ' puntos.');
}

function respondioMal(){
    pregunta +=1;
    alert('Respondiste MAL! Tenes ' + puntos + ' puntos.');
    
}


function preguntar(preg, op1, op2, op3, op4, num){

    document.getElementById("pregunta").innerHTML = preg;
    document.getElementById("res1").innerHTML = op1;
    document.getElementById("res2").innerHTML = op2;
    document.getElementById("res3").innerHTML = op3;
    document.getElementById("res4").innerHTML = op4;

    respuestaCorrecta(num-1);
}

function respuestaCorrecta(num){
    
    for(let i=0; i<arrRes.length; i++){
        arrRes[i].setAttribute("name", "incorrecto");
    }   
    arrRes[num].setAttribute("name", "correcto");

}



function siguientePregunta(){
    switch(pregunta){
        case 1: 
            preguntar("¿Cual de los siguientes animales vive mas años?", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
            break;
        case 2:
            preguntar("Cuantos aloskdsk", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
            break;
        case 3:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
            break;
        case 4:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
        break;
        case 5:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
        break;
        case 6:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
        break;
        case 7:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
        break;
        case 8:
            preguntar("dsfgdfgfdgfdg", "1. Vaca", "2. Elefante", "3. Gato", "4. Paloma", 1);
        break;
        case 9:
            preguntar("aaaaaaaaaaaaaaa", "1. Vacaaaaaaaaaa", "2. Eleaaaaaaafante", "3. Gato", "4. Paloma", 1);
        break;
        case 10:
            termino();// falta definir
        break;
    }
}



