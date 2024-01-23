let numSecreto = 0;
let intentos = 0;
let listaNumSort = [];
let numMax = 10;

function verifcarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numUsuario === numSecreto) {
        asignarTexto('p', `Acertaste! en ${intentos} ${intentos===1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else{
        //el usuario no acierta
        if (numUsuario>numSecreto) {
            asignarTexto('p', 'El numero secreto es menor!');
        } else{
            asignarTexto('p', 'El numero secreto es mayor!');
        }
        intentos++;    
        limpiarNum();
    } 
    return;
}

function limpiarNum() {
    document.querySelector('#valorUsuario').value = '';
}

/* let elementoHTML = document.querySelector('p');
elementoHTML.innerHTML = 'Indica un numero del 1 al 10';
*/

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generaNum() {
    let numGenerado = Math.floor(Math.random()*numMax)+1;

    console.log(numGenerado);
    console.log(listaNumSort);

    if (listaNumSort.length == numMax) {
        asignarTexto('p',`Ya se sortearon todos los ${numMax} numeros posibles`);
        } else {

            if (listaNumSort.includes(numGenerado)) {
                return generaNum();
            } else {
                listaNumSort.push(numGenerado);
                return numGenerado;
            }
    }
}

function condIniciales() {
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numMax}`);   
    numSecreto = generaNum();
    intentos = 1; 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarNum();
    //Indicar intervalo de numeros
    condIniciales();
    //Deshabilitar boton de nuevo juego
}

condIniciales();