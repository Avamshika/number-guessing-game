const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(answer);
let attempt = 0;
const input = document.querySelector("#guessInput");
const button = document.querySelector(".guess-btn");
const result = document.querySelector("#result");
button.addEventListener("click", function () {
    let guess = Number(input.value);
    if (isNaN(guess)) {
        result.textContent = "Please enter a valid number";
    }
    else if (guess < minNum || guess > maxNum) {
        result.textContent = `Enter a number between ${minNum} and ${maxNum}`;
    }
    else {
        attempt++;
        if (guess < answer) {
            result.textContent = "Too low! Try again.";
        }
        else if (guess > answer) {
            result.textContent = "Too high! Try again.";
        }
        else {
            result.textContent = `Congratulations! You guessed the number ${answer} in ${attempt} attempts.`;
        }
    }
});
