import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { checkWinner } from '@/app/tic-tac-toe/components/Grid/utils';
import type { TPlayer } from '@/app/tic-tac-toe/types/player';
import type { IPlay } from '@/app/tic-tac-toe/types/play';
import { EMPTY_GRID } from '@/app/tic-tac-toe/components/Grid/constants';

const Grid = ({
  player,
  handleTurn,
  handleSetWinner,
  winner,
  onReset,
}: {
  player: TPlayer;
  handleTurn: (nextPlayer: TPlayer) => void;
  handleSetWinner: (winner: TPlayer | null) => void;
  winner: TPlayer | null;
  onReset: () => void;
}) => {
  const [slots, setSlots] = useState<(TPlayer | null)[]>(EMPTY_GRID);
  const [playHistory, setPlayHistory] = useState<IPlay[]>([
    { player: 'X', slots: EMPTY_GRID },
  ]);
  const replayMessage = (index: number) =>
    !index ? 'go to game start' : `go to play number ${index}`;

  const handleClick = (index: number) => {
    const newSlots = slots.map((slot, i) => (i === index ? player : slot));
    setSlots(newSlots);
    const nextPlayer = player === 'X' ? 'O' : 'X';
    handleTurn(nextPlayer);
    setPlayHistory((playHistory) => {
      const numberOfPlays = newSlots.reduce(
        (accumulator, slot) => (slot ? accumulator + 1 : accumulator),
        0,
      );
      return numberOfPlays === playHistory.length
        ? [...playHistory, { player: nextPlayer, slots: newSlots }]
        : [
            ...playHistory.slice(0, numberOfPlays),
            { player: nextPlayer, slots: newSlots },
          ];
    });
  };

  const handleReset = () => {
    setSlots(EMPTY_GRID);
    setPlayHistory([{ player: 'X', slots: EMPTY_GRID }]);
    onReset();
  };

  const handlePreviousPlay = (index: number) => {
    setSlots(playHistory[index].slots);
    handleTurn(playHistory[index].player);
  };

  useEffect(() => {
    const winner = checkWinner(slots);
    handleSetWinner(winner);
  }, [handleSetWinner, slots]);

  // useEffectEvent not working
  // const onNewPlay = experimental_useEffectEvent((player: TPlayer) => {
  //   setPlayHistory((playHistory) => [...playHistory, { player, slots }]);
  // });

  return (
    <>
      <div className="flex flex-row gap-4">
        <div
          className={`flex flex-wrap mt-4 h-fit w-[110px] ${
            winner ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          {slots.map((slot, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-[34px] h-[34px] border border-white ${
                slots[index] !== null ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={() => slots[index] === null && handleClick(index)}
            >
              {slot}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {playHistory.map((play, index) => (
            <Button
              size="sm"
              key={index}
              onClick={() => handlePreviousPlay(index)}
            >
              {replayMessage(index)}
            </Button>
          ))}
        </div>
      </div>
      <Button className="mt-4" onClick={handleReset}>
        Reset
      </Button>
    </>
  );
};

export default Grid;
