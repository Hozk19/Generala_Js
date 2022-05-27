export { menu, opciones }
function menu() {
    let entrada = Number.parseInt(prompt('Eliga las siguientes opciones\n1)Jugar\n2)Reglas\n3)Salir'))
    return entrada
}
function opciones(choice) {
    switch (choice) {
        case 1:
            mainGame()
            return 1;
        case 2:
            reglas()
            return 1;
        case 3:
            console.log('Gracias por Jugar !!')
            return 0;
    }
}
function reglas() {
    console.log('En el juego conocido como “Generala” se utilizan cinco dados que se lanzan simultáneamente. De acuerdo a los valores obtenidos en esos dados se tienen las combinaciones ganadoras que se muestran a continuación. Escribir un algoritmo para preparar la tabla de frecuencias de estas combinaciones, a partir de N lanzami{funciones} fromienen el mismo valor y los otros dos son iguales a otro valor (El jugador consigue 3 puntos)\nEscalera: Cuando los valores de los cinco dados forman una secuencia ascendente (El jugador consigue 2 puntos)\nSi no se cumplen ninguno de los casos anteriores, el puntaje sera la suma de los dos menores dados\n')
    console.log('Con los puntos que un jugador consigue en el turno, reduce el hp del otro jugador, cuando uno de los jugadores queda con 0 hp el juego termina. Los jugadores pueden elegir con cuantos puntos hp empezar')
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
function puntajes() {
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
        return 50
    }
    else if (poker != 0) {
        return 40
    }
    else if (foul != 0) {
        return 30
    }
    else if (escalera != 0) {
        return 20
    }
    else {
        return dados[0] + dados[1]
    }
}
function mainGame() {
    const jugadorUno = prompt('Ingrese el nombre del jugador 1')
    const jugadorDos = prompt('Ingrese el nombre del jugador 2')
    let hp = Number.parseInt(prompt('Cuantos puntos hp le gustaria tener?'))
    let turno = 1
    let hp1 = hp
    let hp2 = hp
    let ganador
    while (hp1 > 0 && hp2 > 0) {
        console.log('Turno ' + turno)
        let puntaje1 = puntajes()
        let puntaje2 = puntajes()
        console.log('El jugador 1 le ocasiona ' + puntaje1 + ' puntos de daño al jugador 2')
        console.log('El jugador 2 le ocasiona ' + puntaje2 + ' puntos de daño al jugador 1')
        hp1 -= puntaje2
        hp2 -= puntaje1
        if (hp1 < 0 && hp2 < 0) {
            if (puntaje1 > puntaje2) {
                ganador = jugadorUno
            }
            else {
                ganador = jugadorDos
            }
        }
        else if (hp1 > 0 && hp2 < 0) {
            ganador = jugadorUno
            hp2 = 0
        }
        else if (hp2 > 0 && hp1 < 0) {
            ganador = jugadorDos
            hp1 = 0
        }
        console.log(jugadorUno)
        console.log("#".repeat(hp1))
        console.log(jugadorDos)
        console.log("#".repeat(hp2))
        let condicion = prompt('Presione enter para continuar')
        if (condicion == '') {
            continue;
        }
        console.clear()
        turno += 1

    }
    console.log('El/La ganador/a es ' + ganador)
}