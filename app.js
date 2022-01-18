let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);

}

let turnCount = 1; //turn counter

console.log(turnCount) //check turn count before game starts
//console.log(cells[1]);

function cellClicked(ev) { //add x or o to game board
    
    if (turnCount === 10 || turnCount === 11){
        window.location.reload();
    }

    if (turnCount % 2 === 1 && turnCount < 10 && ev.target.textContent === ' ' ) { //when this is true the game is on odd turns and x will play
        
        ev.target.textContent = 'x'
        //console.log(turnCount)
        turnCount++ //increments turn count
        console.log(turnCount)

        gameWinCheck();
        

    } else if (turnCount % 2 === 0  && turnCount < 10 && ev.target.textContent === ' ' ) { //otherwise the game is on an even turn and o will play
        
        ev.target.textContent = 'o'
        //console.log(turnCount)
        turnCount++
        console.log(turnCount)

        gameWinCheck();
    }
   
}

function gameWinCheck() {
    if (cells[0].textContent === 'x' && cells[1].textContent === 'x' && cells[2].textContent === 'x' || //win check for horizontal x
        cells[3].textContent === 'x' && cells[4].textContent === 'x' && cells[5].textContent === 'x' ||
        cells[6].textContent === 'x' && cells[7].textContent === 'x' && cells[8].textContent === 'x' ||

        cells[0].textContent === 'x' && cells[3].textContent === 'x' && cells[6].textContent === 'x' || // win check for vertical x
        cells[1].textContent === 'x' && cells[4].textContent === 'x' && cells[7].textContent === 'x' ||
        cells[2].textContent === 'x' && cells[5].textContent === 'x' && cells[8].textContent === 'x' ||

        cells[0].textContent === 'x' && cells[4].textContent === 'x' && cells[8].textContent === 'x' || // win check for diagonal x
        cells[2].textContent === 'x' && cells[4].textContent === 'x' && cells[6].textContent === 'x') {

        console.log('x wins')
        //document.querySelectorAll()
        document.getElementById('message').textContent = 'X is the Winner!'
        document.getElementById('playAgain').textContent = 'Would you like to Play Again?'
        turnCount = 11


    }

    if (
        cells[0].textContent === 'o' && cells[1].textContent === 'o' && cells[2].textContent === 'o' || //win check for horizontal o
        cells[3].textContent === 'o' && cells[4].textContent === 'o' && cells[5].textContent === 'o' ||
        cells[6].textContent === 'o' && cells[7].textContent === 'o' && cells[8].textContent === 'o' ||

        cells[0].textContent === 'o' && cells[3].textContent === 'o' && cells[6].textContent === 'o' || // win check for vertical o
        cells[1].textContent === 'o' && cells[4].textContent === 'o' && cells[7].textContent === 'o' ||
        cells[2].textContent === 'o' && cells[5].textContent === 'o' && cells[8].textContent === 'o' ||

        cells[0].textContent === 'o' && cells[4].textContent === 'o' && cells[8].textContent === 'o' || // win check for diagonal o
        cells[2].textContent === 'o' && cells[4].textContent === 'o' && cells[6].textContent === 'o') {
        
            console.log('o wins')
            document.getElementById('message').textContent = 'O is the Winner!'
            document.getElementById('playAgain').textContent = 'Would you like to Play Again?'
        turnCount = 11


    
    }

    if (turnCount === 10 ) {
        document.getElementById('message').textContent = 'You have averted Global Thermonuclear War'
        document.getElementById('playAgain').textContent = 'Would you like to Play Again?'
        console.log('You have averted global thermonuclear war')
    }

}






/*function gameWin() {
    if (cells[1].textContent && cells[1].textContent && cells[2].textContent  ==='x');
        console.log('x win')
}
*/


// draw , check all win conditions and a draw will happen when turn count reaches the end
//but no win condition met after if else for x and o else then is a draw






//alternate making x and o . done
//determine a win state for x and o and draw
//turn counter . done
//set game so the spots cant be replaced


/*if ( cells[0].textContent === "X" ){

    console.log("it works")
    }
    else {
    console.log('nope')

    }
*/



//console.log(cells)






/*if (turnCount % 2 === 0){
    event.target.textContent = 'X'
    turnCount++

} else (turnCount % 2 === 0)
    event.target.textContent = 'O'
    turnCount++

    */



// Hint
// if else statement
// cells[0].textContent
// === comparison operators