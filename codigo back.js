
const bien = document.getElementsByName('correcto');
const mal = document.getElementsByName('incorrecto');
var puntos = 0;


for(let i=0; i<bien.length; i++){
    bien[i].addEventListener('click', respondioBien);
}

for(let i=0; i<mal.length; i++){
    mal[i].addEventListener('click', respondioMal);
}

 
function respondioBien(){
    puntos += 10;
    alert('Respondiste BIEN! Tenes ' + puntos + ' puntos.');
}

function respondioMal(){
    alert('Respondiste MAL! Tenes ' + puntos + ' puntos.');
}


