import { menu, opciones } from './funciones.js';
function validacionConValidacion() {
    let opcion = menu()
    while (opcion < 1 || opcion > 3) {
        if (opcion < 1 || opcion > 3) {
            console.clear()
            console.log('Datos ingresados incorrectos, vuelva a ingresar nuevamente!')
            opcion = menu()
        }
    }
    return opcion
}
let condicionFinal = 1
//Menu
console.log('Bienvenidos al Juego Generala JS')
while (condicionFinal) {
    let retorno = opciones(validacionConValidacion())
    if (retorno == 1) {
        condicionFinal = (prompt('Desea volver al Menu Principal? Ingrese un valor para continuar o solamente presione Enter para salir'))
        console.clear()
        if (condicionFinal == undefined) {
            console.log('Gracias por Jugar !!')
        }
    }
    else {
        break;
    }
}