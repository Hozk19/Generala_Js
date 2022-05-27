export { ingresoDatos, opciones, numerosAleatorios, game }
function ingresoDatos() {
    let entrada = Number.parseInt(prompt('Eliga las siguientes opciones\n1)Jugar\n2)Reglas\n3)Salir'))
    return entrada
}
function opciones(choice) {
    switch (choice) {
        case 1:
            break;
        case 2:
            console.log('En el juego conocido como “Generala” se utilizan cinco dados que se lanzan simultáneamente. De acuerdo a los valores obtenidos en esos dados se tienen las combinaciones ganadoras que se muestran a continuación. Escribir un algoritmo para preparar la tabla de frecuencias de estas combinaciones, a partir de N lanzami{funciones} fromienen el mismo valor y los otros dos son iguales a otro valor (El jugador consigue 3 puntos)\nEscalera: Cuando los valores de los cinco dados forman una secuencia ascendente (El jugador consigue 2 puntos)\n')
            console.log('Con los puntos que un jugador consigue en el turno, reduce el hp del otro jugador, cuando uno de los jugadores queda con 0 hp el juego termina. Los jugadores pueden elegir con cuantos puntos hp empezar')
            break;
        case 3:
            console.log('Gracias por Jugar !!')
            break;
    }
}
function numerosAleatorios(minimo, maximo) {
    return Math.floor((Math.random() * (maximo - minimo + 1)) + minimo)
}
function ordenamiento(unArray) {
    let n = unArray.length
    let salto = Number.parseInt(n / 2)
    while (salto >= 1) {
        let cambio = false
        let i = 0
        while (i + salto <= n - 1) {
            if (unArray[i] > unArray[i + salto]) {
                unArray[i] = unArray[i] + unArray[i + salto]
                unArray[i + salto] = unArray[i] - unArray[i + salto]
                unArray[i] = unArray[i] - unArray[i + salto]
                cambio = true
            }
            i += 1
            if (cambio == false) {
                salto = Number.parseInt(salto / 2)
            }
        }
    }
    return unArray
}
function game() {
    let dados = [numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6)]
    let generala = 0
    let poker = 0
    let foul = 0
    let escalera = 0
    dados = ordenamiento(dados)
    if (dados[0] == dados[1] && dados[0] && dados[2] && dados[0] == dados[3] && dados[0] == dados[4]) {
        generala += 1
    }
    else if (dados[0] != dados[1] && dados[1] == dados[2] && dados[1] == dados[3] && dados[1] == dados[4] || dados[4] != dados[3] && dados[3] == dados[2] && dados[3] == dados[1] && dados[3] == dados[0]) {
        poker += 1
    }
    else if (dados[0] == dados[1] && dados[2] == dados[3] && dados[2] == dados[4] && dados[0] != dados[4] || dados[4] == dados[3] && dados[2] == dados[1] && dados[2] == dados[0] && dados[0] != dados[4]) {
        foul += 1
    }
    else if (dados[4] == dados[3] + 1 && dados[3] == dados[2] + 1 && dados[1] == dados[0] + 1) {
        escalera += 1
    }
    if (generala != 0) {
        return 5
    }
    else if (poker != 0) {
        return 4
    }
    else if (foul != 0) {
        return 3
    }
    else if (escalera != 0) {
        return 2
    }
    else {
        return 0
    }
}
function mainGame() {
    const jugadorUno = prompt('Ingrese el nombre del jugador 1')
    const jugadorDos = prompt('Ingrese el nombre del jugador 2')
    let hp = Number.parseInt(prompt('Cuantos puntos hp le gustaria tener?'))

}