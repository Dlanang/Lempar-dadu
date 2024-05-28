// Function to show game container and hide welcome container
function startGame(event) {
  event.preventDefault();
  var playerName = document.getElementById("playerName").value;
  if (playerName.trim() === "") {
    alert("Mohon masukkan nama pemain!");
    return;
  }
  document.getElementById("welcomeContainer").style.display = "none";
  document.getElementById("gameContainer").style.display = "block";
  document.getElementById("welcomeMessage").textContent = "Selamat datang, " + playerName + "! Cobalah peruntunganmu.";

  // Test if image URLs are accessible
  testImageURLs();
}

// Function to roll the dice
function rollDice() {
  // Generate random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // Play dice roll sound
  var diceSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
  diceSound.play();

  // Apply roll animation class
  document.getElementById("diceImg").classList.add("roll");

  // Remove roll animation class after 1 second
  setTimeout(function() {
    document.getElementById("diceImg").classList.remove("roll");
  }, 1000);

  // Display the result after animation
  setTimeout(function() {
    document.getElementById("diceImg").src = diceImages[randomNumber - 1];
    document.getElementById("resultText").textContent = "Hasil: " + randomNumber;
  }, 1000);
}

// Function to test if image URLs are accessible
function testImageURLs() {
  for (var i = 0; i < diceImages.length; i++) {
    var img = new Image();
    img.onload = function() {
      console.log("Image loaded successfully:", this.src);
    };
    img.onerror = function() {
      console.error("Failed to load image:", this.src);
    };
    img.src = diceImages[i];
  }
}

// Array of dice image URLs
var diceImages = [
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice1.png", // Dice 1
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice2.png", // Dice 2
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice3.png", // Dice 3
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice4.png", // Dice 4
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice5.png", // Dice 5
  "https://www.diceaddict.com/wp-content/uploads/2021/05/Dice6.png"  // Dice 6
];

// Add event listener to player form
document.getElementById("playerForm").addEventListener("submit", startGame);

// Add event listener to roll button
document.getElementById("rollButton").addEventListener("click", rollDice);

