const input = document.querySelector(".login-input")
const button = document.querySelector(".button-input")
const form = document.querySelector(".form-login")

input.addEventListener('input', () => {
  let inputvalue = input.value

  if (inputvalue != null && inputvalue != ''){
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.setItem("username", (input.value))
  window.location = "pages/game.html"
})

let inputvalue = input.value

const nickname = document.querySelector("nickname")
nickname.textContent = inputvalue