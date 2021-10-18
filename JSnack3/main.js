const sum = document.getElementById('sum');

let addicted = 0;

for (let i = 0; i < 10; i++) {
  const askNum = parseInt(prompt('scegli un numero!'));

  addicted += askNum
}

sum.innerHTML = addicted

/* let absoluteZero = 0
let counter = 0
let finalCounter = 10
while (counter < finalCounter) {
  let askNum = parseInt(prompt('scegli un numero'))

  console.log(askNum);

  absoluteZero += askNum

  sum.innerHTML = askNum

  ++counter;

} */