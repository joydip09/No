// Function to move the "No" button to a random position
        const noButton = document.getElementById("no-btn");
        noButton.addEventListener("mouseover", function() {
            const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        });

        // Function to show the "I knew it" message when "Yes" is clicked
        const yesButton = document.getElementById("yes-btn");
        yesButton.addEventListener("click", function() {
            alert("I knew it!");
        });