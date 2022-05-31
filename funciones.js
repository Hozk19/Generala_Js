export { opciones, validacionDeOpciones1 }
function menu() {
    let entrada = Number.parseInt(prompt('Eliga las siguientes opciones\n1)Jugar\n2)Reglas\n3)Salir'))
    return entrada
}
function validacionDeOpciones1() {
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
function validacionDeOpciones2() {
    let opcion = modoDeJuego()
    while (opcion < 1 || opcion > 3) {
        if (opcion < 1 || opcion > 3) {
            console.clear()
            console.log('Datos ingresados incorrectos, vuelva a ingresar nuevamente!')
            opcion = modoDeJuego()
        }
    }
    return opcion
}
function opciones(choice) {
    switch (choice) {
        case 1:
            opciones2(validacionDeOpciones2())
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
    console.log('En el juego conocido como “Generala” se utilizan cinco dados que se lanzan simultáneamente. De acuerdo a los valores obtenidos en esos dados se tienen las combinaciones ganadoras que se muestran a continuación.\nGenerala: cuando los cinco dados tienen igual valor (50 puntos)\nPoker: cuando cuatro dados tienen igual valor y el quinto es diferente (40 puntos)\nFoul: cuando tres dados tienen el mismo valor y los otros dos son iguales a otro valor (30 puntos) \nEscalera: Cuando los valores de los cinco dados forman una secuencia ascendente (20 puntos)\nSi no se cumplen ninguno de los casos anteriores, el puntaje sera la suma de los dos menores dados\n')
    console.log('Con los puntos que un jugador consigue en el turno, reduce el hp del otro jugador, cuando uno de los jugadores queda con 0 hp el juego termina. Los jugadores pueden elegir con cuantos puntos hp empezar')
    console.log('En el modo facil, los puntos se otorgan mediante la suma de los dados\nEn el modo Normal, los puntajes se otorgan mediante la suma de los dos menores dados y combos\nEn el modo Dificil, los puntajes se otorgan solamente mediante combos')
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
function puntajes(Modo) {
    let dados = [numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6), numerosAleatorios(1, 6)]
    let generala = 0
    let poker = 0
    let foul = 0
    let escalera = 0
    dados = ordenamiento(dados)
    if (Modo != 'Facil') {
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
    }
    if (Modo == 'Normal') {
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
    else if (Modo == 'Facil') {
        return dados[0] + dados[1] + dados[2] + dados[3] + dados[4]
    }
    else {
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
            return 0
        }
    }
}
function mainGame(Modo) {
    const jugadorUno = prompt('Ingrese el nombre del jugador 1')
    const jugadorDos = prompt('Ingrese el nombre del jugador 2')
    let hp = Number.parseInt(prompt('Cuantos puntos hp le gustaria tener?'))
    let turno = 1
    let hp1 = hp
    let hp2 = hp
    let ganador
    while (hp1 > 0 && hp2 > 0) {
        console.log('Turno ' + turno)
        let puntaje1 = puntajes(Modo)
        let puntaje2 = puntajes(Modo)
        console.log('El jugador 1 le ocasiona ' + puntaje1 + ' puntos de daño al jugador 2')
        console.log('El jugador 2 le ocasiona ' + puntaje2 + ' puntos de daño al jugador 1')
        hp1 -= puntaje2
        hp2 -= puntaje1
        if (hp1 < 0 && hp2 < 0) {
            if (puntaje1 > puntaje2) {
                ganador = jugadorUno
                hp1 = 0
                hp2 = 0
            }
            else {
                ganador = jugadorDos
                hp1 = 0
                hp2 = 0
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
function modoDeJuego() {
    console.log('Seleccione un modo de juego:\n')
    let modo = Number.parseInt(prompt('1) Facil\n2) Normal\n3) Dificil'))
    return modo
}
function opciones2(choice) {
    switch (choice) {
        case 1:
            mainGame('Facil')
            break;
        case 2:
            mainGame('Normal')
            break;
        case 3:
            mainGame('Dificil')
            break;
    }
}