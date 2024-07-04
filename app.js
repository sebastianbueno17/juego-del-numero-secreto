let numerosecreto=0 ;
let intentos =0;
let listadenumerossorteados = [];
let numeromaximo = 10;


function asignartextoelemento (elemento , texto ){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento () {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
   

    if (numerodeusuario === numerosecreto ){
        asignartextoelemento ('p',`asertaste el numero en ${intentos} ${(intentos === 1) ? 'vez ': 'veces'}`);

      document.getElementById('reiniciar'). removeAttribute ('disabled');
    } else {
        //el usuario no aserto .
        if (numerodeusuario > numerosecreto) {
            asignartextoelemento ('p','el numero secreto es menor ');
        } else {
            asignartextoelemento ('p','el numero secreto es mayor ');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja (){
   document.querySelector('#valorusuario') . value = '';
  
}
 
function generarnumerosecreto() {
    let numerogenerado = Math.floor( Math.random()*numeromaximo)+1;
    // si el numero genrado esta incluido en la lista 

    console.log(numerogenerado);
    console.log (listadenumerossorteados);

    // si ya sorteamos todos los numeros posibles 
    if (listadenumerossorteados.length == numeromaximo){
     asignartextoelemento("p","ya se sortearon todos los números posibles  ");
    } else {
        if (listadenumerossorteados.includes (numerogenerado)) {
            return generarnumerosecreto();
        } else {
            listadenumerossorteados . push(numerogenerado);
         return numerogenerado;
        } 
    }


}

function condicionesiniciales (){
    asignartextoelemento('h1', 'juego del numero secreto');
    asignartextoelemento('p', `indica un numero del 1 al ${numeromaximo}`);  
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}
function reiniciarjuego() {
    // limpiar la caja 
    limpiarcaja();
    // indicar mensaje de intervalo de numeros
    //generar nuevo numero 
    //inicializar el numero de itentos 
    condicionesiniciales();
    //inhabiliar el boton de nuevo juego
    
    document.querySelector ('#reiniciar') . setAttribute ('disabled','true');
}

condicionesiniciales ();
