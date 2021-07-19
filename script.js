'use strict';
// console.log(document.querySelector('.message').textContent);
//  document.querySelector('.message').textContent='Correct Number!';

//  document.querySelector('.number').textContent= 13
//  document.querySelector('.score').textContent =20

//   console.log(document.querySelector('.guess').value);
//   console.log(document.querySelector('.guess').value=20);


/*events*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;




function displayMessage(message) {
    document.querySelector('.message').textContent = message
}



function checkResult(message) {
    if (score > 1) {
        displayMessage(message);
        score--
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You lost the game')
    }
}

document.querySelector('.guess').addEventListener('input', function (e) {
    if (e.target.value < 0) e.target.value = 0
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)


    // empty or falsy
    if (!guess) {
        document.querySelector('.message').textContent = '-No number'

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Valod you won')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.fontSize = '10rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }





    } else if (guess > secretNumber) {
        checkResult('Too high!');
    } else if (guess < secretNumber) {
        checkResult('Too low!');
    }

});
//// again button logic

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1)
        ;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.fontSize = '6rem';

})





