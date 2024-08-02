let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let comp = document.querySelector(".comp");
let choose = document.querySelector(".choose");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * options.length);
    return options[ranIndex];
};

const draw = () => {
    msg.innerText = "Match Draw, play again";
};

const showWinner = (userWin, compChoice) => {
    choose.innerText = "Computer chose: " + compChoice;
    if (userWin) {
        msg.innerText = "Congrats, you win!";
        userScore += 1;
        user_score.innerText = userScore;
    } else {
        msg.innerText = "Oh no, you lose!";
        compScore += 1;
        comp_score.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock" && compChoice === "paper") {
            userWin = false;
        } else if (userChoice === "rock" && compChoice === "scissors") {
            userWin = true;
        } else if (userChoice === "scissors" && compChoice === "paper") {
            userWin = true;
        } else if (userChoice === "scissors" && compChoice === "rock") {
            userWin = false;
        } else if (userChoice === "paper" && compChoice === "rock") {
            userWin = true;
        } else if (userChoice === "paper" && compChoice === "scissors") {
            userWin = false;
        }
        showWinner(userWin, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



//  Runner.prototype.gameOver = function(){}
