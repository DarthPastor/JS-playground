'use strict';

// Selecting element
const player_0_element = document.querySelector('.player--0');
const player_1_element = document.querySelector('.player--1');
const score_0_element = document.querySelector('#score--0');
const score_1_element = document.getElementById('score--1');
const current_0_element = document.getElementById('current--0');
const current_1_element = document.getElementById('current--1');

const dice_element = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let totalScores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score_0_element.textContent = 0;
    score_1_element.textContent = 0;
    current_0_element.textContent = 0;
    current_1_element.textContent = 0;

    dice_element.classList.add('hidden');
    player_0_element.classList.remove('player--winner');
    player_1_element.classList.remove('player--winner');
    player_0_element.classList.add('player--active');
    player_1_element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player_0_element.classList.toggle('player--active');
    player_1_element.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        // 2. dsplay dice
        dice_element.classList.remove('hidden');
        dice_element.src = `dice-${dice}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// Holding current score

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            totalScores[activePlayer];

        // 2. Check if player's score is >= 100
        if (totalScores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            dice_element.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }

        // Switch to the next player
        switchPlayer();
    }
});

// Reseting the game

btnNew.addEventListener('click', init);
