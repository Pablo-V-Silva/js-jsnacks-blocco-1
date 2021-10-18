const numOne = prompt('Scegli una parola!')
const numTwo = prompt(`Scegli un'altra parola!`)
const showMajor = document.getElementById('major')
const showMinor = document.getElementById('minor')

if (numOne.length > numTwo.length) {
  showMajor.innerHTML = numOne
  showMinor.innerHTML = numTwo
} if (numTwo.length > numOne.length) {
  showMajor.innerHTML = numTwo
  showMinor.innerHTML = numOne
} else {
  showMajor.innerHTML = `Scegli altre parole, sono lunghe uguali!`
}