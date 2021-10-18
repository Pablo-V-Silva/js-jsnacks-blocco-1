let show = document.getElementById('esponents')

/* for (let i = 0; i < 1000; i++) {
  const element = Math.pow(2, [i]);

  show.innerHTML = element
} */

let counter = 0
while (Math.pow(2, counter) <= 1000) {
  let final = Math.pow(2, counter);

  counter++;

  console.log(final);
  show.innerHTML += `${final} `
}

