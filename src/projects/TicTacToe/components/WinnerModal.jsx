/* eslint-disable react/prop-types */
import { Square } from '../components/Square.jsx';
export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? 'Tie' : 'Winner ';
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Start a new game</button>
        </footer>
      </div>
    </section>
  );
}
