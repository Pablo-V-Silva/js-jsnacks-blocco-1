let invitati = ['chris', 'stefano', 'giulio', 'roberto', 'franco', 'mario', ' GiGi']
let rejected = false
let answer = document.getElementById('answer')

let requestName = prompt("Indica il tuo nome e scopri se puoi partecipare all'evento")

for (let i = 0; i < invitati.length; i++) {
  const element = invitati[i];

  if (requestName == invitati[i]) {
    rejected = true
  }
}

if (rejected == true) {
  const allowed = `<h1>SEI STATO INVITATO</h1>`

  answer.innerHTML = allowed
} else {
  const none = `<h1>NON SEI STATO INVITATO</h1>`

  answer.innerHTML = none
}