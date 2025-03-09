const input = document.getElementById("time");
const bouton = document.querySelector(".btn");
const chrono = document.querySelector(".chrono");
let decompte = null;
let minutes;
let secondes;

function decomptage() {
  if (minutes === 0 && secondes === 0) {
    clearInterval(decompte);
    chrono.textContent = "C'est terminé !";
    return;
  }
  if (secondes == 0 && minutes > 0) {
    minutes--;
    secondes = 59;
  } else {
    secondes--;
  }

  let min2chiffres = minutes < 10 ? "0" + minutes : minutes;
  let sec2chiffres = secondes < 10 ? "0" + secondes : secondes;

  chrono.textContent = `${min2chiffres} : ${sec2chiffres}`;
}

function affichagechronometre() {
  minutes = parseInt(input.value);
  secondes = 0;

  if (isNaN(minutes) || minutes <= 0) {
    alert("Veuillez entrer un nombre valide !");
    return;
  }

  if (decompte !== null) {
    clearInterval(decompte);
  }

  chrono.textContent = `${minutes} : 00`;

  decompte = setInterval(decomptage, 1000);
}

bouton.addEventListener("click", affichagechronometre);
