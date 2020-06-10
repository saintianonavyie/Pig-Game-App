/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

/*document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        
        // Round Number generation
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //Diplay the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        //update roundscore IF rolled number is NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add Number
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //NextPlayer
            nextPlayer();
        }


        if (dice1 === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';  
            alert('six at a row');
            nextPlayer();
        } else if (dice1 !== 1) {
            //Add Number
        roundScore += dice1 + dice2
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //NextPlayer
            nextPlayer();
        }
        lastDice = dice1;
    }
        

})*/

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        
        // Round Number generation
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        
        //Diplay the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        //update roundscore IF rolled number is NOT a 1
        if (dice1 !== 1 && lastDice !== 6) {
            //Add Number
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //NextPlayer
            nextPlayer();
        }
    }
        
    lastDice = dice1;
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    scores[activePlayer] += roundScore;

    //update the global score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    nextPlayer();

    //undefined, 0, null, or "" are COERCED to false
    //Anything else is COERCED to true
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
        nextPlayer();
    }
    
    //check if their is winner
    if (scores[activePlayer] >= winningScore) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    } else if (scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        //NextPlayer
        nextPlayer();
    }

    }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {  
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}




/*document.querySelector('.rules').addEventListener('click', function(){
var display = document.querySelector('.game-rules').style.display == 'block' ? 'none' : 'block';
document.querySelector('.game-rules').style.display = display;
})*/


var display = document.querySelector('.game-rules').style.display = 'none';

document.querySelector('.rules').addEventListener('click', function(){
    if (display == document.querySelector('.game-rules').style.display) {
        document.querySelector('.game-rules').style.display = 'block';
    } else {
        document.querySelector('.game-rules').style.display = 'none';
    }
})












//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;