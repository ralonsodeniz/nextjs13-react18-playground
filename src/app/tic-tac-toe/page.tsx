'use client';

import { useCallback, useState } from 'react';
import Grid from '@/app/tic-tac-toe/components/Grid';
import type { TPlayer } from '@/app/tic-tac-toe/types/player';

const TicTacToePage = () => {
  const [player, setPlayer] = useState<TPlayer>('X');
  const [winner, setWinner] = useState<TPlayer | null>(null);
  const handleTurn = (nextPlayer: TPlayer) => setPlayer(nextPlayer);
  const handleSetWinner = useCallback(
    (winner: TPlayer | null) => setWinner(winner),
    [],
  );
  const onReset = () => {
    setPlayer('X');
    setWinner(null);
  };

  return (
    <div>
      <h1>Next Player: {player}</h1>
      <Grid
        player={player}
        handleTurn={handleTurn}
        handleSetWinner={handleSetWinner}
        winner={winner}
        onReset={onReset}
      />
      <h2 className="my-4">Winner: {winner ?? ''}</h2>
    </div>
  );
};

export default TicTacToePage;
