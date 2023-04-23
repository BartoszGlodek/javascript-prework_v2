
var playerMove, computerMove, playerMoveNumber, randomNumber, result;


//---------------------------------------------------------POSSIBLE PLAYS--------------------------|


function getMoveName(moveId) {
    if (moveId === 1) {
        return 'kamień';
    } else if (moveId === 2) {
        return 'papier';
    } else if (moveId === 3) {
        return 'nożyce';
    }
}


//---------------------------------------------------------RESULT GAME-----------------------------|


function displayResult(playerMove, computerMove) {
    if (playerMove === computerMove) {
        printMessage('Remis !');
        return 'Remis !';
    } else if ((playerMove === 'kamień' && computerMove === 'nożyce') ||
        (playerMove === 'papier' && computerMove === 'kamień') ||
        (playerMove === 'nożyce' && computerMove === 'papier')) {
        printMessage('Wygrywasz !');
        return 'Wygrywasz !';
    } else {
        printMessage('Przegrywasz !');
        return 'Przegrywasz !';
    }
}


//---------------------------------------------------------GAME PROCESS----------------------------|


playerMoveNumber = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if (playerMoveNumber === '1' || playerMoveNumber === '2' || playerMoveNumber === '3') {

    playerMove = getMoveName(parseInt(playerMoveNumber));
    printMessage('Twój ruch to: ' + playerMove);

    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);
    printMessage('Komputer wybrał: ' + computerMove);

    result = displayResult(playerMove, computerMove);

    console.log('wybrana przez Ciebie liczba to:' + playerMoveNumber);
    console.log('dlatego zagrywasz: ' + playerMove);
    console.log('wylosowana liczba przez komputer to:' + randomNumber);
    console.log('dlatego komputer zagrywa:' + computerMove);
    console.log('wynik gry:' + result);
}
else {
    printMessage('Tak się nie bawimy !');
    console.log('Wybrałeś liczbę z poza zakresu !')
}