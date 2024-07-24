// let gameBoard = [];
// let currentPlayer = 'X';
// let gameOver = false;

// // Initialize game board
// for (let i = 0; i < 9; i++) {
//     gameBoard.push('');
//     document.getElementById(`cell-${i}`).addEventListener('click', handleCellClick);
// }

// function handleCellClick(event) {
//     if (gameOver) return;
//     const cellIndex = event.target.id.split('-')[1];
//     if (gameBoard[cellIndex] === '') {
//         gameBoard[cellIndex] = currentPlayer;
//         event.target.textContent = currentPlayer;
//         event.target.classList.add(currentPlayer.toLowerCase());
//         checkForWin();
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     }
// }

// function checkForWin() {
//     const winConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < winConditions.length; i++) {
//         const condition = winConditions[i];
//         if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== '') {
//             gameOver = true;
//             alert(`Player ${gameBoard[condition[0]]} wins!`);
//             return;
//         }
//     }
//     if (!gameBoard.includes('')) {
//         gameOver = true;
//         alert('It\'s a draw!');
//     }
// }

function createGameDesign() {
    console.log("Entered");
    for (var i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        const cell1 = document.createElement('div');
        cell1.classList.add('cell');
        const cell2 = document.createElement('div');
        cell2.classList.add('cell');
        const cell3 = document.createElement('div');
        cell3.classList.add('cell');

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
    }

}

window.onload = function() {
    createGameDesign();
}