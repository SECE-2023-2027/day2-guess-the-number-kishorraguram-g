var number = Math.floor(Math.random() * 10) + 1;
var highscore = 0;
var currscore = 20;
var misteryNumber = document.getElementById("misteryNumber");
var result = document.getElementById("result");
var highscoreElement = document.getElementById("highscore");
var currscoreElement = document.getElementById("currscore");
var check = document.getElementById("check");
var input = document.getElementById("input");
var again = document.getElementById("again");


check.addEventListener("click", function () {
    var guess = Number(input.value);
    if (guess === number) {
        result.textContent = "Congratulations! You guessed the number!";
        misteryNumber.textContent = number;
        setTimeout(function () {
            misteryNumber.textContent = "?";
        }, 2000);
        input.value = "";
        if (currscore > highscore) {
            highscore = currscore;
        }
        input.disabled = true;
        check.disabled = true;

    } else if (guess < number) {
        result.textContent = "Too low! Try again.";
        currscore -= 1;
        if( currscore <=0) {
            currscore = 0;
            input.disabled=true;
            check.style.display="none";
            setTimeout(() => {
                body.style.backgroundColor="red";
            }, ( 2000));
            result.textContent = "Game Over! You have no score left.";
            

        }
    } else if (guess > number) {
        result.textContent = "Too high! Try again."; 
        currscore -= 1;
        if( currscore <= 0) {
            currscore = 0;
            input.disabled=true;
            check.style.display="none";
            result.textContent = "Game Over! You have no score left.";
        }
    } 
    highscoreElement.textContent = "Highscore: " + highscore;
    currscoreElement.textContent = "Current Score: " + currscore;
});
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
function resetGame() {
    number = Math.floor(Math.random() * 10) + 1;
    currscore = 20;
    input.disabled = false;
    check.style.display = "block";
    misteryNumber.textContent = "?";
    result.textContent = "Start Guessing!";
    highscoreElement.textContent = "Highscore: " + highscore;
    currscoreElement.textContent = "Current Score: " + currscore;
    input.value = "";
    input.disabled = false;
    check.disabled = false;
}
again.addEventListener("click", resetGame);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);
