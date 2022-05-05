import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["heart", "diamond", "spade", "club"];

  let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // Always returns a random number between min and max (both included)
  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let card = document.querySelector(".card");
  let cardValue = document.querySelector("h1");

  // classList accesses css classes and reflects it on DOM via add
  cardValue.innerHTML = value[getRndInt(0, value.length)];

  card.classList.add(suits[getRndInt(0, suits.length)]);

  document.querySelector(".btn").textContent = "Deal";

  document.querySelector(".btn").addEventListener("click", function() {
    for (let i = 0; i < suits.length; i++) {
      if (card.classList.contains(suits[i])) {
        card.classList.remove(suits[i]);

        card.classList.add(suits[getRndInt(0, suits.length)]);
      }
    }

    cardValue.innerHTML = value[getRndInt(0, value.length)];
  });
};