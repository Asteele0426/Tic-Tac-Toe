/*--------constants----------*/

//1.1 colors object with keys of 'null' and players 1, -1
const COLORS = {
    'null': 'white',
    '1': 'blue',
    '-1': 'orange'
}

//1.2 Define 8 possible winning combinations each containing 3 indexes of the board that make a winner if they hold the same player value.
const winningCombos =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
];
//2.1 use a board array to represent the squares. 1 big array that holds 3 smaller arrays
let board = [null, null, null, null, null, null, null, null, null]
//2.2 Use a turn variable to remember whose turn it is.
let turn = 1 //1 || or -1

// 2.3 Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
let winner = null //null || 1 || -1
function initialize() {


//2.1 use a board array to represent the squares. 1 big array that holds 3 smaller arrays
board = [null, null, null, null, null, null, null, null, null]
//2.2 Use a turn variable to remember whose turn it is.
turn = 1 //1 || or -1

// 2.3 Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
winner = null //null || 1 || -1
}
//3.1 store the 9 elements that represent the squares on the page

function move(event) {
    const id = pareseInt(event.target.id)
    board[id] = turn
    turn*=-1
}

//4.1 initialize the state variables
initialize() 

//4.1.1 Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
//4.1.2Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
//4.1.3 Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    //render the state variables to the page
    render();
}
