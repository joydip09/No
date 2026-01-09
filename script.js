// (1) No button troll stays the same
const noButton = document.getElementById("no-btn");
noButton.addEventListener("mouseover", () => {

  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

noButton.addEventListener("click", function () {
    overlay.classList.add("show");
    text.textContent = "COME ON, DON'T LIE! 😈";
});

const yesButton = document.getElementById("yes-btn");
const overlay = document.getElementById("prank-overlay");
const text = document.getElementById("prank-text");

yesButton.addEventListener("click", function () {

  overlay.classList.add("show");
  text.textContent = "YES? 🤨";

  const confettiCanvas = document.getElementById("confetti-canvas");

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const myConfetti = confetti.create(confettiCanvas, {
  resize: true,
  useWorker: true
  });
  myConfetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    text.textContent = "I KNEW IT 😈";
  }, 2000);

  navigator.vibrate?.(100);
});

