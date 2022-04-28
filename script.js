const vermelho = document.querySelector('#red')
const amarelo = document.querySelector('#yellow')
const verde = document.querySelector('#green')

let contador = 1

setInterval(() => {

    if (contador <= 1) {
        vermelho.classList.add('red')
    } else if (contador === 5) {
        vermelho.classList.remove('red')
        amarelo.classList.add('yellow')
    } else if (contador === 10) {
        amarelo.classList.remove('yellow')
        verde.classList.add('green')
    } else if (contador === 15) {
        verde.classList.remove('green')
        contador = 0
    }

    contador++
}, 1000)