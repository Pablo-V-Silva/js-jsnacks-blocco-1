let num = Number(prompt('choose number'));

let show = document.getElementById('esponents')

let esponent = Math.pow(num, 3)

console.log(esponent);

show.innerHTML = esponent;