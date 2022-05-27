import { ingresoDatos, opciones } from './funciones.js';

//Menu
console.log('Bienvenidos al Juego Generala JS')
let opcion = ingresoDatos()
while (opcion < 1 || opcion > 3) {
    if (opcion < 1 || opcion > 3) {
        console.clear()
        console.log('Datos ingresados incorrectos, vuelva a ingresar nuevamente!')
        opcion = ingresoDatos()
    }
}

