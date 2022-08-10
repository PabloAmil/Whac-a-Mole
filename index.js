const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('.start')

let result = 0;
let hitPosition 
let currentTime = 30;

start.addEventListener('click', moveMole)
start.addEventListener('click', timeOut)



function ranmdomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)] // esto es un selector random de un indice, va del 0 al 8 (recordar que el 9 es un techo inalcanzable) selecciona el square con el indice tal dentro del grid
    // cada cuadrado es un indice del objeto squares, con esto el metodo math.random busca cualquiera entre el 1 y el 9 y lo presenta en consola. el math.floor redondea para abajo para que no salgan decimales
    randomSquare.classList.add("mole") // a cualquiera que lo tenga, le agrega la clase 'mole'
    console.log(randomSquare.id)
    hitPosition = randomSquare.id // randomSquare es el objeto square en en html seleccionado aleatoriamente, el que tiene id, que va del 1 al 9
    
    
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => { // le agrega a cada cuadrado (a cada indice) el evento 
        if (square.id == hitPosition) { // si el id del cuadrado al ejecutar el evento es igual al id de randomSquare, que es el que va a tener la clase 'mole' (que es igual a hitposition), suma el punto
            console.log('este es el square ID ' + square.id)
            result++
            score.textContent = result;
            hitPosition = null // luego resetea la hitposition... 
        }
    })
})

function moveMole() {
    
    let timerId = null;
    timerId = setInterval(ranmdomSquare, 500) // con esto se automatiza el intervalo con el que se le asigna la clase a cada cuadro
    start.removeEventListener('click', moveMole)
}

function countDown () {
    start.removeEventListener('click',  timeOut)
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId) // clearInterval detiene el tiempo
        alert('Game Over your score is ' + result)
        location.reload()
    }
}
function timeOut() { 
    return countDownTimerId = setInterval(countDown, 1000)
}

