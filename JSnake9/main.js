const num = document.getElementById('num')
const sum = document.getElementById('sum');
const average = document.getElementById('average');

let counter = 0;
let secondCounter = 0

const numbers = "I numeri da dichiarare sono: "
num.append(numbers);
for (let n = 0; n <= 10; n++) {
  const sum = document.getElementById('sum');
  num.innerHTML += '<br>' + '- ' + n;

  counter += n;

  secondCounter += (n) / 10;
}

sum.innerHTML = `La somma è ${counter}`;
average.innerHTML = `La media è ${secondCounter}`;