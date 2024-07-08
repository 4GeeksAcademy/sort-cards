/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var deck = [];
window.onload = function() {
  //generateRandomCard();
  //drawCards();
};
function generateRandomCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let cardNumber = Math.floor(Math.random() * 13);
  let suitNumber = Math.floor(Math.random() * 4);

  return {
    suit: suits[suitNumber],
    number: numbers[cardNumber],
    cardValue: numbers.indexOf(numbers[cardNumber])
  };
}
function drawCards(numCards, container, deckCards = null) {
  //let numCards =
  let cardContainer = document.getElementById(container);
  if (deckCards == null) cardContainer.innerHTML = "";
  let arr = [];
  let cardContainerElement = document.createElement("div");
  cardContainerElement.classList.add("pb-3");

  for (let i = 0; i < numCards; i++) {
    let card = { suit: null, number: null, cardValue: null };
    if (deckCards != null) {
      card["suit"] = deckCards[i].suit;
      card["number"] = deckCards[i].number;
      card["cardValue"] = deckCards[i].cardValue;
    } else {
      card = generateRandomCard();
    }
    let cardElement = document.createElement("div");
    cardElement.classList.add("card", "mx-1", "h-100");
    cardElement.innerHTML = `
  <div class="topSuits h-50 ${
    card.suit === "♦" || card.suit === "♥" ? "red" : ""
  }">${card.suit}</div>
  <div class="numbers text-center mt-2 h-50">${card.number}</div>
  <div class="bottomSuits text-end mt-3 ${
    card.suit === "♦" || card.suit === "♥" ? "red" : ""
  }">${card.suit}</div>
`;

    cardContainerElement.appendChild(cardElement);

    console.log(card);
    arr.push(card);
  }
  cardContainer.appendChild(cardContainerElement);
  return arr;
}
let drawBtn = document.getElementById("drawCards");
drawBtn.addEventListener("click", () => {
  deck = drawCards(
    document.getElementById("numCards").valueAsNumber,
    "cardsContainer"
  );
  let cardContainer = document.getElementById("logContainer");
  cardContainer.innerHTML = "";
  console.log(deck);
});

window.sortCards = function sortCards(arr) {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min].cardValue > arr[i].cardValue) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
    console.log(arr);
    drawCards(arr.length, "logContainer", arr);
  }
  return arr;
};

let sortBtn = document.getElementById("sortCards");
sortBtn.addEventListener("click", () => {
  sortCards(deck);
});
