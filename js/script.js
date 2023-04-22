function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


// getMoveName V ---------------------------------------------------------------





// number drawn by the system V ------------------------------------------------


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
}
    else if(randomNumber == 2) {
        computerMove = 'papier';
    }
    else if(randomNumber == 3) {
        computerMove = 'nożyce';
    }                            

printMessage('Mój ruch to: ' + computerMove);


// ansewr player V -------------------------------------------------------------


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
}
    else if(playerInput == 2) {
        playerMove = 'papier';
    }
    else if(playerInput == 3) {
        playerMove = 'nożyce';
    }

printMessage('Twój ruch to: ' + playerMove);


// game result V ----------------------------------------------------------------


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz !');
  }
    else if( computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Wygrałem !');
    }
    else if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('REMIS !');
    }
    else if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('REMIS !');
    }
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz !');
    }
    else if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Wygrałem !');
    }
    else if( computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Wygrałem !');
    }
    else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('REMIS !');
    }
    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz !');
    }
    else if( playerMove = 'nieznany ruch'){
        printMessage('Tak się nie bawimy !');
    }
    