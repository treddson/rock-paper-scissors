
let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#computer-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function win(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user)
    userScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${user}${smallUserWord} beats ${computer}${smallCompWord}. You win! 🔥`
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>  userChoice_div.classList.remove('green-glow'), 300);
}



function lose(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    computerScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computer}${smallCompWord} beats ${user}${smallUserWord}. You lose! 💩`
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() =>  document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer) {
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(() =>  document.getElementById(user).classList.remove('grey-glow'), 200);
    return result_p.innerHTML = "It's a draw! 😴"
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            win(userChoice, computerChoice)
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice)
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}
main();
