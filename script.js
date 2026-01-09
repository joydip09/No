let revealTimeout = null;

const confettiCanvas = document.getElementById("confetti-canvas");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

const myConfetti = confetti.create(confettiCanvas, {
  resize: false,
  useWorker: true
});


const noButton = document.getElementById("no-btn");

function moveNoButton() {
    const speed = Math.random() * 0.5 + 0.5; // between 0.5 and 1

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    noButton.style.left = Math.random() * maxX * speed + "px";
    noButton.style.top = Math.random() * maxY * speed + "px";
}

noButton.addEventListener("mouseover", () => {
  setTimeout(moveNoButton, 80);
});

noButton.addEventListener("touchstart", (e) => {
  e.preventDefault();   // prevents accidental click
  moveNoButton();
});

// noButton.addEventListener("click", function () {
//     overlay.classList.add("show");
//     text.textContent = "COME ON, DON'T LIE! 😈";
// });

const yesButton = document.getElementById("yes-btn");
const overlay = document.getElementById("prank-overlay");
const text = document.getElementById("prank-text");

yesButton.addEventListener("click", function () {

  overlay.classList.add("show");
  text.textContent = "YES? 🤨";
  navigator.vibrate?.(100);
  text.classList.remove("reveal");

  revealTimeout = setTimeout(() => {
    myConfetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 }
    });

    text.textContent = "I KNEW IT 😈";
    navigator.vibrate?.(1000);
    text.classList.add("reveal");
  }, 2000);

  
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show");

  // Reset text & animation state
  text.textContent = "";
  text.classList.remove("reveal");

  // Cancel any pending reveal
  if (revealTimeout) {
    clearTimeout(revealTimeout);
    revealTimeout = null;
  }
});

