const input = document.getElementById("peso");
const boton = document.getElementById("calcular");
const error = document.getElementById("error");
const elementosResultado = document.querySelectorAll('.resultado')

function eventoDelBoton() {
    let peso = input.value.trim();
    let resultado;

    if (peso.length <= 0) {
        error.style.display = 'block';
        elementosResultado.forEach(function(elemento) {
            elemento.style.display = 'none';
        });
        return;
    }

    if (peso <= 30) {
        resultado = holliday(peso);
    } else {
        resultado = SC(peso);
    }


    error.style.display = 'none';
    elementosResultado.forEach(function(elemento) {
        elemento.style.display = 'block';
    });

    elementosResultado[0].innerHTML = "Volumen: " + resultado + " cc"; 
    elementosResultado[1].innerHTML = "Mantenimiento: "+ Math.ceil(resultado/24) + " cc/hr"; 
    elementosResultado[2].innerHTML = "m+m/2: " + Math.ceil(resultado/24*1.5) + " cc/hr"; 
}



function holliday (peso) {
    if (peso <= 10){ 
        resultado = peso * 100 
        return (resultado) 
    }
    else if ( peso <= 20){
        resultado = ((peso - 10) * 50) + 1000
        return(resultado)                                 
    } 
    else if (peso > 20){
        resultado = ((peso - 20) * 20) + 1500
        return (resultado)
    }
}


function SC(peso) {
    resultado = ((peso * 4) + 7) / (+peso + 90)
    return (resultado * 1500)
}

boton.addEventListener("click", eventoDelBoton)


