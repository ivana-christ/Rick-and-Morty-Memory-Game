const grid = document.querySelector(".grid");

const nickname = document.querySelector(".nickname");
const username = localStorage.getItem("username");
nickname.textContent = username;

const timer = document.querySelector(".timer");

function alertWin() {
  const div = document.createElement("div");
  const text = document.createElement("p");
  text.innerHTML = `Congratulations, ${username}!! <br> Your time was ${timer.innerHTML} s`;

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";

  div.classList.add("alertWin");
  restartButton.classList.add("restartButton");

  restartButton.addEventListener("click", () => {
    location.reload();
  })

  div.appendChild(text);
  div.appendChild(restartButton);
  document.body.appendChild(div);
}

const characters = [
  "beth",
  "jerry",
  "jessica",
  "meeseeks",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "scroopy",
  "summer",
]

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = "";
let secondCard = "";

function checkEndGame() {

  const disabledCards = document.querySelectorAll(".disabledCards")

  if (disabledCards.length === (characters.length)*2) {
    clearInterval(this.loop);

    setTimeout(() => {
      alertWin();
    }, 400)
  }

}

function verifyCards() {
  const firstCardCharacter = firstCard.getAttribute("data-character")
  const secondCardCharacter = secondCard.getAttribute("data-character")

  if (firstCardCharacter === secondCardCharacter) {

    firstCard.firstChild.classList.add("disabledCards");
    secondCard.firstChild.classList.add("disabledCards");

    firstCard = "";
    secondCard = "";

    checkEndGame();

  } else {
    setTimeout(() => {
      
    firstCard.classList.remove("revealCard");
    secondCard.classList.remove("revealCard");

    firstCard = "";
    secondCard = "";

    }, 500)
  }
}


function revealCard ({ target }) {
  if (target.parentNode.className.includes("revealCard")) {
    return;
  } 
  
  if (firstCard === '') {
    target.parentNode.classList.add("revealCard")
    firstCard = target.parentNode

  } else if (secondCard === '') {
    target.parentNode.classList.add("revealCard")
    secondCard = target.parentNode

    verifyCards();
  }

}


function createCard(characters) {
  const card = createElement("div", "card");
  const cardFront = createElement("div", "face cardFront");
  const cardBack = createElement("div", "face cardBack");

  cardFront.style.backgroundImage = `url("../assets/${characters}.png")`

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  card.addEventListener("click", revealCard);

  card.setAttribute("data-character", characters)

  return card;
}

function loadGame() {
  const duplicateCharacters = [ ...characters, ...characters ]
  const RandomCharacters = duplicateCharacters.sort(() => Math.random() - 0.5)
  RandomCharacters.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  })
}


const startTimer = () => {

  this.loop = setInterval(() => {
    const zeroTimer = Number(timer.innerHTML)
    timer.innerHTML = zeroTimer + 1
  }, 1000)

}

console.log(this)

startTimer();
loadGame();
