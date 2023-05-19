import type { TPlayer } from '@/app/tic-tac-toe/types/player';

export const checkWinner = (slots: (TPlayer | null)[]) => {
  const winningCombinations = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (slots[a] && slots[a] === slots[b] && slots[a] === slots[c]) {
      return slots[a];
    }
  }

  return null;
};
