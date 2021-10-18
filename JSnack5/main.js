let odd = []
let oddNumber = document.querySelector('.oddNumber')

for (let i = 0; i < 6; i++) {
  const element = parseInt(prompt('scegli un numero!'));

  if (element % 2 == 1) {
    odd.push(element)
    console.log(odd);
  }
}

oddNumber.innerHTML = odd
