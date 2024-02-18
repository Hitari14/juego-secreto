let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === NumeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if (numeroUsuario > NumeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
         } else {
            asignarTextoElemento('p', 'el numero secreto es mayor');

            }
        }
        intentos++;
        limpiarCaja();

    return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
         asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else {

    //si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
}   
function condicionesIniciales() {
asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
NumeroSecreto = generarNumeroSecreto();
intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

      
}

condicionesIniciales();
