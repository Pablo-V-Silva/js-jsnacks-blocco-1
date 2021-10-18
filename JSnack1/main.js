const numOne = Number(prompt('Scegli un numero!'))
const numTwo = Number(prompt('Scegli un altro numero!'))
const show = document.getElementById('major')

if (numOne > numTwo) {
  show.innerHTML = numOne
} if (numTwo > numOne) {
  show.innerHTML = numTwo
} else {
  show.innerHTML = 'Ricarica la pagina e riscegli i numeri! i tuoi numeri sono uguali!'
}