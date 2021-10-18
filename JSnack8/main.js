let show = document.getElementById('show');

let counter = 0;

const num = prompt('digita un numero di almeno 4 cifre');

for (let i = 0; i < num.length; i++) {
  const element = parseInt(num.charAt(i));

  counter += element;

}

show.innerHTML = counter;
console.log(counter);