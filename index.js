import { opciones, validacionDeOpciones1 } from './funciones.js';

let condicionFinal = 1
//Menu
console.log('Bienvenidos al Juego Generala JS')
while (condicionFinal) {
    let retorno = opciones(validacionDeOpciones1())
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