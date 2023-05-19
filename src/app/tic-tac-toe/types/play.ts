import { TPlayer } from '@/app/tic-tac-toe/types/player';

export interface IPlay {
  player: 'X' | 'O';
  slots: (TPlayer | null)[];
}
