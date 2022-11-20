import "./style.css";

let simbols = ["&spades;", "&clubs;", "&diams;", "&hearts;"];
let letters = [
  "A",
  "J",
  "Q",
  "K",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];

let winOnload = () => {
  const aleatorioIcon = simbols[Math.floor(Math.random() * simbols.length)];
  const aleatorioNum = letters[Math.floor(Math.random() * letters.length)];

  const topIcon = document.querySelector(".top-icon");
  const botIcon = document.querySelector(".bot-icon");
  const number = document.querySelector(".number");

  topIcon.innerHTML = aleatorioIcon;
  botIcon.innerHTML = aleatorioIcon;
  number.innerHTML = aleatorioNum;

  if (aleatorioIcon === "&hearts;" || aleatorioIcon === "&diams;") {
    topIcon.style.color = "#FF0000";
    botIcon.style.color = "#FF0000";
  } else if (aleatorioIcon === "&clubs;" || aleatorioIcon === "&spades;") {
    topIcon.style.color = "#000000";
    botIcon.style.color = "#000000";
  }
};

let buttonRandom = () => {
  const button = document.querySelector(".btnGen");
  button.addEventListener("click", winOnload);
};

buttonRandom(winOnload);
window.onload = winOnload;
