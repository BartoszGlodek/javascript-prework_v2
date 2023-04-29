//---------------------------------------------------------POSSIBLE PLAYER OPTIONS------------------|

function buttonClicked(argButtonName) {
    clearMessages();
    console.log('Przycisk ' + argButtonName + ' został kliknięty');
    playerMove = argButtonName;
}

const kamień = document.getElementById('button-rock');
kamień.addEventListener('click', function () { buttonClicked('kamień'); });

const papier = document.getElementById('button-paper');
papier.addEventListener('click', function () { buttonClicked('papier'); });

const nożyce = document.getElementById('button-scissors');
nożyce.addEventListener('click', function () { buttonClicked('nożyce'); });


//---------------------------------------------------------POSSIBLE COMPUTER PLAYS-----------------|


function getMoveName(moveId) {
    if (moveId === 1) {
        return 'kamień';
    } else if (moveId === 2) {
        return 'papier';
    } else if (moveId === 3) {
        return 'nożyce';
    }
}


//---------------------------------------------------------RESULT GAME & WIN COUNTER---------------|


let playerWins = 0, computerWins = 0;

function displayResult(playerMove, computerMove) {
    if (playerMove === computerMove) {
        printMessage('Remis !');
        return 'Remis !';
    } else if (
        (playerMove === 'kamień' && computerMove === 'nożyce') ||
        (playerMove === 'papier' && computerMove === 'kamień') ||
        (playerMove === 'nożyce' && computerMove === 'papier')) {
        printMessage('Wygrywasz !');
        playerWins++;
        return 'Wygrywasz !';
    } else {
        printMessage('Przegrywasz !');
        computerWins++;
        return 'Przegrywasz !';
    }
}

function printScore() {
    printMessage('Gracz: ' + playerWins + ' - Komputer: ' + computerWins);
}


//---------------------------------------------------------GAME PROCESS----------------------------|


kamień.addEventListener('click', function () { GameProcess('kamień'); });
papier.addEventListener('click', function () { GameProcess('papier'); });
nożyce.addEventListener('click', function () { GameProcess('nożyce'); });

function GameProcess() {
    clearMessages();

    let computerMove, randomNumber, result;
    
    if (playerMove !== '') {
        randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);

        printMessage('Twój ruch to: ' + playerMove);
        printMessage('Komputer wybrał: ' + computerMove);

        result = displayResult(playerMove, computerMove);
        printScore()

        console.log('Wybrana przez Ciebie opcja to: ' + playerMove);
        console.log('Wylosowana liczba przez komputer to: ' + randomNumber);
        console.log('Dlatego komputer zagrywa: ' + computerMove);
        console.log('Tę rundę: ' + result);
        console.log('Gracz ' + playerWins + ' - ' + computerWins + ' Komputer');
    }
}