// Game Variables

let gameStarted = false;

let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;

let results = [];


// Start Game Function

function startGame()
{
    let name = document.getElementById("playerName").value;

    if (name === "")
    {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    let today = new Date();

    document.getElementById("startTime").innerHTML =
        "Game Started: " + today;
}


// Computer Random Choice

function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];

    let randomIndex =
        Math.floor(Math.random() * 3);

    return choices[randomIndex];
}


// Play One Round

function playRound(playerChoice)
{
    if (gameStarted === false)
    {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    // Change Images

    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    let resultText = "";

    // Draw

    if (playerChoice === computerChoice)
    {
        resultText = "Draw";

        draws++;

        document.getElementById("result").style.backgroundColor = "grey";
        document.getElementById("result").style.color = "white";
    }

    // Win

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    )
    {
        resultText = "Win";

        wins++;

        document.getElementById("result").style.backgroundColor = "green";
        document.getElementById("result").style.color = "white";
    }

    // Lose

    else
    {
        resultText = "Lose";

        losses++;

        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("result").style.color = "white";
    }

    // Display Result

    document.getElementById("result").innerHTML =
        resultText;

    // Update Scores

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store Result

    results.push(resultText);

    round++;

    // Add History Row

    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + resultText + "</td>" +
        "</tr>";
}


// Show Summary

function showSummary()
{
    let totalRounds = results.length;

    if (totalRounds === 0)
    {
        alert("No rounds played yet.");
        return;
    }

    let winPercentage =
        Math.round((wins / totalRounds) * 100);

    alert(
        "You played " +
        totalRounds +
        " rounds and won " +
        winPercentage +
        "%."
    );
}


// Reset Game

function resetGame()
{
    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;

    results = [];

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.backgroundColor = "transparent";

    document.getElementById("welcome").innerHTML = "";

    document.getElementById("playerName").value = "";

    document.getElementById("startTime").innerHTML = "";

    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";

    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    gameStarted = false;
}