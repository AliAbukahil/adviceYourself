const button = document.querySelector("button");
const header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((monkey) => monkey.json())
    .then((data) => {
      header.innerHTML = data.slip.advice;
    });
});
