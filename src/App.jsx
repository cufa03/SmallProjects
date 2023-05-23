/* eslint-disable react/prop-types */
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Board } from './components/Board.jsx';
import { Square } from './components/Square.jsx';
import { TURNS } from './constants.js';
import { checkWinnerFrom, checkEndGame } from './board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
///////////////////////////////////////////////
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null is no Winner and false is a tie
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    // don't update the board if the position already have someting or a winner
    if (board[index] || winner) return;
    // Update the board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // Change the turn of the player
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // check if the board have a winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    // TODO: check if game is over
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <Board board={board} updateBoard={updateBoard} />
      {/* <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section> */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
