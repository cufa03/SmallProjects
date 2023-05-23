import { WINNER_COMBOS } from './constants';
export const checkWinnerFrom = (boardToCheck) => {
  // checking every combo to find a winner
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // return the winner (X or O)
      return boardToCheck[a];
    }
  }
  // if we don't have a winner
  return null;
};
export const checkEndGame = (newBoard) => {
  // check if the board have a tie (means no more space on the board to play)
  return newBoard.every((square) => square != null);
};
