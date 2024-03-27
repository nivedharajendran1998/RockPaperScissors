const computer = document.querySelector(".computer-img");
const player = document.querySelector(".player-img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const reset = document.querySelector("#reset-btn");
const rules_btn = document.querySelectorAll(".rules-button");
const girlAnimation = document.querySelector(".girl");
const charAni = document.querySelectorAll(".all-char");
const home_btn = document.querySelector(".home-btn");
const exit_btn = document.querySelector("#exit-btn");
const flip = document.querySelector(".card");
const images = document.querySelector(".images");
const play_btn = document.querySelectorAll(".play-button");
const winPopup = document.querySelector(".winPopup");
const losePopup = document.querySelector(".losePopup");
const blur = document.querySelector(".blur");
const popup_play_btn = document.querySelector(".popup-play-btn");
const popup_home_btn = document.querySelector(".popup-home-btn");
const popup_lose_play_btn = document.querySelector(".popup-lose-play-btn");
const popup_lose_home_btn = document.querySelector(".popup-lose-home-btn");

home_btn.addEventListener("click", function (event) {
  // Prevent the default behavior of the anchor link
  event.preventDefault();

  // Get the href attribute of the anchor element
  var href = home_btn.getAttribute("href");

  // If href is present and not just "#", navigate to that link and reload the page
  if (href && href !== "#") {
    window.location.href = href; // Navigate to the specified link
    location.reload(); // Reload the page
  }
});

rules_btn.forEach((button) => {
  button.addEventListener("click", animateRules);
});

function animateRules() {
  flip.classList.add("flip");
  flip.addEventListener("animationend", onAnimationEnd);
  girlAnimation.classList.add("girl-ani");
  girlAnimation.addEventListener("animationend", onAnimationEnd);
  for (let i = 0; i <= charAni.length - 1; i++) {
    charAni[i].classList.add("all-char-ani", "char-" + (i + 1));
    charAni[i].addEventListener("animationend", onAnimationEnd);
  }

  // charAni.forEach((char) => {
  //   char.classList.add("all-char-ani");
  //   char.addEventListener("animationend", onAnimationEnd);
  // });
}

function onAnimationEnd() {
  flip.classList.remove("flip");
  flip.removeEventListener("animationend", onAnimationEnd);

  // Remove the "girl-ani" class once the animation has ended
  girlAnimation.classList.remove("girl-ani");
  // Remove the event listener to prevent memory leaks
  girlAnimation.removeEventListener("animationend", onAnimationEnd);

  for (let i = 0; i <= charAni.length - 1; i++) {
    charAni[i].classList.remove("all-char-ani", "char-" + (i + 1));
    charAni[i].removeEventListener("animationend", onAnimationEnd);
  }

  // charAni.forEach((char) => {
  //   char.classList.remove("all-char-ani");
  //   char.removeEventListener("animationend", onAnimationEnd);
  // });
}

function fallImg() {
  var imagesToAnimate = document.querySelectorAll(".images-game");

  // Add the .images-fall class to each element
  imagesToAnimate.forEach(function (image) {
    // Add the images-fall class to trigger the animation
    image.classList.add("images-fall");
    image.addEventListener("animationend", aniEnd);
  });
}

function aniEnd() {
  var imagesToAnimate = document.querySelectorAll(".images-game");
  imagesToAnimate.forEach(function (image) {
    // Add the images-fall class to trigger the animation
    image.classList.remove("images-fall");
    image.removeEventListener("animationend", aniEnd);
  });
}

function resetPoints() {
  computerPoints.innerHTML = "0";
  playerPoints.innerHTML = "0";
  computerImage.src = "./images/rockComputer.png";
  playerImage.src = "./images/rockPlayer.png";
}

play_btn.forEach((btn) => {
  btn.addEventListener("click", shakeAni);
});

function shakeAni() {
  const computerImage = new Image();
  const playerImage = new Image();

  // Define the onload event handlers for the images
  computerImage.onload = () => {
    // Once the computer image is loaded, set its source and add shake animation class
    computer.src = computerImage.src;
    computer.classList.add("shake-computer");
  };

  playerImage.onload = () => {
    // Once the player image is loaded, set its source and add shake animation class
    player.src = playerImage.src;
    player.classList.add("shake-player");
  };

  player.addEventListener("animationend", endAni);
  computer.addEventListener("animationend", endAni);

  // Set the source of the images to the default rock images
  computerImage.src = "./images/rockComputer.png";
  playerImage.src = "./images/rockPlayer.png";

  function endAni() {
    player.classList.remove("shake-player");
    computer.classList.remove("shake-computer");
  }
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    // Create new Image objects for computer and player
    const computerImage = new Image();
    const playerImage = new Image();

    // Define the onload event handlers for the images
    computerImage.onload = () => {
      // Once the computer image is loaded, set its source and add shake animation class
      computer.src = computerImage.src;
      computer.classList.add("shake-computer");
    };

    playerImage.onload = () => {
      // Once the player image is loaded, set its source and add shake animation class
      player.src = playerImage.src;
      player.classList.add("shake-player");
    };

    // Set the source of the images to the default rock images
    computerImage.src = "./images/rockComputer.png";
    playerImage.src = "./images/rockPlayer.png";

    let cPoints = parseInt(computerPoints.innerHTML);
    let pPoints = parseInt(playerPoints.innerHTML);

    function resetPoints() {
      computerPoints.innerHTML = "0";
      playerPoints.innerHTML = "0";
      computerImage.src = "./images/rockComputer.png";
      playerImage.src = "./images/rockPlayer.png";
    }

    exit_btn.addEventListener("click", function (event) {
      resetPoints();
      // Prevent the default behavior of the anchor link
      event.preventDefault();

      // Get the href attribute of the anchor element
      var href = exit_btn.getAttribute("href");

      // If href is present and not just "#", navigate to that link and reload the page
      if (href && href !== "#") {
        window.location.href = href; // Navigate to the specified link
        location.reload(); // Reload the page
      }
    });

    reset.addEventListener("click", resetPoints);

    function popWinfunc() {
      blur.classList.remove("blur-bg");
      winPopup.style.display = "none";
      resetPoints();
    }

    function popLosefunc() {
      blur.classList.remove("blur-bg");
      losePopup.style.display = "none";
      resetPoints();
    }

    popup_play_btn.addEventListener("click", popWinfunc);
    popup_home_btn.addEventListener("click", popWinfunc);

    popup_lose_play_btn.addEventListener("click", popLosefunc);
    popup_lose_home_btn.addEventListener("click", popLosefunc);

    setTimeout(() => {
      // computer.addEventListener("animationend", () => {
      computer.classList.remove("shake-computer");
      // });

      // player.addEventListener("animationend", () => {
      player.classList.remove("shake-player");
      // });

      player.src = "./images/" + option.innerHTML + "Player.png";
      const choice = ["ROCK", "PAPER", "SCISSORS"];

      let index = Math.floor(Math.random() * 3);
      let computerChoice = choice[index];
      computer.src = "./images/" + computerChoice + "Computer.png";

      if (computerPoints.innerHTML != 3 && playerPoints.innerHTML != 3) {
        if (option.innerHTML == "ROCK") {
          if (computerChoice == "PAPER") {
            computerPoints.innerHTML = cPoints + 1;
          } else if (computerChoice == "SCISSORS") {
            playerPoints.innerHTML = pPoints + 1;
          }
        } else if (option.innerHTML == "PAPER") {
          if (computerChoice == "SCISSORS") {
            computerPoints.innerHTML = cPoints + 1;
          } else if (computerChoice == "ROCK") {
            playerPoints.innerHTML = pPoints + 1;
          }
        } else {
          if (computerChoice == "ROCK") {
            computerPoints.innerHTML = cPoints + 1;
          } else if (computerChoice == "PAPER") {
            playerPoints.innerHTML = pPoints + 1;
          }
        }
      }
      if (playerPoints.innerHTML == 3) {
        setTimeout(() => {
          blur.classList.add("blur-bg");
          winPopup.style.display = "grid";
        }, 1200);
      }
      if (computerPoints.innerHTML == 3) {
        setTimeout(() => {
          blur.classList.add("blur-bg");
          losePopup.style.display = "grid";
        }, 1200);
      }
    }, 850);
  });
});
